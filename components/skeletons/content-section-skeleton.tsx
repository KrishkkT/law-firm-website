import { Skeleton } from "@/components/ui/skeleton"

export function ContentSectionSkeleton() {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-8 w-1/3" />
            <Skeleton className="mx-auto h-4 w-2/3" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4 rounded-lg border p-6">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-8 w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
