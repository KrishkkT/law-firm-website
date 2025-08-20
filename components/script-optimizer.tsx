"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScriptOptimizer() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to defer non-critical scripts
    const deferNonCriticalScripts = () => {
      // Find all script tags
      const scripts = document.querySelectorAll("script[src]:not([async]):not([defer])")

      scripts.forEach((script) => {
        const src = script.getAttribute("src") || ""

        // Skip critical scripts
        if (src.includes("chunk-") || src.includes("main-") || src.includes("webpack-") || src.includes("framework-")) {
          return
        }

        // Create a new deferred script
        const newScript = document.createElement("script")
        newScript.src = src
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

    // Function to lazy load non-critical resources
    const lazyLoadNonCriticalResources = () => {
      // Create an intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target

              // Handle images
              if (element.tagName === "IMG" && !element.hasAttribute("loading")) {
                element.setAttribute("loading", "lazy")
              }

              // Handle iframes
              if (element.tagName === "IFRAME" && !element.hasAttribute("loading")) {
                element.setAttribute("loading", "lazy")
              }

              // Stop observing this element
              observer.unobserve(element)
            }
          })
        },
        {
          rootMargin: "200px",
        },
      )

      // Observe images and iframes below the fold
      const viewportHeight = window.innerHeight
      const mediaElements = document.querySelectorAll("img, iframe")

      mediaElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top > viewportHeight) {
          observer.observe(element)
        }
      })
    }

    // Function to optimize third-party resources
    const optimizeThirdPartyResources = () => {
      // Add preconnect for third-party domains
      const thirdPartyDomains = new Set()

      // Find all external resources
      const externalResources = document.querySelectorAll("link[href], script[src], img[src], iframe[src]")

      externalResources.forEach((resource) => {
        const src = resource.getAttribute("src") || resource.getAttribute("href") || ""

        try {
          const url = new URL(src, window.location.origin)

          // Skip same origin
          if (url.origin === window.location.origin) return

          thirdPartyDomains.add(url.origin)
        } catch (e) {
          // Invalid URL, skip
        }
      })

      // Add preconnect for each third-party domain
      thirdPartyDomains.forEach((domain) => {
        if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
          const link = document.createElement("link")
          link.rel = "preconnect"
          link.href = domain
          link.crossOrigin = "anonymous"
          document.head.appendChild(link)
        }
      })
    }

    // Function to optimize Google Analytics
    const optimizeGoogleAnalytics = () => {
      // Check if GA is loaded
      if (window.ga || window.gtag) {
        // Set minimal pageview data
        if (window.gtag) {
          window.gtag("config", "G-4YC3PPDPKD", {
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: "SameSite=None;Secure",
            transport_type: "beacon",
          })
        }
      }
    }

    // Function to optimize LCP element
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

          // Add importance hint
          el.setAttribute("importance", "high")
        }
      })
    }

    // Execute optimizations
    // Use requestIdleCallback to avoid blocking the main thread
    if ("requestIdleCallback" in window) {
      // @ts-ignore
      window.requestIdleCallback(
        () => {
          deferNonCriticalScripts()
          lazyLoadNonCriticalResources()
          optimizeThirdPartyResources()
          optimizeGoogleAnalytics()
          optimizeLCP()
        },
        { timeout: 2000 },
      )
    } else {
      // Fallback to setTimeout
      setTimeout(() => {
        deferNonCriticalScripts()
        lazyLoadNonCriticalResources()
        optimizeThirdPartyResources()
        optimizeGoogleAnalytics()
        optimizeLCP()
      }, 1000)
    }
  }, [pathname])

  return null
}
