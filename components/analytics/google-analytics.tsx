"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = searchParams?.size ? `${pathname}?${searchParams.toString()}` : pathname

      // Send page view to GA
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-4YC3PPDPKD", {
          page_path: url,
        })
      }
    }
  }, [pathname, searchParams])

  return null
}
