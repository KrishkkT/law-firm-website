import { HeroSkeleton } from "./hero-skeleton"
import { ContentSectionSkeleton } from "./content-section-skeleton"
import { CardGridSkeleton } from "./card-grid-skeleton"

export function PageSkeleton() {
  return (
    <div className="space-y-12">
      <HeroSkeleton />
      <ContentSectionSkeleton />
      <div className="container px-4 md:px-6">
        <CardGridSkeleton />
      </div>
    </div>
  )
}
