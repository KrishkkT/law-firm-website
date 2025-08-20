"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PerformanceMetrics {
  FCP: number | null
  LCP: number | null
  CLS: number | null
  FID: number | null
  TTFB: number | null
}

export function PerformanceMonitor() {
  const pathname = usePathname()
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    FCP: null,
    LCP: null,
    CLS: null,
    FID: null,
    TTFB: null,
  })

  useEffect(() => {
    // Reset metrics on route change
    setMetrics({
      FCP: null,
      LCP: null,
      CLS: null,
      FID: null,
      TTFB: null,
    })

    // Only run in production and if the browser supports the Performance API
    if (
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      !("performance" in window) ||
      !("PerformanceObserver" in window)
    ) {
      return
    }

    // Load web-vitals library
    import("web-vitals").then(({ onFCP, onLCP, onCLS, onFID, onTTFB }) => {
      // First Contentful Paint
      onFCP((metric) => {
        setMetrics((prev) => ({ ...prev, FCP: metric.value }))
        sendToAnalytics("FCP", metric)
      })

      // Largest Contentful Paint
      onLCP((metric) => {
        setMetrics((prev) => ({ ...prev, LCP: metric.value }))
        sendToAnalytics("LCP", metric)
      })

      // Cumulative Layout Shift
      onCLS((metric) => {
        setMetrics((prev) => ({ ...prev, CLS: metric.value }))
        sendToAnalytics("CLS", metric)
      })

      // First Input Delay
      onFID((metric) => {
        setMetrics((prev) => ({ ...prev, FID: metric.value }))
        sendToAnalytics("FID", metric)
      })

      // Time to First Byte
      onTTFB((metric) => {
        setMetrics((prev) => ({ ...prev, TTFB: metric.value }))
        sendToAnalytics("TTFB", metric)
      })
    })

    // Send metrics to Google Analytics
    const sendToAnalytics = (name: string, metric: { name: string; value: number; id: string }) => {
      try {
        if (window.gtag) {
          window.gtag("event", name, {
            event_category: "Web Vitals",
            event_label: metric.id,
            value: Math.round(metric.value),
            non_interaction: true,
            page_path: pathname,
          })
        }
      } catch {
        // Silently fail to avoid console errors
      }
    }
  }, [pathname])

  // This component doesn't render anything visible
  return null
}
