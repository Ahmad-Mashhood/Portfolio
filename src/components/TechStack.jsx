import React from 'react'
import StackIcon from 'tech-stack-icons'
import { useTheme } from "./theme-provider"
import { GitFork, Brain, TrendingUp } from 'lucide-react'

const stack = [
  { id: "js", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "react", name: "React" },
  { id: "nodejs", name: "Node.js" },
  { id: "mongodb", name: "MongoDB" },
  { id: "scikitlearn", name: "Scikit-learn" },
  { id: "decisiontree", name: "Decision Tree", icon: GitFork },
  { id: "randomforest", name: "Random Forest", icon: Brain },
  { id: "logisticregression", name: "Logistic Regression", icon: TrendingUp },
  { id: "tailwindcss", name: "Tailwind" },
  { id: "git", name: "Git" },
  { id: "github", name: "GitHub" },
  { id: "vercel", name: "Vercel" }
]

const Stack = () => {
  const { resolvedTheme } = useTheme()
  
  return (
    <section className="py-5 border-y border-border/50 dark:border-border/20 bg-card/60 dark:bg-card/30 backdrop-blur-sm relative overflow-hidden rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        <h4 className="font-outfit text-xs font-bold uppercase tracking-widest text-primary shrink-0">
          Core Tech Stack
        </h4>
        <div className="flex overflow-x-auto scrollbar-none flex-nowrap items-center gap-6 sm:gap-8 pb-2 pt-1 w-full md:justify-end md:flex-wrap md:overflow-visible md:pb-0 md:pt-0">
          {stack.map((item, index) => {

            const CustomIcon = item.icon
            return (
              <div 
                key={index} 
                className="flex items-center gap-2 group transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                title={item.name}
              >
                <div className="transition-transform group-hover:scale-110 duration-300">
                  {CustomIcon ? (
                    <CustomIcon className="size-6 text-primary" />
                  ) : (
                    <StackIcon 
                      name={item.id}
                      variant={resolvedTheme === "dark" ? "dark" : "light"}
                      className="size-6"
                    />
                  )}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stack


