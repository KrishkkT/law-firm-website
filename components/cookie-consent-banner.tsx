"use client"

import { useCookieConsent } from "@/contexts/cookie-consent-context"
import { useState } from "react"
import Link from "next/link"

export function CookieConsentBanner() {
  const { showBanner, setConsent } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg dark:bg-gray-900 md:p-6">
      <div className="container mx-auto flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <h3 className="mb-2 text-lg font-semibold">Cookie Consent</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
            traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Privacy Policy
            </Link>{" "}
            to learn more.
          </p>
          {showDetails && (
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <h4 className="mb-1 font-medium">Types of cookies we use:</h4>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Necessary cookies:</strong> Essential for the website to function properly.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant
                  advertisements.
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setConsent("necessary")}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Necessary Only
          </button>
          <button
            onClick={() => setConsent("all")}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
