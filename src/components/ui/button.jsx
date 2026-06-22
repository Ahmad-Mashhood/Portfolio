import * as React from "react"
import { cn } from "@/lib/utils"

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      custom: "cursor-pointer hover:text-muted-foreground aria-expanded:text-muted-foreground"
    }

    const sizes = {
      default: "h-8 gap-1.5 px-2.5",
      sm: "h-7 gap-1 px-2 text-xs",
      icon: "size-8 p-0 [&>svg]:size-4",
      "icon-sm": "size-7 p-0 [&>svg]:size-4"
    }

    return (
      <button
        ref={ref}
        className={cn(baseClass, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
