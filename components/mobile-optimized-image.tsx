"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface MobileOptimizedImageProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  fadeIn?: boolean
  mobileSizes?: string
  desktopSizes?: string
  lowQualityPlaceholder?: boolean
  lazyBoundary?: string
}

export function MobileOptimizedImage({
  fadeIn = true,
  mobileSizes = "100vw",
  desktopSizes = "(max-width: 1024px) 50vw, 33vw",
  lowQualityPlaceholder = true,
  lazyBoundary = "200px",
  className = "",
  ...props
}: MobileOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Generate placeholder blur URL for small images
  const getPlaceholderUrl = () => {
    if (!lowQualityPlaceholder || !props.src || typeof props.src !== "string") return undefined

    // Only generate for local images
    if (props.src.startsWith("http")) return undefined

    // Create a tiny version of the image
    return `/_next/image?url=${encodeURIComponent(props.src)}&w=10&q=10`
  }

  const placeholderUrl = getPlaceholderUrl()

  // Determine image quality based on device
  const quality = isMobile ? 60 : 80

  // Calculate appropriate sizes based on viewport
  const sizes = isMobile ? mobileSizes : desktopSizes

  // For mobile devices, use smaller image dimensions when possible
  const getOptimizedDimensions = () => {
    if (!isMobile || !props.width || !props.height) return props

    // If image is larger than 1000px wide on mobile, scale it down
    if (typeof props.width === "number" && props.width > 1000) {
      const aspectRatio = props.width / (props.height as number)
      const newWidth = Math.min(props.width, 800)
      const newHeight = Math.round(newWidth / aspectRatio)

      return {
        ...props,
        width: newWidth,
        height: newHeight,
      }
    }

    return props
  }

  const optimizedProps = getOptimizedDimensions()

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ height: props.height || "auto", width: props.width || "auto" }}
    >
      <Image
        {...optimizedProps}
        quality={quality}
        sizes={sizes}
        className={cn(
          className,
          fadeIn ? "transition-opacity duration-500" : "",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        loading={props.priority ? "eager" : "lazy"}
        lazyBoundary={lazyBoundary}
        placeholder={placeholderUrl ? "blur" : undefined}
        blurDataURL={placeholderUrl}
      />
      {fadeIn && !isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse dark:bg-gray-800" />}
    </div>
  )
}

// For background images that fill their container
export function MobileOptimizedBackgroundImage({ fadeIn = true, className = "", ...props }: MobileOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Determine image quality based on device
  const quality = isMobile ? 60 : 80

  return (
    <div className="absolute inset-0 z-0">
      <Image
        {...props}
        fill
        quality={quality}
        sizes="100vw"
        className={cn(
          "object-cover",
          className,
          fadeIn ? "transition-opacity duration-700" : "",
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        loading={props.priority ? "eager" : "lazy"}
      />
      {fadeIn && !isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse dark:bg-gray-800" />}
    </div>
  )
}
