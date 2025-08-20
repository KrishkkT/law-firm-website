"use client"

import { useEffect } from "react"

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return

    // Register service worker
    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js")
        console.log("Service Worker registered with scope:", registration.scope)

        // Set up periodic cache cleanup
        setInterval(() => {
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              type: "CLEAN_EXPIRED_CACHES",
            })
          }
        }, 3600000) // Every hour
      } catch (error) {
        console.error("Service Worker registration failed:", error)
      }
    }

    // Register when page is fully loaded
    if (document.readyState === "complete") {
      registerServiceWorker()
    } else {
      window.addEventListener("load", registerServiceWorker)
      return () => window.removeEventListener("load", registerServiceWorker)
    }
  }, [])

  return null
}
