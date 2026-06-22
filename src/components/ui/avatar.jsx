import * as React from "react"
import { cn } from "@/lib/utils"

export function Avatar({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function AvatarImage({ className, src, alt = "", ...props }) {
  const [error, setError] = React.useState(false)

  if (error || !src) return null

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
}

export function AvatarFallback({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
