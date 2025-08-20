"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DynamicContentProps {
  children: ReactNode[]
  interval?: number
  className?: string
}

export function DynamicContent({ children, interval = 5000, className = "" }: DynamicContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length)
        setIsVisible(true)
      }, 300) // Wait for exit animation to complete
    }, interval)

    return () => clearInterval(timer)
  }, [children.length, interval])

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children[currentIndex]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
