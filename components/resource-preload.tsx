"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

interface ResourcePreloadProps {
  resources?: {
    href: string
    as: "script" | "style" | "image" | "font" | "fetch"
    type?: string
    crossOrigin?: "anonymous" | "use-credentials"
    media?: string
    importance?: "high" | "low" | "auto"
  }[]
  dynamicResources?: {
    [path: string]: {
      href: string
      as: "script" | "style" | "image" | "font" | "fetch"
      type?: string
      crossOrigin?: "anonymous" | "use-credentials"
      media?: string
      importance?: "high" | "low" | "auto"
    }[]
  }
}

export function ResourcePreload({ resources = [], dynamicResources = {} }: ResourcePreloadProps) {
  const pathname = usePathname()
  const preloadedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (typeof window === "undefined") return

    // Get resources for current path
    const pathResources = dynamicResources[pathname] || []
    const allResources = [...resources, ...pathResources]

    if (!allResources.length) return

    // Create link elements for preloading
    allResources.forEach((resource) => {
      // Skip if already preloaded
      const resourceKey = `${resource.href}-${resource.as}`
      if (preloadedRef.current.has(resourceKey)) return

      const link = document.createElement("link")
      link.rel = "preload"
      link.href = resource.href
      link.as = resource.as

      if (resource.type) link.type = resource.type
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin
      if (resource.media) link.media = resource.media
      if (resource.importance) link.setAttribute("importance", resource.importance)

      document.head.appendChild(link)
      preloadedRef.current.add(resourceKey)
    })

    // Prefetch next likely pages
    if (pathname === "/") {
      // From homepage, likely to visit about, services, or contact
      prefetchPage("/about")
      prefetchPage("/services")
      prefetchPage("/contact")
    } else if (pathname.startsWith("/practice-areas")) {
      // From practice areas, likely to visit consultation
      prefetchPage("/consultation")
    }

    // Clean up on unmount or path change
    return () => {
      // We don't remove preloaded resources as they might be useful for future navigation
    }
  }, [pathname, resources, dynamicResources])

  // Helper function to prefetch pages
  const prefetchPage = (path: string) => {
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.href = path
    link.as = "document"
    document.head.appendChild(link)
  }

  return null
}
