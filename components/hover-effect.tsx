"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HoverEffectProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
  translateY?: number
  shadow?: boolean
}

export function HoverEffect({
  children,
  className = "",
  scale = 1.05,
  rotate = 0,
  translateY = -5,
  shadow = true,
}: HoverEffectProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotate: rotate,
        y: translateY,
        boxShadow: shadow ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : undefined,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
