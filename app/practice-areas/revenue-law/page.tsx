import type { Metadata } from "next"
import RevenueLawClientPage from "./RevenueLawClientPage"

export const metadata: Metadata = {
  title: "Land & House Revenue Law | Thakker & Associates",
  description:
    "Expert legal services for land and house revenue matters including property assessments, land revenue disputes, and housing society revenue issues.",
}

export default function RevenueLawPage() {
  return <RevenueLawClientPage />
}
