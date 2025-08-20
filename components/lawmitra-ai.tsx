"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bot, Loader2, ExternalLink, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { botpressClient } from "@/lib/botpress-client"

interface LawMitraAIProps {
  isOpen: boolean
  onClose: () => void
  triggerRect?: DOMRect | null
}

interface Message {
  type: "bot" | "user"
  content: string
  timestamp: Date
}

// Create a variable outside the component to persist chat state
const chatPersistenceState = {
  hasInteracted: false,
  messages: [] as Message[],
  isInitialized: false,
}

export default function LawMitraAI({ isOpen, onClose, triggerRect }: LawMitraAIProps) {
  const [messages, setMessages] = useState<Message[]>(chatPersistenceState.messages)
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isBotTyping, setBotTyping] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(chatPersistenceState.hasInteracted)
  const [isInitialized, setIsInitialized] = useState(chatPersistenceState.isInitialized)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint in Tailwind
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calculate position based on trigger element
  useEffect(() => {
    if (!isOpen || !triggerRect) return

    // On mobile, position below the header
    if (isMobile) {
      // Position below the header (approximately 70px from top)
      setPosition({
        top: 70,
        left: window.innerWidth / 2 - (modalRef.current?.offsetWidth || 300) / 2,
      })
      return
    }

    // On desktop, position below the button
    const modalHeight = modalRef.current?.offsetHeight || 300
    const modalWidth = modalRef.current?.offsetWidth || 300

    // Calculate initial position below the button
    let top = triggerRect.bottom + 10
    let left = triggerRect.left + triggerRect.width / 2 - modalWidth / 2

    // Check if there's enough space below
    if (top + modalHeight > window.innerHeight) {
      // Not enough space below, center it vertically
      top = window.innerHeight / 2 - modalHeight / 2
    }

    // Ensure it doesn't go off-screen horizontally
    if (left < 10) left = 10
    if (left + modalWidth > window.innerWidth - 10) {
      left = window.innerWidth - modalWidth - 10
    }

    setPosition({ top, left })
  }, [isOpen, triggerRect, isMobile])

  // Use the outside click hook
  useOutsideClick(modalRef, onClose, isOpen)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isBotTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Initialize chat with welcome message if not already initialized
  useEffect(() => {
    if (isOpen && !isInitialized) {
      setIsInitialized(true)
      chatPersistenceState.isInitialized = true

      // The welcome message will come from Botpress
      setBotTyping(true)
    }
  }, [isOpen, isInitialized])

  // Set up Botpress message listener
  useEffect(() => {
    if (!isOpen) return

    const unsubscribe = botpressClient.onMessage((botpressMessage) => {
      setBotTyping(false)

      if (botpressMessage.source === "bot") {
        let content = ""

        // Extract the message content based on the type
        if (botpressMessage.type === "text" && botpressMessage.payload.text) {
          content = botpressMessage.payload.text
        } else if (botpressMessage.payload.message) {
          content = botpressMessage.payload.message
        } else {
          content = "I received your message but I'm not sure how to respond to that."
        }

        const botMessage: Message = {
          type: "bot",
          content: content,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        chatPersistenceState.messages = [...chatPersistenceState.messages, botMessage]
        setIsLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [isOpen])

  // Update persistence state when messages change
  useEffect(() => {
    chatPersistenceState.messages = messages
  }, [messages])

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    // Add user message to chat
    const userMessage: Message = {
      type: "user",
      content: inputMessage.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    chatPersistenceState.messages = [...chatPersistenceState.messages, userMessage]
    setInputMessage("")
    setIsLoading(true)
    setBotTyping(true)
    setError(null)

    try {
      // Send message to Botpress
      botpressClient.sendMessage(inputMessage.trim())
      // The response will be handled by the message listener
    } catch (err) {
      console.error("Error sending message to Botpress:", err)
      setError("Sorry, I'm having trouble connecting to my brain. Please try again later.")
      setIsLoading(false)
      setBotTyping(false)
    } finally {
      setHasInteracted(true)
      chatPersistenceState.hasInteracted = true
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)
  }

  // Handle key press (Enter to send)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center">
          {/* Backdrop - semi-transparent to show website background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={isFullScreen ? undefined : onClose}
          />

          {/* Chat Modal */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`bg-white dark:bg-gray-900 rounded-xl shadow-2xl relative z-[101] overflow-hidden flex flex-col
              ${
                isFullScreen
                  ? "fixed inset-4 w-auto h-auto max-w-none"
                  : isMobile
                    ? "w-[90%] h-[70vh] mt-20"
                    : "w-full max-w-md h-[500px]"
              }`}
            style={
              isFullScreen
                ? {}
                : isMobile
                  ? {}
                  : { position: "absolute", top: `${position.top}px`, left: `${position.left}px` }
            }
          >
            {/* Header */}
            <div className="bg-gold/10 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="bg-gold/20 rounded-full p-2">
                  <Bot className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">LawMitra AI</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullScreen}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">{isFullScreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.type === "user" ? "justify-end" : ""}`}>
                  {message.type === "bot" && (
                    <div className="bg-gold/20 rounded-full p-2 mt-1">
                      <Bot className="h-5 w-5 text-gold" />
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] relative ${
                      message.type === "user"
                        ? "bg-gold text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 block mt-1 text-right">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              ))}

              {/* Bot typing indicator */}
              {isBotTyping && (
                <div className="flex items-start gap-3">
                  <div className="bg-gold/20 rounded-full p-2 mt-1">
                    <Bot className="h-5 w-5 text-gold" />
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <div
                      className="w-2 h-2 bg-gold rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gold rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gold rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="bg-red-50 text-red-500 rounded-lg p-3 max-w-[80%]">
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold dark:bg-gray-700 dark:text-white"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-gold hover:bg-gold/90 text-white"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                LawMitra AI provides general legal information, not legal advice. For specific legal advice, please
                consult with an attorney.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
