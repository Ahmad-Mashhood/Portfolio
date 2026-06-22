import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, variant = "default", ...props }) {
  const baseClass = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none"
  
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground"
  }

  return (
    <span
      className={cn(baseClass, variants[variant], className)}
      {...props}
    />
  )
}
