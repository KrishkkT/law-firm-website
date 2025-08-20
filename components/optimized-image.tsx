"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  fadeIn?: boolean
  delayLoad?: boolean
  lowQualityPlaceholder?: boolean
  lazyBoundary?: string
}

// Add WebP format support with fallback
export function OptimizedImage({
  fadeIn = true,
  delayLoad = false,
  lowQualityPlaceholder = true,
  lazyBoundary = "200px",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(!delayLoad)

  useEffect(() => {
    if (delayLoad) {
      // Use requestIdleCallback for non-critical images when browser is idle
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
        const id = requestIdleCallback(
          () => {
            setShouldLoad(true)
          },
          { timeout: 2000 },
        )
        return () => {
          // @ts-ignore
          cancelIdleCallback(id)
        }
      } else {
        // Fallback to setTimeout
        const timer = setTimeout(() => {
          setShouldLoad(true)
        }, 300)
        return () => clearTimeout(timer)
      }
    }
  }, [delayLoad])

  // Determine image quality based on connection speed
  const getImageQuality = () => {
    if (typeof navigator === "undefined") return 75

    // @ts-ignore - connection property exists on some browsers
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    if (!connection) return 75

    // Adjust quality based on connection type
    switch (connection.effectiveType) {
      case "4g":
        return 85
      case "3g":
        return 70
      case "2g":
      case "slow-2g":
        return 50
      default:
        return 75
    }
  }

  // Generate placeholder blur URL for small images
  const getPlaceholderUrl = () => {
    if (!lowQualityPlaceholder || !props.src || typeof props.src !== "string") return undefined

    // Only generate for local images
    if (props.src.startsWith("http")) return undefined

    // Create a tiny version of the image
    return `/_next/image?url=${encodeURIComponent(props.src)}&w=10&q=10`
  }

  const placeholderUrl = getPlaceholderUrl()
  const quality = getImageQuality()

  // Calculate appropriate sizes based on viewport
  const getSizes = () => {
    if (props.sizes) return props.sizes

    // Default responsive sizes if not provided
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ height: props.height || "auto", width: props.width || "auto" }}
    >
      {shouldLoad && (
        <Image
          {...props}
          quality={quality}
          sizes={getSizes()}
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
      )}
      {fadeIn && !isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse dark:bg-gray-800" />
      )}
    </div>
  )
}

// For background images that fill their container
export function OptimizedBackgroundImage({ fadeIn = true, className = "", ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const quality =
    typeof navigator !== "undefined"
      ? // @ts-ignore
        navigator.connection?.effectiveType === "4g"
        ? 85
        : 70
      : 75

  return (
    <div className="absolute inset-0 z-0">
      <Image
        {...props}
        fill
        quality={quality}
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
