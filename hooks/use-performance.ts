"use client"

import { useEffect, useState } from "react"

type ConnectionType = "4g" | "3g" | "2g" | "slow-2g" | "unknown"

export function useNetworkStatus() {
  const [connectionType, setConnectionType] = useState<ConnectionType>("unknown")
  const [isLowBandwidth, setIsLowBandwidth] = useState(false)
  const [isDataSaverOn, setIsDataSaverOn] = useState(false)

  useEffect(() => {
    if (typeof navigator === "undefined") return

    // @ts-ignore - connection property exists on some browsers
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

    if (!connection) return

    setConnectionType(connection.effectiveType as ConnectionType)
    setIsLowBandwidth(["2g", "slow-2g"].includes(connection.effectiveType))
    setIsDataSaverOn(connection.saveData || false)

    const updateConnectionStatus = () => {
      if (connection) {
        setConnectionType(connection.effectiveType as ConnectionType)
        setIsLowBandwidth(["2g", "slow-2g"].includes(connection.effectiveType))
        setIsDataSaverOn(connection.saveData || false)
      }
    }

    connection.addEventListener("change", updateConnectionStatus)
    return () => {
      connection.removeEventListener("change", updateConnectionStatus)
    }
  }, [])

  return { connectionType, isLowBandwidth, isDataSaverOn }
}

export function usePerformance() {
  const networkStatus = useNetworkStatus()
  const [loadPriority, setLoadPriority] = useState<"high" | "medium" | "low">("high")

  useEffect(() => {
    // Determine load priority based on connection
    if (networkStatus.isLowBandwidth || networkStatus.isDataSaverOn) {
      setLoadPriority("low")
    } else if (networkStatus.connectionType === "3g") {
      setLoadPriority("medium")
    } else {
      setLoadPriority("high")
    }
  }, [networkStatus])

  const getImageQuality = () => {
    switch (loadPriority) {
      case "high":
        return 90
      case "medium":
        return 75
      case "low":
        return 60
      default:
        return 75
    }
  }

  return {
    ...networkStatus,
    loadPriority,
    getImageQuality,
    shouldLazyLoad: (priority: "high" | "medium" | "low") => {
      // Always eager load high priority images
      if (priority === "high") return false

      // In low bandwidth, lazy load all non-high priority
      if (networkStatus.isLowBandwidth) return true

      // In medium bandwidth, lazy load medium and low priority
      if (networkStatus.connectionType === "3g" && priority === "low") return true

      // In good bandwidth, only lazy load low priority
      return priority === "low"
    },
  }
}
