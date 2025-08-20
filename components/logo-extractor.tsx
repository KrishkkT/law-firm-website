"use client"

import { useEffect, useRef } from "react"

export default function LogoExtractor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/logo-transparent.png"

    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = 96
      canvas.height = 96

      // Draw only the emblem part (left side) of the logo
      ctx.drawImage(img, 0, 0, 120, 120, 0, 0, 96, 96)

      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL("image/png")

      // Create download link
      const link = document.createElement("a")
      link.download = "favicon.png"
      link.href = dataUrl
      link.click()
    }
  }, [])

  return (
    <div className="hidden">
      <canvas ref={canvasRef} />
    </div>
  )
}
