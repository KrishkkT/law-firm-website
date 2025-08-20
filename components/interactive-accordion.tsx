"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-blue-600 dark:hover:text-blue-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface InteractiveAccordionProps {
  items: {
    title: string
    content: ReactNode
    defaultOpen?: boolean
  }[]
  className?: string
}

export function InteractiveAccordion({ items, className = "" }: InteractiveAccordionProps) {
  return (
    <div className={`divide-y divide-gray-200 dark:divide-gray-700 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
