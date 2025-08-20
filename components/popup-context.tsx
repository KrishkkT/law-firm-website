"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type PopupType = string
type PopupData = Record<string, any>

interface PopupContextType {
  activePopups: PopupType[]
  openPopup: (type: PopupType, data?: PopupData) => void
  closePopup: (type: PopupType) => void
  closeAllPopups: () => void
  getPopupData: (type: PopupType) => PopupData | undefined
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [activePopups, setActivePopups] = useState<PopupType[]>([])
  const [popupData, setPopupData] = useState<Record<PopupType, PopupData>>({})

  const openPopup = useCallback((type: PopupType, data?: PopupData) => {
    setActivePopups((prev) => {
      if (!prev.includes(type)) {
        return [...prev, type]
      }
      return prev
    })

    if (data) {
      setPopupData((prev) => ({
        ...prev,
        [type]: data,
      }))
    }
  }, [])

  const closePopup = useCallback((type: PopupType) => {
    setActivePopups((prev) => prev.filter((popup) => popup !== type))
  }, [])

  const closeAllPopups = useCallback(() => {
    setActivePopups([])
  }, [])

  const getPopupData = useCallback(
    (type: PopupType) => {
      return popupData[type]
    },
    [popupData],
  )

  // Handle global click to close popups
  const handleGlobalClick = useCallback(
    (e: MouseEvent) => {
      // Check if the click is on a popup trigger element
      const isPopupTrigger = (e.target as Element)?.closest("[data-popup-trigger]")

      if (!isPopupTrigger && activePopups.length > 0) {
        // Check if the click is inside any popup content
        const isInsidePopup = (e.target as Element)?.closest("[data-popup-content]")

        if (!isInsidePopup) {
          closeAllPopups()
        }
      }
    },
    [activePopups.length, closeAllPopups],
  )

  // Add global click listener
  React.useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick)
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick)
    }
  }, [handleGlobalClick])

  return (
    <PopupContext.Provider
      value={{
        activePopups,
        openPopup,
        closePopup,
        closeAllPopups,
        getPopupData,
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}
