// Mobile detection utility
export const isMobileDevice = () => {
  if (typeof window === "undefined") return false

  // Check user agent
  const userAgent = window.navigator.userAgent

  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  // Check screen width
  const isSmallScreen = window.innerWidth < 768

  return isMobile || isSmallScreen
}

// Get device type
export const getDeviceType = () => {
  if (typeof window === "undefined") return "desktop"

  const userAgent = window.navigator.userAgent

  // Check for tablets first (some tablets report as mobile)
  if (/iPad|Android(?!.*Mobile)/i.test(userAgent)) {
    return "tablet"
  }

  // Check for mobile devices
  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return "mobile"
  }

  // Check screen width as fallback
  if (window.innerWidth < 768) {
    return "mobile"
  } else if (window.innerWidth < 1024) {
    return "tablet"
  }

  return "desktop"
}

// Get connection type
export const getConnectionType = () => {
  if (typeof window === "undefined" || !("connection" in navigator)) {
    return "unknown"
  }

  // @ts-ignore - Navigator connection API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  if (!connection) return "unknown"

  return connection.effectiveType || "unknown"
}

// Check if device is on a slow connection
export const isSlowConnection = () => {
  const connectionType = getConnectionType()
  return connectionType === "2g" || connectionType === "slow-2g"
}

// Check if device has data saver enabled
export const isDataSaverEnabled = () => {
  if (typeof window === "undefined" || !("connection" in navigator)) {
    return false
  }

  // @ts-ignore - Navigator connection API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  if (!connection) return false

  return connection.saveData === true
}

// Get appropriate image quality based on device and connection
export const getImageQuality = () => {
  const deviceType = getDeviceType()
  const connectionType = getConnectionType()
  const dataSaver = isDataSaverEnabled()

  // Data saver mode - lowest quality
  if (dataSaver) return 30

  // Slow connections - low quality
  if (connectionType === "2g" || connectionType === "slow-2g") return 40

  // Mobile with 3g - medium-low quality
  if (deviceType === "mobile" && connectionType === "3g") return 50

  // Mobile with 4g - medium quality
  if (deviceType === "mobile" && connectionType === "4g") return 70

  // Tablet with 3g - medium quality
  if (deviceType === "tablet" && connectionType === "3g") return 60

  // Tablet with 4g - medium-high quality
  if (deviceType === "tablet" && connectionType === "4g") return 75

  // Desktop - high quality
  if (deviceType === "desktop") return 85

  // Default - medium quality
  return 70
}
