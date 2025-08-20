"use client"

import type { Variants } from "framer-motion"

// Fade in animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
}

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Card hover animation for service cards
export const cardHover = {
  rest: { scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  hover: { scale: 1.03, y: -5, transition: { duration: 0.3, ease: "easeOut" } },
}

// Button hover animation
export const buttonHover = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
}
