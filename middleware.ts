import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  try {
    // Clone the request headers
    const requestHeaders = new Headers(request.headers)

    // Get user agent for device detection
    const userAgent = request.headers.get("user-agent") || ""
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

    // Add device type header for server components
    requestHeaders.set("x-device-type", isMobile ? "mobile" : "desktop")

    // Get response
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })

    // Security Headers - with more permissive CSP
    const securityHeaders = {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://formspree.io https://*.google.com https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://formspree.io https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com; frame-src 'self' https://*.google.com https://*.youtube.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; upgrade-insecure-requests; block-all-mixed-content;",
      "X-DNS-Prefetch-Control": "on",
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
      "X-XSS-Protection": "1; mode=block",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    }

    // Set security headers
    Object.entries(securityHeaders).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    // Add cache control headers based on content type
    const url = request.nextUrl.pathname

    // Static assets - long cache
    if (
      url.includes(".jpg") ||
      url.includes(".jpeg") ||
      url.includes(".png") ||
      url.includes(".gif") ||
      url.includes(".svg") ||
      url.includes(".ico") ||
      url.includes(".webp") ||
      url.includes(".woff") ||
      url.includes(".woff2")
    ) {
      response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
    }
    // JavaScript and CSS - medium cache
    else if (url.includes(".js") || url.includes(".css")) {
      response.headers.set("Cache-Control", "public, max-age=86400, must-revalidate")
    }
    // HTML pages - short cache
    else if (!url.includes(".")) {
      response.headers.set("Cache-Control", "public, max-age=3600, must-revalidate")
    }

    // Add Vary header for proper caching
    response.headers.set("Vary", "Accept-Encoding, User-Agent")

    return response
  } catch (error) {
    // Fallback in case of any errors to prevent 500 errors
    return NextResponse.next()
  }
}

// Specify the paths that should be processed by this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
}
