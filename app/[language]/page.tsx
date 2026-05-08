import { notFound } from "next/navigation"

// List of supported languages
const SUPPORTED_LANGUAGES = ["gujarati", "hindi", "marathi", "spanish", "french", "german"]

export default function LanguageRootPage({ params }: { params: { language: string } }) {
  const { language } = params

  // Check if the language is supported
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    notFound()
  }

  // This page doesn't actually render anything visible
  // The translation is handled by the TranslationFrame component
  return null
}
