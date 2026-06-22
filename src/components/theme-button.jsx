import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef(null)

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button variant="custom" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle theme">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md border border-border bg-card text-foreground shadow-md z-50">
          <div className="py-1">
            <button
              onClick={() => { setTheme("light"); setIsOpen(false); }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-muted cursor-pointer"
            >
              Light
            </button>
            <button
              onClick={() => { setTheme("dark"); setIsOpen(false); }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-muted cursor-pointer"
            >
              Dark
            </button>
            <button
              onClick={() => { setTheme("system"); setIsOpen(false); }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-muted cursor-pointer"
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
