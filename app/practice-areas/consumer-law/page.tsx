import type { Metadata } from "next"
import ConsumerLawClientPage from "./ConsumerLawClientPage"

export const metadata: Metadata = {
  title: "Consumer Law | Thakker & Associates",
  description:
    "Expert consumer protection legal services including fraud cases, debt collection defense, and product liability. Our attorneys fight for consumer rights.",
}

export default function ConsumerLawPage() {
  return <ConsumerLawClientPage />
}
