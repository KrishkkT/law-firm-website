"use client"

import type React from "react"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect, useState } from "react"
import { setupScrollToTop } from "@/lib/scroll-utils"
import { NotificationProvider } from "@/components/notification"
import { PopupProvider } from "@/components/popup-context"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppButton from "@/components/whatsapp-button"
import { InteractionTracker } from "@/components/analytics/interaction-tracker"
import { PerformanceMonitor } from "@/components/performance-monitor"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

function handleImageErrors() {
  if (typeof window !== "undefined") {
    // Add a global handler for image loading errors
    window.addEventListener(
      "error",
      (e) => {
        if (e.target instanceof HTMLImageElement && e.target.src === "") {
          // Prevent empty src attributes
          e.preventDefault()
          e.stopPropagation()

          // Set a fallback or remove the image
          if (e.target.dataset.fallback) {
            e.target.src = e.target.dataset.fallback
          } else {
            e.target.style.display = "none"
          }
        }
      },
      true,
    )
  }
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    handleImageErrors()
    setupScrollToTop() // Set up scroll to top functionality

    // Mark as loaded after a short delay to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <NotificationProvider>
        <PopupProvider>
          <div
            className={`flex min-h-screen flex-col ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
            <InteractionTracker />
            <PerformanceMonitor />
          </div>
        </PopupProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}
