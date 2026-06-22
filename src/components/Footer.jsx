import React from 'react'
import { Github, Linkedin, Instagram, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const Footer = () => {
  const [date, setDate] = React.useState("")
  const [formState, setFormState] = React.useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const pakistanDate = new Date().toLocaleDateString("en-PK", {
      timeZone: "Asia/Karachi",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    setDate(pakistanDate)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/ahmadmashhood.am@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => {
          setIsSubmitted(false)
        }, 8000)
      } else {
        alert("Oops! Something went wrong. Please try again or email me directly.")
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please try again or email me directly.")
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <footer className="pt-16 md:pt-24">
      {/* Contact Section */}
      <section id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start scroll-mt-20">
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-primary" />
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-primary">Contacts</span>
          </div>
          
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Have a project?<br />Let's talk!
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-sm">
            I am actively seeking internship opportunities or freelance projects. Drop me a line, and let's build something awesome together.
          </p>

          <div className="space-y-4 pt-4 text-sm font-light text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-card border border-border/60 text-primary">
                <Mail className="size-4" />
              </span>
              <a href="mailto:ahmadmashhood.am@gmail.com" className="hover:text-primary transition-colors hover:underline">
                ahmadmashhood.am@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-card border border-border/60 text-primary">
                <MapPin className="size-4" />
              </span>
              <span>Multan, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Contact form column */}
        <div className="lg:col-span-7 bg-card/45 backdrop-blur-sm border border-border/60 p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/[0.02] dark:shadow-black/10">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
              <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 animate-bounce">
                <CheckCircle className="size-8" />
              </div>
              <h4 className="font-outfit text-lg font-bold text-foreground">Message Sent!</h4>
              <div className="text-xs text-muted-foreground max-w-sm font-light space-y-2">
                <p>Thank you for reaching out! Your message has been sent to <strong>ahmadmashhood.am@gmail.com</strong>.</p>
                <p className="text-[10px] text-primary/95 bg-primary/5 p-2 rounded-lg border border-primary/10 mt-3 font-medium text-left">
                  ⚠️ <strong>First-Time Submission?</strong> Please check your email inbox (and spam) for a one-time activation confirmation from FormSubmit. Once you click "Activate", future submissions will go directly to your inbox.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-border/60 focus:border-primary py-2.5 text-sm focus:outline-none transition-colors text-foreground font-light placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-border/60 focus:border-primary py-2.5 text-sm focus:outline-none transition-colors text-foreground font-light placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-border/60 focus:border-primary py-2.5 text-sm focus:outline-none transition-colors text-foreground font-light resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <span className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Submit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer copyright block */}
      <div className="border-t border-border/20 pt-8 pb-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-1.5">
          <div className="font-outfit font-bold text-foreground text-base tracking-tight">
            Ahmad Mashhood<span className="text-primary">.</span>
          </div>
          <p className="text-xs text-muted-foreground font-light">
            Designed with love, all rights reserved &copy; {new Date().getFullYear()}.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Ahmad-Mashhood" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-card border border-border/60 hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmadmashhood-web" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-card border border-border/60 hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a 
              href="https://instagram.com/talk_to_ahmad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-lg bg-card border border-border/60 hover:border-primary hover:text-primary transition-colors text-muted-foreground cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>
          <span className="text-[11px] text-muted-foreground tracking-tight font-light">{date}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

