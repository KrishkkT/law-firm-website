"use client"

import { useLoading } from "@/contexts/loading-context"
import { useEffect, useState } from "react"

export function ProgressBar() {
  const { isLoading, progress } = useLoading()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setVisible(true)
    } else {
      // Keep the bar visible briefly after loading completes
      const timeout = setTimeout(() => {
        setVisible(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [isLoading])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-200">
      <div className="h-full bg-blue-600 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}
