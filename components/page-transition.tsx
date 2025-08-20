"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect } from "react"
import { useLoading } from "@/contexts/loading-context"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { isLoading } = useLoading()

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate={isLoading ? "hidden" : "enter"}
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: "tween" }}
    >
      {children}
    </motion.div>
  )
}
