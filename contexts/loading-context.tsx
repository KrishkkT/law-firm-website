"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  progress: number
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  // Reset loading state on route change
  useEffect(() => {
    setIsLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return 100
        }

        // Accelerate progress as it gets closer to 100
        const increment = prevProgress < 30 ? 10 : prevProgress < 70 ? 5 : 2
        return Math.min(prevProgress + increment, 99)
      })
    }, 100)

    // Simulate loading completion
    const timeout = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsLoading(false), 200) // Small delay to show 100% before hiding
    }, 800)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [pathname])

  return <LoadingContext.Provider value={{ isLoading, setIsLoading, progress }}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
