import Link from "next/link"
import { SafeImage } from "@/components/safe-image"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">Page Not Found</h2>

        <div className="mb-8">
          <SafeImage
            src="/scales-of-justice-abstract.png"
            alt="Scales of Justice"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <p className="text-slate-600 mb-8">
          We're sorry, but the page you are looking for cannot be found. It might have been moved, deleted, or the URL
          may have been mistyped.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
            Return Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
