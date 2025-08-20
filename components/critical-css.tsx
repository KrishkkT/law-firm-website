"use client"

import { useEffect } from "react"

// This component extracts and inlines critical CSS for faster rendering
export function CriticalCssExtractor() {
  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV !== "production") return

    // Function to extract critical CSS
    const extractCriticalCss = () => {
      try {
        // Get all stylesheets
        const styleSheets = Array.from(document.styleSheets)

        // Get viewport height
        const viewportHeight = window.innerHeight

        // Get all elements in the viewport
        const elementsInViewport = Array.from(document.querySelectorAll("*")).filter((el) => {
          const rect = el.getBoundingClientRect()
          return rect.top < viewportHeight
        })

        // Extract classes from elements in viewport
        const criticalClasses = new Set()
        elementsInViewport.forEach((el) => {
          if (el.className && typeof el.className === "string") {
            el.className.split(" ").forEach((cls) => {
              if (cls) criticalClasses.add(cls.trim())
            })
          }
        })

        // Extract critical CSS rules
        let criticalCss = ""
        styleSheets.forEach((sheet) => {
          try {
            // Skip external stylesheets
            if (!sheet.href || sheet.href.startsWith(window.location.origin)) {
              const rules = Array.from(sheet.cssRules || [])
              rules.forEach((rule) => {
                // Include all @font-face, @keyframes, and :root rules
                if (
                  rule.type === CSSRule.FONT_FACE_RULE ||
                  rule.type === CSSRule.KEYFRAMES_RULE ||
                  (rule.type === CSSRule.STYLE_RULE && rule.selectorText === ":root")
                ) {
                  criticalCss += rule.cssText + "\n"
                }
                // Include rules that match critical classes
                else if (rule.type === CSSRule.STYLE_RULE) {
                  const selector = rule.selectorText
                  if (
                    // Include element selectors
                    /^[a-z]+$/.test(selector) ||
                    // Include critical class selectors
                    Array.from(criticalClasses).some((cls) => selector.includes(`.${cls}`)) ||
                    // Include important utility classes
                    selector.includes(".container") ||
                    selector.includes(".flex") ||
                    selector.includes(".grid") ||
                    selector ||
                    selector.includes(".grid") ||
                    selector.includes(".hidden") ||
                    selector.includes(".fixed") ||
                    selector.includes(".absolute") ||
                    selector.includes(".relative")
                  ) {
                    criticalCss += rule.cssText + "\n"
                  }
                }
              })
            }
          } catch (e) {
            // Skip problematic stylesheets
            console.warn("Could not process stylesheet", e)
          }
        })

        return criticalCss
      } catch (e) {
        console.error("Error extracting critical CSS", e)
        return ""
      }
    }

    // Create and inject critical CSS
    const injectCriticalCss = (css) => {
      if (!css) return

      const style = document.createElement("style")
      style.setAttribute("data-critical", "true")
      style.textContent = css
      document.head.appendChild(style)

      // Store in localStorage for future visits
      try {
        localStorage.setItem("criticalCss", css)
        localStorage.setItem("criticalCssTimestamp", Date.now().toString())
      } catch (e) {
        console.warn("Could not store critical CSS in localStorage", e)
      }
    }

    // Check if we have cached critical CSS
    const cachedCss = localStorage.getItem("criticalCss")
    const timestamp = localStorage.getItem("criticalCssTimestamp")
    const isRecent = timestamp && Date.now() - Number.parseInt(timestamp) < 86400000 // 24 hours

    if (cachedCss && isRecent) {
      // Use cached critical CSS
      injectCriticalCss(cachedCss)
    } else {
      // Extract and inject critical CSS
      // Use requestIdleCallback to avoid blocking the main thread
      if ("requestIdleCallback" in window) {
        // @ts-ignore
        window.requestIdleCallback(
          () => {
            const css = extractCriticalCss()
            injectCriticalCss(css)
          },
          { timeout: 2000 },
        )
      } else {
        // Fallback to setTimeout
        setTimeout(() => {
          const css = extractCriticalCss()
          injectCriticalCss(css)
        }, 1000)
      }
    }
  }, [])

  return null
}
