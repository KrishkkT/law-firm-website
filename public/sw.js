// Service Worker for Thakker Law Website
const CACHE_NAME = "thakker-law-cache-v4"

// Assets to cache on install - focus on critical resources
const PRECACHE_ASSETS = ["/", "/favicon.ico", "/logo-transparent.png", "/manifest.json", "/robots.txt", "/globals.css"]

// Cache expiration settings
const EXPIRATION_SETTINGS = {
  images: 30 * 24 * 60 * 60, // 30 days
  fonts: 60 * 24 * 60 * 60, // 60 days
  styles: 7 * 24 * 60 * 60, // 7 days
  scripts: 7 * 24 * 60 * 60, // 7 days
  documents: 1 * 24 * 60 * 60, // 1 day
  other: 7 * 24 * 60 * 60, // 7 days
}

// Get resource type from URL
const getResourceType = (url) => {
  const path = new URL(url).pathname

  if (/\.(jpe?g|png|gif|webp|svg|ico)$/i.test(path)) return "images"
  if (/\.(woff2?|ttf|otf|eot)$/i.test(path)) return "fonts"
  if (/\.css$/i.test(path)) return "styles"
  if (/\.js$/i.test(path)) return "scripts"
  if (/\.(html|htm)$/i.test(path) || path === "/" || !path.includes(".")) return "documents"

  return "other"
}

// Get cache expiration for resource
const getExpiration = (resourceType) => {
  return EXPIRATION_SETTINGS[resourceType] || EXPIRATION_SETTINGS.other
}

// Install event - precache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS)
      })
      .then(() => {
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_NAME]
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName))
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete)
          }),
        )
      })
      .then(() => self.clients.claim()),
  )
})

// Helper function to determine if a request is a range request
const isRangeRequest = (request) => {
  return request.headers.has("range")
}

// Helper function to handle range requests
const handleRangeRequest = async (request, response) => {
  // Get the range header value
  const rangeHeader = request.headers.get("range")
  if (!rangeHeader) return response

  // Get the blob from the response
  const blob = await response.blob()

  // Parse the range header
  const rangeMatch = rangeHeader.match(/bytes=(\d+)-(\d+)?/)
  if (!rangeMatch) return response

  // Extract the start and end bytes
  const start = Number.parseInt(rangeMatch[1], 10)
  const end = rangeMatch[2] ? Number.parseInt(rangeMatch[2], 10) : blob.size - 1

  // Create a new blob with the requested range
  const slicedBlob = blob.slice(start, end + 1)

  // Create a new response with the sliced blob
  const slicedResponse = new Response(slicedBlob, {
    status: 206,
    statusText: "Partial Content",
    headers: response.headers,
  })

  // Set the Content-Range header
  slicedResponse.headers.set("Content-Range", `bytes ${start}-${end}/${blob.size}`)
  slicedResponse.headers.set("Content-Length", slicedBlob.size)

  return slicedResponse
}

// Fetch event - apply appropriate caching strategy
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Skip non-GET requests
  if (event.request.method !== "GET") {
    return
  }

  // Skip browser-sync requests
  if (event.request.url.includes("browser-sync")) {
    return
  }

  // Check if it's a range request
  const isRange = isRangeRequest(event.request)

  // Get resource type
  const resourceType = getResourceType(event.request.url)

  // Apply different strategies based on resource type
  switch (resourceType) {
    case "images":
    case "fonts":
      // Cache first with network fallback
      event.respondWith(
        caches.match(event.request).then(async (cachedResponse) => {
          // Return cached response if available and not a range request
          if (cachedResponse && !isRange) {
            return cachedResponse
          }

          // For range requests, we need to handle them specially
          if (cachedResponse && isRange) {
            return handleRangeRequest(event.request, cachedResponse)
          }

          // Otherwise fetch from network
          try {
            const networkResponse = await fetch(event.request)

            // Don't cache if not successful
            if (!networkResponse || !networkResponse.ok) {
              return networkResponse
            }

            // Clone the response to store in cache
            const responseToCache = networkResponse.clone()

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)

              // Set expiration
              const expiration = getExpiration(resourceType)
              const now = Date.now()
              const expirationData = {
                url: event.request.url,
                timestamp: now,
                expiration: now + expiration * 1000,
              }

              // Store expiration data
              localStorage.setItem(`sw-exp-${event.request.url}`, JSON.stringify(expirationData))
            })

            return networkResponse
          } catch (error) {
            // Network failed, return cached response or error
            return (
              cachedResponse ||
              new Response("Network error", {
                status: 503,
                headers: new Headers({ "Content-Type": "text/plain" }),
              })
            )
          }
        }),
      )
      break

    case "styles":
    case "scripts":
      // Stale while revalidate
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          // Start network fetch
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              // Don't cache if not successful
              if (!networkResponse || !networkResponse.ok) {
                return networkResponse
              }

              // Update the cache
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone())

                // Set expiration
                const expiration = getExpiration(resourceType)
                const now = Date.now()
                const expirationData = {
                  url: event.request.url,
                  timestamp: now,
                  expiration: now + expiration * 1000,
                }

                // Store expiration data
                localStorage.setItem(`sw-exp-${event.request.url}`, JSON.stringify(expirationData))
              })

              return networkResponse
            })
            .catch(() => {
              // Network failed, return cached response or error
              return (
                cachedResponse ||
                new Response("Network error", {
                  status: 408,
                  headers: new Headers({ "Content-Type": "text/plain" }),
                })
              )
            })

          // Return cached response or wait for network
          return cachedResponse || fetchPromise
        }),
      )
      break

    case "documents":
    default:
      // Network first with cache fallback
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            // Don't cache if not successful
            if (!response || !response.ok) {
              return response
            }

            // Clone the response to store in cache
            const responseToCache = response.clone()

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)

              // Set expiration
              const expiration = getExpiration(resourceType)
              const now = Date.now()
              const expirationData = {
                url: event.request.url,
                timestamp: now,
                expiration: now + expiration * 1000,
              }

              // Store expiration data
              localStorage.setItem(`sw-exp-${event.request.url}`, JSON.stringify(expirationData))
            })

            return response
          })
          .catch(() => {
            return caches.match(event.request).then((cachedResponse) => {
              return cachedResponse || caches.match("/")
            })
          }),
      )
      break
  }
})

// Periodic cache cleanup
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CLEAN_EXPIRED_CACHES") {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        // Get all cache entries
        return cache.keys().then((requests) => {
          return Promise.all(
            requests.map((request) => {
              // Get expiration data
              const expData = localStorage.getItem(`sw-exp-${request.url}`)

              if (expData) {
                try {
                  const { expiration } = JSON.parse(expData)

                  // Delete if expired
                  if (Date.now() > expiration) {
                    localStorage.removeItem(`sw-exp-${request.url}`)
                    return cache.delete(request)
                  }
                } catch (e) {
                  // Invalid data, delete it
                  localStorage.removeItem(`sw-exp-${request.url}`)
                }
              }

              return Promise.resolve()
            }),
          )
        })
      }),
    )
  }
})

// Handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: "/favicon.ico",
    badge: "/favicon.ico",
    data: {
      url: data.url || "/",
    },
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
