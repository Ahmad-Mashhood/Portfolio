import React from 'react'
import { ModeToggle } from './theme-button'
import { Github, Menu, X } from 'lucide-react'
import { Badge } from './ui/badge'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="flex h-16 items-center justify-between py-4">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <a href="#home" className="font-outfit text-xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity">
            Ahmad Mashhood<span className="text-primary font-black">.</span>
          </a>
          <Badge className="hidden sm:inline-flex border-none bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 font-medium text-xs py-0.5 px-2.5 rounded-full items-center">
            <span className="size-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-1.5 animate-pulse" />
            Open to internships
          </Badge>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Contact</a>
          <span className="h-4 w-px bg-border/40" />
          <a href="https://github.com/Ahmad-Mashhood" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="size-5" />
          </a>
          <ModeToggle />
        </nav>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md px-2 py-4 space-y-3 absolute top-16 left-0 right-0 shadow-lg border-b border-border/10 transition-all duration-300">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Contact
          </a>
          <div className="border-t border-border/20 pt-2 flex items-center justify-between px-3">
            <span className="text-xs text-muted-foreground">Find me on GitHub</span>
            <a href="https://github.com/Ahmad-Mashhood" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="size-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

