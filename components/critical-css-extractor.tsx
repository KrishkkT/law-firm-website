"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function CriticalCssExtractor() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Function to extract critical CSS
    const extractCriticalCSS = () => {
      // Get all stylesheets
      const styleSheets = Array.from(document.styleSheets)

      // Create a new style element for critical CSS
      const criticalStyle = document.createElement("style")
      criticalStyle.id = "critical-css"

      // Get viewport height
      const viewportHeight = window.innerHeight

      // Get all elements in the viewport
      const elementsInViewport = []
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT)

      let node
      while ((node = walker.nextNode())) {
        const rect = node.getBoundingClientRect()
        if (rect.top < viewportHeight * 1.5) {
          // Include elements slightly below viewport
          elementsInViewport.push(node)
        }
      }

      // Extract CSS rules for elements in viewport
      let criticalCSS = ""

      styleSheets.forEach((sheet) => {
        try {
          // Skip external stylesheets
          if (!sheet.href || sheet.href.startsWith(window.location.origin)) {
            const rules = Array.from(sheet.cssRules || [])

            rules.forEach((rule) => {
              // Check if rule applies to any element in viewport
              if (rule.type === CSSRule.STYLE_RULE) {
                const selector = rule.selectorText

                // Check if selector matches any element in viewport
                const isUsed = elementsInViewport.some((element) => {
                  try {
                    return element.matches(selector)
                  } catch (e) {
                    return false
                  }
                })

                if (isUsed) {
                  criticalCSS += rule.cssText + "\n"
                }
              } else if (
                rule.type === CSSRule.FONT_FACE_RULE ||
                rule.type === CSSRule.KEYFRAMES_RULE ||
                rule.type === CSSRule.MEDIA_RULE
              ) {
                // Include font-face, keyframes, and media rules
                criticalCSS += rule.cssText + "\n"
              }
            })
          }
        } catch (e) {
          // Skip cross-origin stylesheets
          console.warn("Could not access stylesheet:", e)
        }
      })

      // Set the critical CSS
      criticalStyle.textContent = criticalCSS

      // Add to head
      document.head.appendChild(criticalStyle)

      // Store in localStorage for future visits
      try {
        localStorage.setItem(`critical-css-${pathname}`, criticalCSS)
      } catch (e) {
        console.warn("Could not store critical CSS in localStorage:", e)
      }
    }

    // Check if we have cached critical CSS
    let criticalCSS
    try {
      criticalCSS = localStorage.getItem(`critical-css-${pathname}`)
    } catch (e) {
      console.warn("Could not access localStorage:", e)
    }

    if (criticalCSS) {
      // Use cached critical CSS
      const criticalStyle = document.createElement("style")
      criticalStyle.id = "critical-css"
      criticalStyle.textContent = criticalCSS
      document.head.appendChild(criticalStyle)
    } else {
      // Extract critical CSS after page load
      if (document.readyState === "complete") {
        extractCriticalCSS()
      } else {
        window.addEventListener("load", extractCriticalCSS, { once: true })
      }
    }

    return () => {
      window.removeEventListener("load", extractCriticalCSS)

      // Remove critical CSS when navigating away
      const criticalStyle = document.getElementById("critical-css")
      if (criticalStyle) {
        criticalStyle.remove()
      }
    }
  }, [pathname])

  return null
}
