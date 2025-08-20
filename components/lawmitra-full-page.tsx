"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Bot, RefreshCw, ArrowLeft, Send, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { botpressClient, type BotpressMessage } from "@/lib/botpress-client"

interface Message {
  type: "bot" | "user"
  content: string
  timestamp: Date
}

// Create a variable outside the component to persist chat state
const chatPersistenceState = {
  messages: [] as Message[],
  isInitialized: false,
}

export default function LawMitraFullPage() {
  const [messages, setMessages] = useState<Message[]>(chatPersistenceState.messages)
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isBotTyping, setBotTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isInitialized, setIsInitialized] = useState(chatPersistenceState.isInitialized)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isBotTyping])

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [])

  // Initialize chat with welcome message if not already initialized
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      chatPersistenceState.isInitialized = true

      // The welcome message will come from Botpress
      setBotTyping(true)
    }
  }, [isInitialized])

  // Set up Botpress message listener
  useEffect(() => {
    const unsubscribe = botpressClient.onMessage((botpressMessage: BotpressMessage) => {
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
        chatPersistenceState.messages = [...messages, botMessage]
        setIsLoading(false)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [messages])

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
    chatPersistenceState.messages = [...messages, userMessage]
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

  // Reset chat
  const resetChat = () => {
    setMessages([])
    chatPersistenceState.messages = []
    setError(null)
    botpressClient.reset()
    setBotTyping(true)
  }

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gold/20 rounded-full p-2">
              <Bot className="h-6 w-6 text-gold" />
            </div>
            <h2 className="text-xl font-bold">LawMitra AI</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your AI-powered legal assistant, designed to provide instant information and guidance on various legal
            matters.
          </p>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <ArrowLeft className="h-4 w-4" />
              <Link href="/" className="w-full text-left">
                Back to Home
              </Link>
            </Button>

            <Button className="w-full justify-start gap-2 bg-gold hover:bg-gold/90 text-white" onClick={resetChat}>
              <RefreshCw className="h-4 w-4" />
              Restart Chat
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Legal information assistance</li>
              <li>• Practice area guidance</li>
              <li>• Consultation scheduling help</li>
              <li>• 24/7 availability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chat interface */}
      <div className="w-full lg:w-3/4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm h-[calc(100vh-200px)] flex flex-col">
          {/* Chat header */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-4 bg-gold/10">
            <h2 className="font-bold">Chat with LawMitra AI</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ask me anything about legal matters</p>
          </div>

          {/* Chat messages */}
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
                  <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
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
        </div>
      </div>
    </div>
  )
}
