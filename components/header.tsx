"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import SafeImage from "./safe-image"
import { motion, AnimatePresence } from "framer-motion"
import { scrollToTop } from "@/lib/scroll-utils"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

// Dynamically import framer-motion components to reduce initial bundle size
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div className="flex lg:flex-1"></div>,
})

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Only run animations after component is mounted to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }

    // Scroll to top
    scrollToTop()
  }

  // Simplified motion settings for mobile
  const motionProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
        {isMounted ? (
          <MotionDiv
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex lg:flex-1"
          >
            <Link href="/" className="-m-1.5 p-1.5" onClick={handleNavClick}>
              <span className="sr-only">Thakker & Associates</span>
              <div className="flex items-center">
                <div className="relative h-12 w-auto mr-2 overflow-hidden">
                  <SafeImage
                    src="/logo-transparent.png"
                    fallbackSrc="/new-logo.png"
                    alt="Thakker & Associates Logo"
                    width={220}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </MotionDiv>
        ) : (
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Thakker & Associates</span>
              <div className="flex items-center">
                <div className="relative h-12 w-auto mr-2 overflow-hidden">
                  <SafeImage
                    src="/logo-transparent.png"
                    fallbackSrc="/new-logo.png"
                    alt="Thakker & Associates Logo"
                    width={220}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationLinks.map((item, index) =>
            isMounted ? (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium leading-6 text-foreground hover:text-gold transition-colors relative group"
                  onClick={handleNavClick}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ) : (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium leading-6 text-foreground hover:text-gold transition-colors relative group"
                  onClick={handleNavClick}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ),
          )}
        </div>
      </nav>

      {/* Mobile menu - Fixed to open fully downwards */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[60]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              style={{ height: "100vh", top: 0 }} /* Ensure full height */
              data-popup-content="mobile-menu"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={handleNavClick}>
                  <span className="sr-only">Thakker & Associates</span>
                  <div className="flex items-center">
                    <div className="relative h-10 w-auto mr-2 overflow-hidden">
                      <SafeImage
                        src="/logo-transparent.png"
                        fallbackSrc="/new-logo.png"
                        alt="Thakker & Associates Logo"
                        width={180}
                        height={40}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigationLinks.map((item) => (
                      <div key={item.label} className="transform transition hover:translate-x-1">
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground hover:bg-secondary hover:text-gold"
                          onClick={handleNavClick}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
