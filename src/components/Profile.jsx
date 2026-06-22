import React from 'react'

const Profile = () => {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 md:py-16">
      {/* Left Text Block */}
      <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-foreground">
            Hello<span className="text-primary font-black">.</span>
          </h2>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <span className="w-12 h-[2px] bg-primary" />
          <h3 className="font-outfit text-lg font-medium tracking-wide text-foreground/90 uppercase">
            I'm Ahmad Mashhood
          </h3>
        </div>

        <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] pb-1">
          Software <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 dark:to-orange-400">
            Developer
          </span>
        </h1>

        <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
          I am a MERN Stack Developer specializing in full-stack web applications and AI-powered systems. 
          I am passionate about building scalable, real-world solutions and exploring machine learning integration in web apps.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 cursor-pointer"
          >
            Got a project?
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all hover:border-muted-foreground/30 active:scale-95 cursor-pointer"
          >
            My resume
          </a>
        </div>
      </div>

      {/* Right Avatar Block */}
      <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">

        <div className="relative flex items-center justify-center size-64 sm:size-80 lg:size-96">
          {/* Concentric Circles Grid Lines */}
          <div className="absolute inset-0 rounded-full border border-border/10 animate-[spin_120s_linear_infinite]" />
          <div className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-primary/10 animate-[spin_80s_linear_infinite]" />
          <div className="absolute inset-16 sm:inset-20 rounded-full border border-border/20" />
          
          {/* Glow Behind */}
          <div className="absolute inset-24 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

          {/* Floating Left Bracket */}
          <div className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md border border-border/60 dark:border-border/30 text-primary text-xl font-mono size-10 sm:size-12 rounded-xl flex items-center justify-center shadow-lg shadow-black/5 dark:shadow-black/20 animate-float-left select-none">
            &lt;
          </div>
          
          {/* Floating Right Bracket */}
          <div className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-md border border-border/60 dark:border-border/30 text-primary text-xl font-mono size-10 sm:size-12 rounded-xl flex items-center justify-center shadow-lg shadow-black/5 dark:shadow-black/20 animate-float-right select-none">
            &gt;
          </div>

          {/* Avatar frame */}
          <div className="relative size-44 sm:size-56 lg:size-64 rounded-full overflow-hidden border-2 border-primary/60 dark:border-primary/40 p-2 bg-background shadow-2xl">
            <div className="size-full rounded-full overflow-hidden bg-muted">
              <img 
                src="/profile.png" 
                alt="Ahmad Mashhood" 
                className="size-full object-cover transition-all duration-500 grayscale hover:grayscale-0 scale-105 hover:scale-100" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden size-full items-center justify-center bg-primary/10 text-primary font-outfit text-3xl font-extrabold">
                AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

