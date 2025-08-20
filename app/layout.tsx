import Script from "next/script"
import type React from "react"
import type { Metadata, Viewport } from "next"
import ClientLayout from "./client"
import { WebsiteStructuredData } from "@/components/structured-data"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { ThemeMeta } from "@/components/theme-meta"
import "./globals.css"

// Optimize font loading with subset and display swap
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
  fallback: ["Georgia", "serif"],
})

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Thakker & Associates | Top Law Firm in Gujarat | Legal Services in Bhavnagar",
  description:
    "Thakker & Associates is a premier law firm in Gujarat providing expert legal services in personal injury, family law, business law, and estate planning. Trusted legal counsel in Bhavnagar and surrounding areas.",
  keywords: [
    "best law firm Gujarat",
    "top lawyers Bhavnagar",
    "legal services Gujarat",
    "personal injury lawyer",
    "family law attorney Gujarat",
    "business law services",
    "estate planning lawyer",
    "criminal defense attorney",
    "real estate lawyer Gujarat",
    "legal consultation Bhavnagar",
    "divorce lawyer Gujarat",
    "property dispute lawyer",
    "accident claim attorney",
    "corporate legal services",
    "Jaymin Thakker lawyer",
  ],
  authors: [{ name: "Jaymin Thakker", url: "https://jayminthakkerlaw.com" }],
  creator: "Thakker & Associates",
  publisher: "Thakker & Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jayminthakkerlaw.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thakker & Associates | Leading Law Firm in Gujarat",
    description:
      "Expert legal services across personal injury, family law, business law, and estate planning. Trusted legal counsel in Bhavnagar and throughout Gujarat.",
    url: "https://jayminthakkerlaw.com",
    siteName: "Thakker & Associates Law Firm",
    images: [
      {
        url: "https://jayminthakkerlaw.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thakker & Associates - Premier Legal Services in Gujarat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thakker & Associates | Top Law Firm in Gujarat",
    description:
      "Expert legal services across personal injury, family law, business law, and estate planning. Trusted legal counsel in Bhavnagar.",
    images: ["https://jayminthakkerlaw.com/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }],
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  category: "Law Firm",
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/logo-transparent.png" fetchPriority="high" />

        {/* Preload critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />

        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Base styles to prevent FOUC */
          body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .header { position: fixed; width: 100%; z-index: 50; transition: all 0.3s; }
          .header-scrolled { background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
          .main { min-height: 100vh; padding-top: 4rem; }
          .hero-section { display: flex; min-height: 80vh; position: relative; }
          .hero-content { z-index: 10; padding: 2rem; }
          .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)); }
          .hero-title { font-size: 2.5rem; font-weight: 700; color: white; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 2rem; }
          .hero-cta { display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; background-color: hsl(36, 100%, 50%); color: white; font-weight: 600; border-radius: 0.375rem; }
        `,
          }}
        />

        <ThemeMeta />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>

        {/* Structured data */}
        <WebsiteStructuredData url="https://jayminthakkerlaw.com" />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VVWCV8M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Scripts with proper loading strategies */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4YC3PPDPKD" strategy="afterInteractive" async />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YC3PPDPKD', {
              'page_path': window.location.pathname,
              'cookie_flags': 'SameSite=None;Secure',
              'transport_type': 'beacon'
            });
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive" async>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VVWCV8M');
          `}
        </Script>

        {/* Web Vitals measurement script - load last */}
        <Script id="web-vitals" strategy="lazyOnload" async>
          {`
            const webVitalsUrl = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
            
            // Use Intersection Observer to load web vitals only when user has scrolled
            const observer = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting) {
                try {
                  const script = document.createElement('script');
                  script.src = webVitalsUrl;
                  script.async = true;
                  script.onload = function() {
                    // Initialize web vitals and send to Google Analytics
                    if (window.webVitals) {
                      webVitals.getCLS(sendToAnalytics);
                      webVitals.getFID(sendToAnalytics);
                      webVitals.getLCP(sendToAnalytics);
                      webVitals.getFCP(sendToAnalytics);
                      webVitals.getTTFB(sendToAnalytics);
                    }
                  };
                  document.head.appendChild(script);
                  observer.disconnect();
                } catch (e) {
                  // Silent fail
                }
              }
            });
            
            // Observe the footer to load web vitals when user scrolls to bottom
            setTimeout(() => {
              try {
                const footer = document.querySelector('footer');
                if (footer) observer.observe(footer);
              } catch (e) {
                // Silent fail
              }
            }, 3000);
            
            function sendToAnalytics({name, delta, id}) {
              try {
                if (window.gtag) {
                  gtag('event', name, {
                    event_category: 'Web Vitals',
                    value: Math.round(delta),
                    non_interaction: true,
                  });
                }
              } catch (e) {
                // Silent fail
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}
