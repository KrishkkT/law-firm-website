type EventType =
  | "page_view"
  | "click"
  | "form_submit"
  | "form_error"
  | "navigation"
  | "search"
  | "download"
  | "scroll_depth"
  | "video_play"
  | "video_complete"
  | "custom"

interface AnalyticsEvent {
  type: EventType
  page?: string
  component?: string
  label?: string
  value?: number
  metadata?: Record<string, any>
}

// Initialize data layer if it doesn't exist
const initDataLayer = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
  }
}

// Track a page view
export const trackPageView = (url: string) => {
  if (typeof window === "undefined") return

  initDataLayer()

  // Push to dataLayer for GTM
  window.dataLayer.push({
    event: "page_view",
    page_path: url,
    page_title: document.title,
  })

  // If gtag is available, use it directly
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
    })
  }
}

// Track a custom event
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === "undefined") return

  initDataLayer()

  // Push to dataLayer for GTM
  window.dataLayer.push({
    event: event.type,
    event_category: event.component || "general",
    event_label: event.label || "",
    event_value: event.value || 0,
    ...event.metadata,
  })

  // If gtag is available, use it directly
  if (typeof window.gtag === "function") {
    window.gtag("event", event.type, {
      event_category: event.component || "general",
      event_label: event.label || "",
      event_value: event.value || 0,
      ...event.metadata,
    })
  }
}

// Track user timing
export const trackTiming = (category: string, variable: string, value: number, label?: string) => {
  if (typeof window === "undefined") return

  initDataLayer()

  // Push to dataLayer for GTM
  window.dataLayer.push({
    event: "timing_complete",
    event_category: category,
    event_variable: variable,
    event_value: value,
    event_label: label || "",
  })

  // If gtag is available, use it directly
  if (typeof window.gtag === "function") {
    window.gtag("event", "timing_complete", {
      name: variable,
      value: value,
      event_category: category,
      event_label: label || "",
    })
  }
}

// Track exceptions
export const trackException = (description: string, fatal = false) => {
  if (typeof window === "undefined") return

  initDataLayer()

  // Push to dataLayer for GTM
  window.dataLayer.push({
    event: "exception",
    description,
    fatal,
  })

  // If gtag is available, use it directly
  if (typeof window.gtag === "function") {
    window.gtag("event", "exception", {
      description,
      fatal,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean, metadata?: Record<string, any>) => {
  trackEvent({
    type: success ? "form_submit" : "form_error",
    component: "form",
    label: formName,
    metadata: {
      form_name: formName,
      success,
      ...metadata,
    },
  })
}

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent({
    type: "scroll_depth",
    value: depth,
    metadata: {
      scroll_depth: depth,
    },
  })
}

// Declare global window interface
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
