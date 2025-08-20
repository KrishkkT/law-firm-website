"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AdvancedImage } from "./advanced-image"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  aspectRatio?: number
  role?: "hero" | "critical" | "secondary" | "tertiary"
  mobileSrc?: string
  desktopSrc?: string
  tabletSrc?: string
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  style?: React.CSSProperties
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio = 16 / 9,
  role = "secondary",
  mobileSrc,
  desktopSrc,
  tabletSrc,
  placeholder = "empty",
  blurDataURL,
  style,
  ...props
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)
  const [width, setWidth] = useState(1200)
  const [height, setHeight] = useState(Math.round(1200 / aspectRatio))

  // Determine if this is a critical image
  const isCritical = role === "hero" || role === "critical" || priority

  useEffect(() => {
    // Check device on client side
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)

      // Set appropriate dimensions based on screen size
      if (window.innerWidth < 640) {
        setWidth(640)
        setHeight(Math.round(640 / aspectRatio))
      } else if (window.innerWidth < 1024) {
        setWidth(1024)
        setHeight(Math.round(1024 / aspectRatio))
      } else {
        setWidth(1200)
        setHeight(Math.round(1200 / aspectRatio))
      }
    }

    // Initial check
    checkDevice()

    // Add resize listener
    window.addEventListener("resize", checkDevice)

    // Cleanup
    return () => window.removeEventListener("resize", checkDevice)
  }, [aspectRatio])

  // Update image source based on device
  useEffect(() => {
    if (isMobile && mobileSrc) {
      setImageSrc(mobileSrc)
    } else if (isTablet && tabletSrc) {
      setImageSrc(tabletSrc)
    } else if (!isMobile && !isTablet && desktopSrc) {
      setImageSrc(desktopSrc)
    } else {
      setImageSrc(src)
    }
  }, [isMobile, isTablet, mobileSrc, tabletSrc, desktopSrc, src])

  return (
    <AdvancedImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={isCritical}
      sizes={sizes}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={isCritical ? "eager" : "lazy"}
      fetchPriority={isCritical ? "high" : "auto"}
      style={{
        ...style,
        aspectRatio: `${width} / ${height}`,
      }}
      {...props}
    />
  )
}
