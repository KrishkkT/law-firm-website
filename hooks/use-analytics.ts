"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView, trackEvent, trackFormSubmission, trackScrollDepth } from "@/lib/analytics"

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (pathname) {
      // Construct the URL with search parameters
      const url = searchParams?.size ? `${pathname}?${searchParams.toString()}` : pathname

      // Track the page view
      trackPageView(url)
    }
  }, [pathname, searchParams])

  // Track scroll depth
  useEffect(() => {
    if (typeof window === "undefined") return

    const scrollDepths = [25, 50, 75, 90]
    const trackedDepths: number[] = []

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      scrollDepths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
          trackedDepths.push(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Return utility functions for components to use
  return {
    trackEvent,
    trackFormSubmission,
  }
}
