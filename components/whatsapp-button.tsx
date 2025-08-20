"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill out all fields",
        description: "Both name and message are required",
        variant: "destructive",
      })
      return
    }

    // Format the message for WhatsApp
    const formattedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`)
    // Open WhatsApp in new tab
    window.open(`https://wa.me/919898241082?text=${formattedMessage}`, "_blank")

    // Reset fields and close popup
    setName("")
    setMessage("")
    setIsOpen(false)

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with us shortly",
    })
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 300 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 300 }}
            className="fixed right-6 bottom-24 z-50 bg-background border border-border shadow-lg rounded-lg p-4 w-80"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-500" /> WhatsApp Contact
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare size={24} />
      </motion.button>
    </>
  )
}
