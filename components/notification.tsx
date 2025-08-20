"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, X } from "lucide-react"

type NotificationType = "success" | "error" | "info"

type Notification = {
  id: string
  message: string
  type: NotificationType
}

type NotificationContextType = {
  notifications: Notification[]
  showNotification: (message: string, type: NotificationType) => void
  removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  showNotification: () => {},
  removeNotification: () => {},
})

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const showNotification = (message: string, type: NotificationType = "info") => {
    const id = Math.random().toString(36).substring(2, 9)
    setNotifications((prev) => [...prev, { id, message, type }])

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, showNotification, removeNotification }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  return useContext(NotificationContext)
}

export function showNotification(message: string, type: NotificationType = "info") {
  // This is a fallback for components that don't have access to the context
  // It will use toast if available, otherwise it will use alert
  let context: NotificationContextType | null = null
  try {
    context = useContext(NotificationContext)
  } catch (error) {
    console.error("Notification context not available", error)
  }

  if (context) {
    context.showNotification(message, type)
  } else {
    alert(message)
  }
}

export function NotificationContainer() {
  const { notifications, removeNotification } = useContext(NotificationContext)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${
              notification.type === "success"
                ? "bg-green-500 text-white"
                : notification.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
            }`}
            style={{ minWidth: "300px" }}
          >
            <div className="flex items-center">
              {notification.type === "success" ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : notification.type === "error" ? (
                <AlertCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              <p>{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
