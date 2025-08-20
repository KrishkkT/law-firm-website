"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion, type MotionProps, type Variants } from "framer-motion"

type AnimationVariant = "fadeIn" | "slideInLeft" | "slideInRight" | "scaleUp" | "staggerChildren"

// Define animation variants
const variants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: custom * 0.1 },
    }),
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: custom * 0.1 },
    }),
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
}

interface AnimateProps extends MotionProps {
  children: ReactNode
  variant: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

export function Animate({
  children,
  variant,
  delay = 0,
  duration,
  className = "",
  once = true,
  amount = 0.2,
  ...rest
}: AnimateProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[variant]}
      custom={delay}
      transition={duration ? { duration } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

interface AnimateListProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
}

export function AnimateList({ children, staggerDelay = 0.1, className = "", once = true }: AnimateListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child

        return <motion.div variants={itemVariants}>{child}</motion.div>
      })}
    </motion.div>
  )
}

export function AnimateHover({
  children,
  scale = 1.05,
  className = "",
}: { children: ReactNode; scale?: number; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ scale }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}
