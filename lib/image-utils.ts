// Determine if an image is likely to be the LCP element
export function isLikelyLCPImage(path: string, role?: string): boolean {
  // Check if it's a hero image based on path
  const isHeroImage =
    path.includes("hero") || path.includes("banner") || path.includes("cover") || path.includes("header")

  // Check if it's explicitly marked as a hero or critical
  const isCriticalRole = role === "hero" || role === "critical"

  return isHeroImage || isCriticalRole
}

// Generate blur placeholder for images
export function generateBlurPlaceholder(width: number, height: number, color = "#e2e8f0"): string {
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>
  `

  // Convert SVG to base64
  const base64 = Buffer.from(svg).toString("base64")
  return `data:image/svg+xml;base64,${base64}`
}

// Calculate optimal image dimensions based on viewport
export function getOptimalImageDimensions(
  originalWidth: number,
  originalHeight: number,
  viewportWidth: number,
): { width: number; height: number } {
  // Calculate aspect ratio
  const aspectRatio = originalWidth / originalHeight

  // Determine optimal width (not exceeding viewport or original)
  const optimalWidth = Math.min(viewportWidth, originalWidth)

  // Calculate height based on aspect ratio
  const optimalHeight = Math.round(optimalWidth / aspectRatio)

  return { width: optimalWidth, height: optimalHeight }
}

// Get image format based on browser support
export function getOptimalImageFormat(supportsWebp: boolean, supportsAvif: boolean): string {
  if (supportsAvif) return "avif"
  if (supportsWebp) return "webp"
  return "jpg"
}
