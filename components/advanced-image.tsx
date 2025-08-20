"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { getImageQuality } from "@/lib/performance-utils"

interface AdvancedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
  onLoad?: () => void
  style?: React.CSSProperties
}

export function AdvancedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality,
  placeholder = "empty",
  blurDataURL,
  loading,
  fetchPriority,
  onLoad,
  style,
  ...props
}: AdvancedImageProps) {
  const [isVisible, setIsVisible] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const adaptiveQuality = quality || getImageQuality()

  // Determine if this is likely to be the LCP image
  const isLikelyLCP = priority || fetchPriority === "high" || loading === "eager"

  // Determine optimal loading strategy
  const optimalLoading = loading || (priority ? "eager" : "lazy")
  const optimalFetchPriority = fetchPriority || (priority ? "high" : "auto")

  useEffect(() => {
    if (priority || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px", // Load images when they're 200px from viewport
        threshold: 0.01,
      },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, isVisible])

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  // Generate appropriate class names
  const imageClasses = `${className} ${isLoaded ? "image-loaded" : "image-loading"}`

  return (
    <div ref={imageRef} className="relative" style={style}>
      {(isVisible || priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={imageClasses}
          priority={priority}
          sizes={sizes}
          quality={adaptiveQuality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          loading={optimalLoading}
          fetchPriority={optimalFetchPriority}
          onLoad={handleImageLoad}
          {...props}
        />
      )}
    </div>
  )
}
