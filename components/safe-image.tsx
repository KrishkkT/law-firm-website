"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { usePerformance } from "@/hooks/use-performance"

// Update the SafeImage component:
export default function SafeImage({ src, alt, className = "", priority = false, fill = false, ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { getImageQuality, shouldLazyLoad } = usePerformance()
  const imagePriority = priority ? "high" : "medium"

  // Determine if we should lazy load this image
  const shouldLazy = !priority && shouldLazyLoad(imagePriority as "high" | "medium" | "low")

  // Get quality based on network conditions
  const quality = getImageQuality()

  return (
    <div className={`${className} ${fill ? "relative" : ""}`} style={fill ? { height: "100%", width: "100%" } : {}}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || ""}
        className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setIsLoaded(true)}
        loading={shouldLazy ? "lazy" : "eager"}
        quality={quality}
        fill={fill}
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        {...props}
      />
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}
    </div>
  )
}

// Export named component for imports that use named imports
export { SafeImage }
