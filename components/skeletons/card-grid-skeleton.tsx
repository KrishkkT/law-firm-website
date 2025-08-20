import { Skeleton } from "@/components/ui/skeleton"

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4 rounded-lg border p-6">
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-8 w-1/3" />
        </div>
      ))}
    </div>
  )
}
