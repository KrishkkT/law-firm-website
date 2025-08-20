"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface ResourceHintsProps {
  preconnect?: string[]
  prefetch?: string[]
  preload?: Array<{
    href: string
    as: string
    type?: string
    crossOrigin?: string
    media?: string
    fetchPriority?: "high" | "low" | "auto"
  }>
}

export function ResourceHints({
  preconnect = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ],
  prefetch = [],
  preload = [
    {
      href: "/logo-transparent.png",
      as: "image",
      fetchPriority: "high",
    },
  ],
}: ResourceHintsProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Add preconnect hints
    preconnect.forEach((url) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement("link")
        link.rel = "preconnect"
        link.href = url
        link.crossOrigin = "anonymous"
        document.head.appendChild(link)
      }
    })

    // Add prefetch hints for likely navigation
    prefetch.forEach((url) => {
      if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = url
        link.as = "document"
        document.head.appendChild(link)
      }
    })

    // Add preload hints for critical resources
    preload.forEach((resource) => {
      if (!document.querySelector(`link[rel="preload"][href="${resource.href}"]`)) {
        const link = document.createElement("link")
        link.rel = "preload"
        link.href = resource.href
        link.as = resource.as

        if (resource.type) link.type = resource.type
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin
        if (resource.media) link.media = resource.media
        if (resource.fetchPriority) link.setAttribute("fetchpriority", resource.fetchPriority)

        document.head.appendChild(link)
      }
    })

    // Dynamically add prefetch for likely next pages
    const addDynamicPrefetch = () => {
      // Get all links on the page
      const links = document.querySelectorAll('a[href^="/"]:not([rel="prefetch"])')

      // Create a Set to store unique URLs
      const urlsToFetch = new Set<string>()

      // Add links that are likely to be clicked
      links.forEach((link) => {
        const href = link.getAttribute("href")
        if (href && href !== pathname && !href.includes("#") && !prefetch.includes(href)) {
          // Check if link is in viewport or close to it
          const rect = link.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 1.5

          if (isVisible) {
            urlsToFetch.add(href)
          }
        }
      })

      // Limit to 5 most likely pages to avoid excessive prefetching
      const topUrls = Array.from(urlsToFetch).slice(0, 5)

      // Prefetch these pages
      topUrls.forEach((url) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = url
        link.as = "document"
        document.head.appendChild(link)
      })
    }

    // Add dynamic prefetch after page has loaded
    if (document.readyState === "complete") {
      addDynamicPrefetch()
    } else {
      window.addEventListener("load", addDynamicPrefetch, { once: true })
    }

    return () => {
      window.removeEventListener("load", addDynamicPrefetch)
    }
  }, [pathname, preconnect, prefetch, preload])

  return null
}
