/**
 * Error logging utility that avoids console logs in production
 */

type ErrorLevel = "debug" | "info" | "warn" | "error"

// Safe error logger that doesn't expose sensitive information
export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      // Only log in development
      console.debug(message, ...sanitizeArgs(args))
    }
  },

  info: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.info(message, ...sanitizeArgs(args))
    }
  },

  warn: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.warn(message, ...sanitizeArgs(args))
    }
    // In production, you could send warnings to your monitoring service
    if (process.env.NODE_ENV === "production") {
      captureError("warn", message, args)
    }
  },

  error: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(message, ...sanitizeArgs(args))
    }
    // In production, send errors to your monitoring service
    if (process.env.NODE_ENV === "production") {
      captureError("error", message, args)
    }
  },
}

// Function to sanitize arguments to remove sensitive data
function sanitizeArgs(args: any[]): any[] {
  return args.map((arg) => {
    if (typeof arg === "object" && arg !== null) {
      // Deep clone to avoid modifying the original
      const sanitized = JSON.parse(JSON.stringify(arg))

      // Remove sensitive fields
      const sensitiveFields = ["password", "token", "secret", "key", "authorization", "cookie"]

      function recursiveSanitize(obj: any) {
        if (typeof obj !== "object" || obj === null) return

        Object.keys(obj).forEach((key) => {
          if (sensitiveFields.some((field) => key.toLowerCase().includes(field))) {
            obj[key] = "[REDACTED]"
          } else if (typeof obj[key] === "object" && obj[key] !== null) {
            recursiveSanitize(obj[key])
          }
        })
      }

      recursiveSanitize(sanitized)
      return sanitized
    }
    return arg
  })
}

// Function to capture errors in production (implement with your error monitoring service)
function captureError(level: ErrorLevel, message: string, args: any[]) {
  // This is where you would integrate with services like Sentry, LogRocket, etc.
  // Example with a fetch request to your own error logging endpoint:
  try {
    if (typeof window !== "undefined") {
      const sanitizedArgs = sanitizeArgs(args)
      const errorData = {
        level,
        message,
        args: sanitizedArgs,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }

      // This is commented out to avoid actual network requests
      // but you would implement something like this:
      /*
      fetch('/api/log-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
        keepalive: true
      }).catch(() => {
        // Silent fail for logging service
      });
      */
    }
  } catch {
    // Silent fail for logging service
  }
}
