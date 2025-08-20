"use client"

import { useEffect } from "react"

export function InteractionTracker() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.dataLayer) return

    // Track clicks on interactive elements
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Find the closest interactive element
      const button = target.closest("button")
      const link = target.closest("a")
      const input = target.closest('input[type="submit"], input[type="button"]')

      if (button) {
        const buttonText = button.textContent?.trim() || "unnamed button"
        const buttonId = button.id || ""
        const buttonClass = button.className || ""

        window.dataLayer.push({
          event: "button_click",
          button_text: buttonText,
          button_id: buttonId,
          button_class: buttonClass,
        })
      } else if (link) {
        const linkText = link.textContent?.trim() || "unnamed link"
        const linkHref = link.getAttribute("href") || ""
        const linkId = link.id || ""

        window.dataLayer.push({
          event: "link_click",
          link_text: linkText,
          link_href: linkHref,
          link_id: linkId,
          is_external: linkHref.startsWith("http") && !linkHref.includes(window.location.hostname),
        })
      } else if (input) {
        const inputValue = input.getAttribute("value") || "unnamed input"
        const inputId = input.id || ""

        window.dataLayer.push({
          event: "input_click",
          input_value: inputValue,
          input_id: inputId,
        })
      }
    }

    // Track form submissions
    const handleSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement
      const formId = form.id || "unnamed form"
      const formAction = form.action || ""

      window.dataLayer.push({
        event: "form_submit",
        form_id: formId,
        form_action: formAction,
      })
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("submit", handleSubmit)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("submit", handleSubmit)
    }
  }, [])

  return null
}

// Add this to global.d.ts
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    webVitals?: {
      getCLS: (cb: (metric: any) => void) => void
      getFID: (cb: (metric: any) => void) => void
      getLCP: (cb: (metric: any) => void) => void
    }
  }
}
