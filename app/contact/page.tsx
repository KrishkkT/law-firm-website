"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react"
import SafeImage from "@/components/safe-image"
import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://formspree.io/f/mpwwojlg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you as soon as possible.",
          variant: "success",
          className: "bg-green-500 text-white border-green-600",
        })
        // Clear form fields
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
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
            <SafeImage src="/gilded-legal-lobby.png" alt="Contact Us" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 mx-auto px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-white leading-tight mb-6">
              Contact <span className="text-gold">Thakker & Associates</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              We're here to help with your legal needs. Reach out to schedule a consultation or learn more about our
              services.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Get in Touch</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and one of our team members will get back to you as soon as possible.
              </p>

              <motion.form
                ref={formRef}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      name="first-name"
                      placeholder="Enter your first name"
                      required
                      className="transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      name="last-name"
                      placeholder="Enter your last name"
                      required
                      className="transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="practice-area" className="text-sm font-medium">
                    Practice Area
                  </label>
                  <select
                    id="practice-area"
                    name="practice-area"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                  >
                    <option value="">Select a practice area</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="family-law">Family Law</option>
                    <option value="business-law">Business Law</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="criminal-defense">Criminal Defense</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your legal matter"
                    rows={5}
                    required
                    className="transition-all duration-300 focus:ring-gold/50 focus:border-gold"
                  />
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">Contact Information</h2>
              <div className="divider-gold-left"></div>
              <p className="text-muted-foreground mb-8">
                We look forward to hearing from you. Here's how you can reach us.
              </p>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-8">
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Our Office</h3>
                          <p className="text-muted-foreground">
                            Kaveri Complex, Nawapara
                            <br />
                            Bhavnagar, Gujarat-364001
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:+919898241082" className="hover:text-gold transition-colors">
                              +91 9898241082
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            <a href="mailto:infojtlaw@gmail.com" className="hover:text-gold transition-colors">
                              infojtlaw@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 10:00 AM - 9:00 PM
                            <br />
                            Saturday: 10:00 AM - 8:00 PM
                            <br />
                            Sunday: 10:00 AM - 2:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.1414376277116!2d72.14664987388134!3d21.774786361740716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bfb7076d807%3A0x3bab8e325b6dc65c!2sThakker%20%26%20Associates(Adv.%20Jaymin%20Thakker)!5e0!3m2!1sen!2sin!4v1744911296520!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
