"use client"

import { useLanguage } from "@/contexts/language-context"
import { X } from "lucide-react"
import { useState } from "react"

export function TranslationFrame() {
  const { isTranslationFrameVisible, translationUrl, closeTranslationFrame } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  if (!isTranslationFrameVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] bg-background">
      {/* Header with close button */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-background">
        <div className="text-sm text-muted-foreground">Translated content</div>
        <button
          onClick={closeTranslationFrame}
          className="p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Close translation"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
            <p className="text-sm text-muted-foreground">Loading translation...</p>
          </div>
        </div>
      )}

      {/* Translation iframe */}
      <iframe
        src={translationUrl}
        className="w-full h-[calc(100vh-73px)] border-0"
        onLoad={() => setIsLoading(false)}
        title="Translated content"
      />
    </div>
  )
}
