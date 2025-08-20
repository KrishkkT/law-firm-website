import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <div className="w-full space-y-4 py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-4/6" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-28" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="aspect-video h-64 w-full rounded-lg md:h-80" />
          </div>
        </div>
      </div>
    </div>
  )
}
