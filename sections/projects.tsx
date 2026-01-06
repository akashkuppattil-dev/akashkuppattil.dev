"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Monitor, Server, Shield, Smartphone } from "lucide-react"

const projects = [
  {
    title: "Enterprise Hospital Management System",
    category: "Full-Stack System",
    problem: "Inefficient patient registration and a fragmented appointment scheduling process leading to long wait times and data silos.",
    solution: "Developed a secure, role-based platform with a streamlined front-office module and high-performance REST APIs for real-time synchronization.",
    outcomes: ["50% reduction in registration time", "Secured sensitive data with JWT/RBAC", "Zero downtime during peak hours"],
    tech: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Logistics & Warehouse Tracking",
    category: "Backend & Real-time",
    problem: "Lack of real-time visibility into vehicle movement and manual warehouse operations causing delays and inventory errors.",
    solution: "Engineered a Python-based tracking system with automated workflows and an analytics dashboard for predictive logistics management.",
    outcomes: ["Real-time trip tracking accuracy", "Automated inventory reporting", "Intuitive fleet manager dashboard"],
    tech: ["Python", "Django", "MySQL", "Real-time Tracking", "Data Analytics"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Server,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Free Bird — Social Impact Platform",
    category: "NGO Case Management",
    problem: "Inability to track the progress of beneficiaries effectively across multiple social impact programs.",
    solution: "Built a comprehensive case management dashboard allowing NGOs to monitor progress, manage beneficiaries, and generate impact reports.",
    outcomes: ["Centralized beneficiary database", "Enhanced progress tracking", "Secure multi-role access control"],
    tech: ["Django", "MySQL", "Authentication", "Report Engine"],
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title">Case Studies</h2>
          <div className="section-accent"></div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of production-grade systems built to solve real-world problems.
          </p>
        </div>

        <div className="flex lg:flex-col gap-6 lg:gap-16 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, idx) => (
            <Card key={idx} className="premium-card overflow-hidden border-border/50 min-w-[300px] sm:min-w-[450px] lg:min-w-0 snap-center flex flex-col lg:flex-row gap-0 group">
              {/* Cover Image Side */}
              <div className="w-full lg:w-2/5 relative overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] sm:h-[250px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20"></div>

                {/* Overlay Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <project.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-accent border-accent/20 tracking-widest uppercase text-[9px] px-2 py-0">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight uppercase line-clamp-2">{project.title}</h3>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-accent" onClick={() => window.open(project.github, "_blank")}>
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 mb-6 flex-grow">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest leading-none">The Problem</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-3 italic opacity-80">
                      "{project.problem}"
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">The Solution</p>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech & Action */}
                <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter bg-accent/5 text-accent/80 border border-accent/10 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="w-full sm:w-auto px-6 h-10 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-black text-[10px] uppercase tracking-widest shadow-lg shadow-accent/10" onClick={() => window.open(project.link, "_blank")}>
                    VIEW CASE STUDY
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
