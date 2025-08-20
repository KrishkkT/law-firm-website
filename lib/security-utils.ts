/**
 * Security utility functions for the application
 */

// Sanitize user input to prevent XSS attacks
export function sanitizeInput(input: string): string {
  if (!input) return ""
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#x60;")
    .replace(/\(/g, "&#40;")
    .replace(/\)/g, "&#41;")
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Validate phone number format (Indian)
export function isValidIndianPhone(phone: string): boolean {
  const phoneRegex = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/
  return phoneRegex.test(phone)
}

// Create a Content Security Policy nonce (for client-side use)
export function generateCSPNonce(): string {
  // Create a random string for CSP nonce
  const array = new Uint8Array(16)
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(array)
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Validate URL to prevent open redirect vulnerabilities
export function isValidRedirectUrl(url: string, allowedDomains: string[] = []): boolean {
  try {
    // Check if it's a relative URL
    if (url.startsWith("/") && !url.startsWith("//")) {
      return true
    }

    // Check if it's an allowed domain
    const parsedUrl = new URL(url)
    return allowedDomains.some((domain) => parsedUrl.hostname === domain || parsedUrl.hostname.endsWith(`.${domain}`))
  } catch {
    return false
  }
}

// Rate limiting helper
export class RateLimiter {
  private attempts: Map<string, { count: number; timestamp: number }> = new Map()
  private maxAttempts: number
  private timeWindowMs: number

  constructor(maxAttempts = 5, timeWindowMs = 60000) {
    this.maxAttempts = maxAttempts
    this.timeWindowMs = timeWindowMs
  }

  isRateLimited(key: string): boolean {
    const now = Date.now()
    const record = this.attempts.get(key)

    // Clean up old records
    if (record && now - record.timestamp > this.timeWindowMs) {
      this.attempts.delete(key)
      return false
    }

    if (!record) {
      this.attempts.set(key, { count: 1, timestamp: now })
      return false
    }

    if (record.count >= this.maxAttempts) {
      return true
    }

    record.count += 1
    return false
  }
}
