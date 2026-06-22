import React from 'react'
import { Globe, Server, Brain, Layers } from 'lucide-react'

const services = [
  {
    title: "Full Stack Web Development",
    description: "Creating responsive, fast, and visually beautiful MERN stack applications with interactive user experiences.",
    icon: Globe
  },
  {
    title: "Backend API Development",
    description: "Designing scalable REST APIs, secure token auth (JWT), database schemas, and clean server code.",
    icon: Server
  },
  {
    title: "Machine Learning Integration",
    description: "Integrating data science models (Scikit-learn, XGBoost) directly into web applications for predictive analytics.",
    icon: Brain
  },
  {
    title: "MERN Stack Applications",
    description: "End-to-end development of interactive platforms, managing MongoDB databases and Node/Express backends.",
    icon: Layers
  }
]

const About = () => {
  return (
    <section id="about" className="space-y-10 py-8 scroll-mt-20">
      <div className="flex items-center gap-3">
        <h2 className="font-outfit text-3xl font-bold tracking-tight text-foreground">About me</h2>
        <span className="h-0.5 flex-1 bg-border/20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Services with Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-outfit text-xl font-bold text-foreground/90 mb-4">What I Do</h3>
          
          <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1 bg-background border-2 border-primary rounded-full size-4 flex items-center justify-center transition-transform group-hover:scale-125 duration-300">
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-card border border-border/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-outfit text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Bio and Stats */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="font-outfit text-xl font-bold text-foreground/90">My Story</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              I am a Computer Science student at COMSATS University Islamabad, Vehari Campus (2023–2027), where I study algorithms, databases, and systems engineering. 
              My journey started with an intermediate degree in Computer Science (ICS) from Punjab College (2021–2023), which sparked my love for coding.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Today, I focus on full-stack development, building scalable APIs, and exploration of artificial intelligence integrations. 
              I am certified by IBM in Full Stack Software Development and Python for Data Science & AI. I am actively seeking backend or full-stack internships to apply my knowledge to commercial teams.
            </p>
          </div>

          {/* Stats Blocks Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/20">
            <div className="space-y-1">
              <h4 className="font-outfit text-3xl font-extrabold text-primary">3+</h4>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Completed Projects
              </p>
            </div>
            
            <div className="space-y-1">
              <h4 className="font-outfit text-3xl font-extrabold text-primary">100%</h4>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Dedication
              </p>
            </div>
            
            <div className="space-y-1">
              <h4 className="font-outfit text-3xl font-extrabold text-primary">2027</h4>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Graduation Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

