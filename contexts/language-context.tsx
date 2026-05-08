"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type Language = {
  code: string
  name: string
  path: string
  translationUrl: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    path: "",
    translationUrl: "",
  },
  {
    code: "gu",
    name: "Gujarati",
    path: "/gujarati",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=gu&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
  {
    code: "hi",
    name: "Hindi",
    path: "/hindi",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
  {
    code: "mr",
    name: "Marathi",
    path: "/marathi",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=mr&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
  {
    code: "es",
    name: "Spanish",
    path: "/spanish",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
  {
    code: "fr",
    name: "French",
    path: "/french",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
  {
    code: "de",
    name: "German",
    path: "/german",
    translationUrl:
      "https://jayminthakkerlaw-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true",
  },
]

type LanguageContextType = {
  currentLanguage: Language
  languages: Language[]
  changeLanguage: (languageCode: string) => void
  isTranslationFrameVisible: boolean
  translationUrl: string
  closeTranslationFrame: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])
  const [isTranslationFrameVisible, setIsTranslationFrameVisible] = useState(false)
  const [translationUrl, setTranslationUrl] = useState("")

  // Detect language from URL on initial load
  useEffect(() => {
    const languageFromPath = languages.find((lang) => pathname === lang.path || pathname.startsWith(`${lang.path}/`))

    if (languageFromPath && languageFromPath.code !== "en") {
      setCurrentLanguage(languageFromPath)
    }
  }, [pathname])

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", currentLanguage.code)
    }
  }, [currentLanguage])

  // Load language preference from localStorage on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferredLanguage")
      if (savedLanguage) {
        const language = languages.find((lang) => lang.code === savedLanguage)
        if (language) {
          setCurrentLanguage(language)
        }
      }
    }
  }, [])

  const changeLanguage = (languageCode: string) => {
    const language = languages.find((lang) => lang.code === languageCode)
    if (!language) return

    setCurrentLanguage(language)

    if (language.code === "en") {
      // For English, just navigate to the original path without the language prefix
      const originalPath = pathname.replace(/^\/(gujarati|hindi|marathi|spanish|french|german)/, "")
      router.push(originalPath || "/")
      setIsTranslationFrameVisible(false)
    } else {
      // For other languages, update the URL and show the translation frame
      const currentPath = pathname.replace(/^\/(gujarati|hindi|marathi|spanish|french|german)/, "")
      const newPath = `${language.path}${currentPath}`

      // Update the URL without a full page reload
      window.history.pushState({}, "", newPath)

      // Show the translation in an iframe
      setTranslationUrl(language.translationUrl)
      setIsTranslationFrameVisible(true)
    }
  }

  const closeTranslationFrame = () => {
    setIsTranslationFrameVisible(false)
    setCurrentLanguage(languages[0]) // Reset to English

    // Remove language prefix from URL
    const originalPath = pathname.replace(/^\/(gujarati|hindi|marathi|spanish|french|german)/, "")
    router.push(originalPath || "/")
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        languages,
        changeLanguage,
        isTranslationFrameVisible,
        translationUrl,
        closeTranslationFrame,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
