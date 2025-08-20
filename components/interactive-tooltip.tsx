"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface InteractiveTooltipProps {
  children: ReactNode
  content: ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function InteractiveTooltip({ children, content, position = "top", className = "" }: InteractiveTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  const arrowStyles = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-800 border-l-transparent border-r-transparent border-b-transparent",
    bottom:
      "top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-800 border-l-transparent border-r-transparent border-t-transparent",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-800 border-t-transparent border-b-transparent border-r-transparent",
    right:
      "left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-800 border-t-transparent border-b-transparent border-l-transparent",
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 max-w-xs rounded bg-gray-800 px-3 py-2 text-sm text-white shadow-lg dark:bg-gray-700 ${positionStyles[position]}`}
          >
            {content}
            <span className={`absolute border-4 ${arrowStyles[position]}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
