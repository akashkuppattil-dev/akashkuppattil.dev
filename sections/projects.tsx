"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Comprehensive hospital management platform with patient registration, appointment scheduling, and role-based access control.",
    highlights: [
      "Built Front Office module for appointments and registration",
      "Implemented RBAC-secured REST APIs",
      "Improved UI workflow and backend performance",
    ],
    tech: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC"],
    status: "Live",
    image: "/hospital-management.jpg",
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
  },
  {
    title: "Warehouse & Logistics Tracking System",
    description:
      "Real-time vehicle and warehouse tracking system with advanced analytics and automated operations management.",
    highlights: [
      "Built real-time trip & vehicle tracking features",
      "Automated warehouse operations workflows",
      "Added analytics & reporting dashboards",
    ],
    tech: ["Python", "Django", "MySQL", "Real-time Tracking"],
    status: "Completed",
    image: "/warehouse-tracking.jpg",
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
  },
  {
    title: "Free Bird — Social Impact NGO Platform",
    description: "NGO case management platform enabling effective progress tracking and beneficiary management.",
    highlights: [
      "Built NGO case management dashboard",
      "Implemented progress tracking features",
      "Role-based secure user access",
    ],
    tech: ["Django", "MySQL", "Authentication"],
    status: "Completed",
    image: "/freebird-ngo.jpg",
    github: "https://github.com/akashkuppattil-dev",
    link: "https://github.com/akashkuppattil-dev",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border-border/50 glass hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 flex flex-col"
            >
              {/* Project image */}
              <div className="relative h-48 bg-accent/10 overflow-hidden flex items-center justify-center border-b border-border/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight flex-grow">{project.title}</h3>
                  <Badge variant="outline" className="text-xs whitespace-nowrap">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1 mb-4 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/70">
                      <span className="text-accent font-bold">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-background border-border/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-accent hover:bg-accent/90"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
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
