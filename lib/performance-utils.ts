// Intersection Observer utility for lazy loading of components
export function createIntersectionObserver(callback: IntersectionObserverCallback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const mergedOptions = { ...defaultOptions, ...options }

  if (typeof window !== "undefined" && "IntersectionObserver" in window) {
    return new IntersectionObserver(callback, mergedOptions)
  }

  return null
}

// Priority based loading - determine critical resources
export function shouldPrioritize(role: "hero" | "critical" | "secondary" | "tertiary") {
  switch (role) {
    case "hero":
    case "critical":
      return true
    case "secondary":
    case "tertiary":
      return false
    default:
      return false
  }
}

// Image quality based on connection speed
export function getImageQuality() {
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
