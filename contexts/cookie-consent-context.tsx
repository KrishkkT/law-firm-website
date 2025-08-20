"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ConsentType = "all" | "necessary" | "none"

interface CookieConsentContextType {
  consent: ConsentType
  setConsent: (consent: ConsentType) => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
  hasInteracted: boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentType>("necessary")
  const [showBanner, setShowBanner] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const setConsent = (newConsent: ConsentType) => {
    setConsentState(newConsent)
    localStorage.setItem("cookieConsent", newConsent)
    setHasInteracted(true)
    setShowBanner(false)
  }

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookieConsent") as ConsentType | null

    if (savedConsent) {
      setConsentState(savedConsent)
      setHasInteracted(true)
    } else {
      // Show banner if no choice has been made
      setShowBanner(true)
    }
  }, [])

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent, showBanner, setShowBanner, hasInteracted }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}
