"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  fadeIn?: boolean
  delayLoad?: boolean
}

export function OptimizedImage({ fadeIn = true, delayLoad = false, className = "", ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(!delayLoad)

  useEffect(() => {
    if (delayLoad) {
      // Delay loading of non-critical images
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [delayLoad])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height: props.height || "100%", width: props.width || "100%" }}
    >
      {shouldLoad && (
        <Image
          {...props}
          className={`${className} ${fadeIn ? "transition-opacity duration-500" : ""} ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setIsLoaded(true)}
          loading={props.priority ? "eager" : "lazy"}
        />
      )}
      {fadeIn && !isLoaded && shouldLoad && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}

// For background images that fill their container
export function OptimizedBackgroundImage({ fadeIn = true, className = "", ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="absolute inset-0 z-0">
      <Image
        {...props}
        fill
        className={`object-cover ${className} ${fadeIn ? "transition-opacity duration-700" : ""} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setIsLoaded(true)}
        loading={props.priority ? "eager" : "lazy"}
      />
      {fadeIn && !isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
    </div>
  )
}
