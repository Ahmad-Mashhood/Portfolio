import React from 'react'
import { Badge } from './ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: "TalentMap",
    tagline: "AI-Powered Career Matching Platform",
    description: "An intelligent platform that matches candidates with job roles and maps personalized skill pathways. It features skill gap analysis, automated resume scans, and recommendations powered by artificial intelligence models.",
    type: ["MERN", "Python", "AI", "JWT"],
    liveUrl: "https://talent-map-delta.vercel.app/",
    githubUrl: "https://github.com/Ahmad-Mashhood/Talent-Map",
    mockupType: "talentmap"
  },
  {
    name: "Smart Expense Split",
    tagline: "Group Expense Management & Bill Splitter",
    description: "An automated finance application designed to track group bills, calculate balances, split restaurant receipts, and generate reports. Ideal for roommates and travel expense tracking, complete with secure user accounts.",
    type: ["MERN", "Tailwind CSS", "JWT", "Express.js"],
    liveUrl: "https://expanse-split.vercel.app/",
    githubUrl: "https://github.com/Ahmad-Mashhood/Expanse-Split",
    mockupType: "expensesplit"
  },
  {
    name: "VisaPredict AI",
    tagline: "Machine Learning Visa Approval Predictor",
    description: "A machine learning web tool predicting travel visa approvals based on demographic, employment, and income criteria. Employs Decision Tree, Random Forest, Logistic Regression, and XGBoost classifiers on python backends.",
    type: ["React.js", "Python", "XGBoost", "Scikit-learn"],
    liveUrl: "https://visa-predict-ai.vercel.app/",
    githubUrl: "https://github.com/Ahmad-Mashhood/Visa-predication",
    mockupType: "visapredict"
  }
]


const Projects = () => {
  const renderMockup = (type) => {
    switch (type) {
      case "talentmap":
        return (
          <div className="w-full aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px] p-4 flex flex-col shadow-inner select-none">
            <div className="flex gap-1.5 mb-3 shrink-0">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-slate-500 ml-2">talentmap_dashboard.sh</span>
            </div>
            <div className="flex-1 flex gap-3 overflow-hidden">
              <div className="w-20 border-r border-slate-800 pr-2 flex flex-col gap-1.5 shrink-0 text-[9px] text-slate-500">
                <div className="bg-primary/10 text-primary px-1 py-0.5 rounded font-bold">Dashboard</div>
                <div className="px-1 py-0.5 hover:text-slate-300">Roadmaps</div>
                <div className="px-1 py-0.5 hover:text-slate-300">Skill Gap</div>
              </div>
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <div className="text-slate-400 font-bold border-b border-slate-800 pb-1 shrink-0 text-[10px]">AI Job Recommendations</div>
                <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto">
                  <div className="bg-slate-950 p-2 rounded border border-slate-800/80 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-200 text-[10px]">MERN Developer</div>
                      <div className="text-[8px] text-slate-500">Multan (Remote)</div>
                    </div>
                    <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">98% Match</span>
                  </div>
                  <div className="bg-slate-950 p-2 rounded border border-slate-800/80 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-200 text-[10px]">Python ML Dev</div>
                      <div className="text-[8px] text-slate-500">Islamabad</div>
                    </div>
                    <span className="text-[8px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">94% Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "expensesplit":
        return (
          <div className="w-full aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px] p-4 flex flex-col shadow-inner select-none">
            <div className="flex gap-1.5 mb-3 shrink-0">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-slate-500 ml-2">expense_split.json</span>
            </div>
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 shrink-0">
                <div className="text-[8px] text-slate-500 tracking-wider">GROUP: ROOMMATES TRIP</div>
                <div className="text-lg font-bold font-outfit text-white tracking-tight mt-0.5">$45.00</div>
                <div className="text-[8px] text-emerald-400 font-bold mt-0.5">▲ You are owed $45.00 overall</div>
              </div>
              
              <div className="flex-grow flex flex-col gap-1.5 mt-2.5 overflow-y-auto">
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800/40 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">🍕</span>
                    <div>
                      <div className="font-bold text-slate-200 text-[10px]">Pizza Diner</div>
                      <div className="text-[8px] text-slate-500">Paid by Ahmad</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white text-[10px]">$60.00</div>
                    <div className="text-[7px] text-slate-500">Owed $30.00</div>
                  </div>
                </div>
                <div className="bg-slate-950/60 p-2 rounded border border-slate-800/40 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">⛽</span>
                    <div>
                      <div className="font-bold text-slate-200 text-[10px]">Fuel Refill</div>
                      <div className="text-[8px] text-slate-500">Paid by Subhan</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white text-[10px]">$30.00</div>
                    <div className="text-[7px] text-slate-500">Owe $10.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "visapredict":
        return (
          <div className="w-full aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px] p-4 flex flex-col shadow-inner select-none">
            <div className="flex gap-1.5 mb-3 shrink-0">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-slate-500 ml-2">model_inference.py</span>
            </div>
            
            <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
              <div className="grid grid-cols-2 gap-2 shrink-0">
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <div className="text-[7px] text-slate-500 uppercase">Model Type</div>
                  <div className="text-[10px] font-bold text-white mt-0.5">XGBoost</div>
                  <div className="text-[7px] text-emerald-400 mt-0.5">Accuracy: 92.4%</div>
                </div>
                <div className="bg-slate-950 p-2 rounded border border-slate-800">
                  <div className="text-[7px] text-slate-500 uppercase">Verdict</div>
                  <div className="text-[10px] font-bold text-emerald-400 mt-0.5">APPROVED</div>
                  <div className="text-[7px] text-slate-500 mt-0.5">Confidence: 94.2%</div>
                </div>
              </div>

              <div className="flex-1 bg-slate-950 rounded border border-slate-800 p-2 overflow-y-auto">
                <div className="text-[7px] text-slate-500 mb-1">DECISION PATH LOGS:</div>
                <div className="space-y-1 text-[8px] text-slate-400 leading-normal font-mono">
                  <div>[Node 0] <span className="text-primary">if</span> income &gt; $50k <span className="text-emerald-500">True</span></div>
                  <div>[Node 1] <span className="text-primary">if</span> experience &gt; 2yr <span className="text-emerald-500">True</span></div>
                  <div>[Node 2] <span className="text-primary">if</span> certs &gt;= 1 <span className="text-emerald-500">True</span></div>
                  <div className="text-emerald-400 font-bold mt-1">🎯 Prediction Class: 1 (Approved)</div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="space-y-12 py-8 scroll-mt-20">
      <div className="flex items-center gap-3">
        <h2 className="font-outfit text-3xl font-bold tracking-tight text-foreground">Projects</h2>
        <span className="h-0.5 flex-1 bg-border/60 dark:bg-border/20" />
      </div>

      <div className="space-y-16 lg:space-y-24">
        {projects.map((item, index) => (
          <div 
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Project Mockup Column */}
            <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} group`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/30 transition-transform duration-500 hover:-translate-y-1 bg-slate-950 p-2 border border-border dark:border-border/15">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {renderMockup(item.mockupType)}
              </div>
            </div>

            {/* Project Details Column */}
            <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} space-y-4`}>
              <div className="space-y-1">
                <h3 className="font-outfit text-2xl font-bold text-foreground">
                  {item.name}
                </h3>
                <h4 className="text-sm font-medium text-primary font-outfit">
                  {item.tagline}
                </h4>
              </div>

              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {item.type.map((tag, tagId) => (
                  <Badge 
                    key={tagId}
                    variant="secondary"
                    className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 border border-border bg-card dark:bg-card/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3">
                <a 
                  href={item.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Github className="size-4" />
                  View Github
                </a>
                
                <a 
                  href={item.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <ExternalLink className="size-4" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

