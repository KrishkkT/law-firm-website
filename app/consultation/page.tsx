"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, AlertCircle } from "lucide-react"
import { gujaratDistricts, gujaratCities } from "@/lib/gujarat-data"
import SafeImage from "@/components/safe-image"
import { validateConsultationForm, type ValidationError, sanitizeInput } from "@/lib/form-validation"
import { useNotification } from "@/components/notification"

export default function ConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [csrfToken, setCsrfToken] = useState("")
  const [submissionCount, setSubmissionCount] = useState(0)
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0)
  const { toast } = useToast()
  const { showNotification } = useNotification()
  const formRef = useRef<HTMLFormElement>(null)

  // Generate CSRF token on component mount
  useEffect(() => {
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setCsrfToken(token)

    // Store token in sessionStorage
    sessionStorage.setItem("csrfToken", token)

    // Reset submission count after 1 hour
    const now = Date.now()
    const storedCount = sessionStorage.getItem("submissionCount")
    const storedTime = sessionStorage.getItem("lastSubmissionTime")

    if (storedCount && storedTime) {
      const timeDiff = now - Number.parseInt(storedTime)
      if (timeDiff > 3600000) {
        // 1 hour
        sessionStorage.setItem("submissionCount", "0")
        setSubmissionCount(0)
      } else {
        setSubmissionCount(Number.parseInt(storedCount))
        setLastSubmissionTime(Number.parseInt(storedTime))
      }
    }
  }, [])

  const getFieldError = (fieldName: string): string | undefined => {
    const error = errors.find((err) => err.field === fieldName)
    return error?.message
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Rate limiting check
    const now = Date.now()
    if (submissionCount >= 5 && now - lastSubmissionTime < 3600000) {
      // 5 submissions per hour
      showNotification("Too many attempts. Please try again later.", "error")
      return
    }

    // Validate CSRF token
    const storedToken = sessionStorage.getItem("csrfToken")
    if (csrfToken !== storedToken) {
      showNotification("Security error. Please refresh the page and try again.", "error")
      return
    }

    const formData = new FormData(e.currentTarget)

    // Validate form
    const validationErrors = validateConsultationForm(formData)
    setErrors(validationErrors)

    if (validationErrors.length > 0) {
      // Scroll to the first error
      const firstErrorField = document.getElementById(validationErrors[0].field)
      firstErrorField?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    setIsSubmitting(true)

    try {
      // Sanitize inputs before sending
      const sanitizedFormData = new FormData()
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
          sanitizedFormData.append(key, sanitizeInput(value))
        } else {
          sanitizedFormData.append(key, value)
        }
      }

      // Add CSRF token to form data
      sanitizedFormData.append("csrfToken", csrfToken)

      const response = await fetch("https://formspree.io/f/mpwwojlg", {
        method: "POST",
        body: sanitizedFormData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        // Update submission count
        const newCount = submissionCount + 1
        setSubmissionCount(newCount)
        setLastSubmissionTime(now)
        sessionStorage.setItem("submissionCount", newCount.toString())
        sessionStorage.setItem("lastSubmissionTime", now.toString())

        showNotification("Consultation request submitted successfully!", "success")
        toast({
          title: "Consultation Request Submitted",
          description: "We'll get back to you as soon as possible.",
          variant: "success",
          className: "bg-green-500 text-white border-green-600",
        })

        // Clear form fields
        if (formRef.current) {
          formRef.current.reset()
        }
        setSelectedDistrict("")
        setErrors([])

        // Generate new CSRF token
        const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        setCsrfToken(newToken)
        sessionStorage.setItem("csrfToken", newToken)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      showNotification("Failed to submit form. Please try again later.", "error")
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
        className: "bg-red-50 border-red-200 text-red-800",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <SafeImage src="/refined-legal-meeting.png" alt="Consultation" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="container relative z-10 mx-auto px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Schedule a <span className="text-gold">Consultation</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Fill out the form below to schedule a consultation with one of our experienced attorneys. We'll get back
              to you as soon as possible.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-card rounded-xl shadow-xl p-8 border border-border"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-cormorant font-bold mb-6 text-center">
                Request Your Consultation
              </motion.h2>
              <motion.div variants={itemVariants} className="divider-gold mx-auto mb-8"></motion.div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_csrf" value={csrfToken} />

                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center justify-between">
                      Full Name
                      {getFieldError("name") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("name")}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                        getFieldError("name") ? "border-red-500" : ""
                      }`}
                      aria-invalid={getFieldError("name") ? "true" : "false"}
                      aria-describedby={getFieldError("name") ? "name-error" : undefined}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center justify-between">
                      Email Address
                      {getFieldError("email") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("email")}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                        getFieldError("email") ? "border-red-500" : ""
                      }`}
                      aria-invalid={getFieldError("email") ? "true" : "false"}
                      aria-describedby={getFieldError("email") ? "email-error" : undefined}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center justify-between">
                      Phone Number
                      {getFieldError("phone") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("phone")}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                        getFieldError("phone") ? "border-red-500" : ""
                      }`}
                      aria-invalid={getFieldError("phone") ? "true" : "false"}
                      aria-describedby={getFieldError("phone") ? "phone-error" : undefined}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="flex items-center justify-between">
                      Your City
                      {getFieldError("city") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("city")}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      required
                      className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                        getFieldError("city") ? "border-red-500" : ""
                      }`}
                      aria-invalid={getFieldError("city") ? "true" : "false"}
                      aria-describedby={getFieldError("city") ? "city-error" : undefined}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="district" className="flex items-center justify-between">
                      District of Incident
                      {getFieldError("district") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("district")}
                        </span>
                      )}
                    </Label>
                    <Select
                      name="district"
                      value={selectedDistrict}
                      onValueChange={(value) => setSelectedDistrict(value)}
                      required
                    >
                      <SelectTrigger
                        id="district"
                        className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                          getFieldError("district") ? "border-red-500" : ""
                        }`}
                        aria-invalid={getFieldError("district") ? "true" : "false"}
                        aria-describedby={getFieldError("district") ? "district-error" : undefined}
                      >
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {gujaratDistricts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incidentCity" className="flex items-center justify-between">
                      City of Incident
                      {getFieldError("incidentCity") && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("incidentCity")}
                        </span>
                      )}
                    </Label>
                    <Select name="incidentCity" required>
                      <SelectTrigger
                        id="incidentCity"
                        className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                          getFieldError("incidentCity") ? "border-red-500" : ""
                        }`}
                        aria-invalid={getFieldError("incidentCity") ? "true" : "false"}
                        aria-describedby={getFieldError("incidentCity") ? "incidentCity-error" : undefined}
                      >
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedDistrict &&
                          gujaratCities[selectedDistrict]?.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="message" className="flex items-center justify-between">
                    Your Message
                    {getFieldError("message") && (
                      <span className="text-red-500 text-xs flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" /> {getFieldError("message")}
                      </span>
                    )}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your legal matter"
                    rows={5}
                    required
                    className={`transition-all duration-300 focus:ring-gold/50 focus:border-gold ${
                      getFieldError("message") ? "border-red-500" : ""
                    }`}
                    aria-invalid={getFieldError("message") ? "true" : "false"}
                    aria-describedby={getFieldError("message") ? "message-error" : undefined}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <p className="text-xs text-muted-foreground mb-4">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-gold hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to the processing of your personal data.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold/90 text-white py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                      </>
                    ) : (
                      "Submit Consultation Request"
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 text-center"
            >
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
