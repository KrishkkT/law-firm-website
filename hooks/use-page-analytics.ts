"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export function usePageAnalytics(pageName: string, metadata?: Record<string, any>) {
  useEffect(() => {
    // Track page-specific data
    trackEvent({
      type: "page_view",
      page: pageName,
      metadata: {
        page_name: pageName,
        ...metadata,
      },
    })

    // Track page load time
    const pageLoadTime =
      window.performance?.timing?.domContentLoadedEventEnd - window.performance?.timing?.navigationStart

    if (pageLoadTime && pageLoadTime > 0) {
      trackEvent({
        type: "custom",
        component: "performance",
        label: "page_load_time",
        value: pageLoadTime,
        metadata: {
          page_name: pageName,
          load_time_ms: pageLoadTime,
        },
      })
    }

    return () => {
      // Track page exit time
      const timeOnPage = Math.round((Date.now() - performance.now()) / 1000)
      trackEvent({
        type: "custom",
        component: "engagement",
        label: "time_on_page",
        value: timeOnPage,
        metadata: {
          page_name: pageName,
          time_seconds: timeOnPage,
        },
      })
    }
  }, [pageName, metadata])
}
