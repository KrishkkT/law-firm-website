"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbsProps {
  className?: string
  homeElement?: React.ReactNode
  separator?: React.ReactNode
  containerClasses?: string
  listClasses?: string
  activeItemClasses?: string
  capitalizeItems?: boolean
}

export function Breadcrumbs({
  className,
  homeElement,
  separator = <ChevronRight className="h-4 w-4" />,
  containerClasses,
  listClasses,
  activeItemClasses,
  capitalizeItems = true,
}: BreadcrumbsProps) {
  const paths = usePathname()
  const pathNames = paths.split("/").filter((path) => path)

  // Custom display names for specific paths
  const getDisplayName = (path: string) => {
    // Convert kebab case to spaces and capitalize first letter of each word
    if (capitalizeItems) {
      return path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    return path
  }

  return (
    <nav aria-label="breadcrumbs" className={cn("text-sm", containerClasses, className)}>
      <ol className={cn("flex items-center space-x-2", listClasses)}>
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground flex items-center transition-colors"
            aria-label="Home"
          >
            {homeElement || <Home className="h-4 w-4" />}
          </Link>
        </li>

        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`
          const isLast = index === pathNames.length - 1

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-2 text-muted-foreground">{separator}</span>
              {isLast ? (
                <span className={cn("text-foreground font-medium", activeItemClasses)}>{getDisplayName(name)}</span>
              ) : (
                <Link
                  href={routeTo}
                  className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  {getDisplayName(name)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
