import type { Metadata } from "next"
import CivilLawPageClient from "./CivilLawPageClient"

export const metadata: Metadata = {
  title: "Civil Law | Thakker & Associates",
  description:
    "Expert civil litigation services including contract disputes, property matters, and tort claims. Our attorneys provide skilled representation in all civil matters.",
}

export default function CivilLawPage() {
  return <CivilLawPageClient />
}
