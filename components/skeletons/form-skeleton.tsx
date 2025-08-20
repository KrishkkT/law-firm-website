import { Skeleton } from "@/components/ui/skeleton"

export function FormSkeleton() {
  return (
    <div className="space-y-6 rounded-lg border p-6">
      <Skeleton className="h-8 w-1/2" />
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-10 w-1/3" />
      </div>
    </div>
  )
}
