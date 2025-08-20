"use client"

export function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

export function setupScrollToTop() {
  if (typeof window !== "undefined") {
    // Add event listener to all internal links
    document.addEventListener("click", (e) => {
      // Check if the clicked element is a link
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.href && link.href.startsWith(window.location.origin) && !link.hasAttribute("data-no-scroll")) {
        // It's an internal link, scroll to top after a small delay to allow navigation
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }, 100)
      }
    })
  }
}
