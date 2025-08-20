// Simple in-memory cache
const memoryCache = new Map<string, { data: any; expiry: number }>()

// Set cache item with expiry
export function setCacheItem(key: string, data: any, expiryInSeconds = 3600): void {
  const expiry = Date.now() + expiryInSeconds * 1000
  memoryCache.set(key, { data, expiry })

  // Also store in localStorage for persistence if available
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify({ data, expiry }))
    } catch (error) {
      console.error("Error storing in localStorage:", error)
    }
  }
}

// Get cache item
export function getCacheItem<T>(key: string): T | null {
  // First check memory cache
  const memItem = memoryCache.get(key)

  if (memItem && memItem.expiry > Date.now()) {
    return memItem.data as T
  }

  // If not in memory or expired, check localStorage
  if (typeof window !== "undefined") {
    try {
      const item = localStorage.getItem(`cache_${key}`)

      if (item) {
        const parsed = JSON.parse(item)

        if (parsed.expiry > Date.now()) {
          // Refresh memory cache
          memoryCache.set(key, parsed)
          return parsed.data as T
        } else {
          // Remove expired item
          localStorage.removeItem(`cache_${key}`)
        }
      }
    } catch (error) {
      console.error("Error retrieving from localStorage:", error)
    }
  }

  return null
}

// Clear cache item
export function clearCacheItem(key: string): void {
  memoryCache.delete(key)

  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(`cache_${key}`)
    } catch (error) {
      console.error("Error removing from localStorage:", error)
    }
  }
}

// Clear all cache
export function clearAllCache(): void {
  memoryCache.clear()

  if (typeof window !== "undefined") {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("cache_")) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error("Error clearing localStorage cache:", error)
    }
  }
}

// Cache API response with fetch
export async function cachedFetch<T>(url: string, options?: RequestInit, expiryInSeconds = 3600): Promise<T> {
  const cacheKey = `fetch_${url}_${JSON.stringify(options || {})}`
  const cachedData = getCacheItem<T>(cacheKey)

  if (cachedData) {
    return cachedData
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  setCacheItem(cacheKey, data, expiryInSeconds)

  return data as T
}
