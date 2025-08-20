"use client"

import type React from "react"
import { CookieConsentProvider } from "@/contexts/cookie-consent-context"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration"
import { ResourcePreload } from "@/components/resource-preload"
import { CriticalCssExtractor } from "@/components/critical-css-extractor"
import { ScriptOptimizer } from "@/components/script-optimizer"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ResourceHints } from "@/components/resource-hints"

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Only run client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get path-specific critical resources
  const getPathResources = (path: string) => {
    // Home page
    if (path === "/") {
      return [
        {
          href: "/logo-transparent.png",
          as: "image",
          importance: "high",
        },
        {
          href: "/grand-legal-hall.png",
          as: "image",
          importance: "high",
        },
      ]
    }

    // Practice areas
    if (path.startsWith("/practice-areas")) {
      return [
        {
          href: "/services-hero.jpg",
          as: "image",
          importance: "high",
        },
      ]
    }

    // Contact page
    if (path === "/contact") {
      return [
        {
          href: "/modern-law-office.png",
          as: "image",
          importance: "high",
        },
      ]
    }

    // Default resources
    return [
      {
        href: "/logo-transparent.png",
        as: "image",
        importance: "high",
      },
    ]
  }

  // Critical resources to preload
  const criticalResources = [
    {
      href: "/favicon.ico",
      as: "image",
    },
  ]

  // Path-specific resources
  const pathResources = isMounted ? getPathResources(pathname) : []

  // Combine resources
  const allResources = [...criticalResources, ...pathResources]

  // Implement advanced performance optimizations
  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to optimize LCP
    const optimizeLCP = () => {
      // Find potential LCP elements
      const lcpCandidates = document.querySelectorAll("img, video, h1, h2, .hero, section.hero, .banner")

      // Set high priority for potential LCP elements
      lcpCandidates.forEach((el) => {
        if (el instanceof HTMLImageElement) {
          el.fetchPriority = "high"
          el.loading = "eager"

          // Add decoding async for images
          el.decoding = "async"
        }
      })
    }

    // Function to optimize fonts
    const optimizeFonts = () => {
      // Add font-display: swap to all font faces
      const style = document.createElement("style")
      style.textContent = `
        @font-face {
          font-display: swap !important;
        }
      `
      document.head.appendChild(style)
    }

    // Function to optimize third-party resources
    const optimizeThirdParty = () => {
      // Delay loading of non-critical third-party scripts
      const thirdPartyScripts = Array.from(document.querySelectorAll("script[src]")).filter(
        (script) => !script.src.includes(window.location.hostname),
      )

      thirdPartyScripts.forEach((script) => {
        // Skip if already has defer or async
        if (script.defer || script.async) return

        // Create a new script element
        const newScript = document.createElement("script")
        newScript.src = script.src
        newScript.defer = true

        // Copy other attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== "src" && attr.name !== "defer" && attr.name !== "async") {
            newScript.setAttribute(attr.name, attr.value)
          }
        })

        // Replace the original script
        script.parentNode?.replaceChild(newScript, script)
      })
    }

    // Execute optimizations
    if (document.readyState === "complete") {
      optimizeLCP()
      optimizeFonts()
      optimizeThirdParty()
    } else {
      window.addEventListener("load", () => {
        optimizeLCP()
        optimizeFonts()
        optimizeThirdParty()
      })
    }

    // Clean up service worker cache periodically
    const cleanupServiceWorkerCache = () => {
      if (typeof window !== "undefined" && "serviceWorker" in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: "CLEAN_EXPIRED_CACHES",
        })
      }
    }

    // Clean up on load and every hour
    cleanupServiceWorkerCache()
    const cleanupInterval = setInterval(cleanupServiceWorkerCache, 60 * 60 * 1000)

    return () => {
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <CookieConsentProvider>
      {/* Performance optimizers - only run on client */}
      {isMounted && (
        <>
          <ResourcePreload resources={allResources} />
          <CriticalCssExtractor />
          <ScriptOptimizer />
          <ResourceHints />
        </>
      )}

      {children}
      <CookieConsentBanner />
      {isMounted && <ServiceWorkerRegistration />}
    </CookieConsentProvider>
  )
}
