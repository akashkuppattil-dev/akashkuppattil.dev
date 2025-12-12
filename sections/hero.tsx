"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-12 animate-fade-in">
        {/* Content */}
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-foreground">AKASH K</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80">Software Developer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-2xl">
              I build scalable, efficient web applications using Python, Django, React, PHP, and modern backend
              technologies.
            </p>
          </div>

          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
  <a
    href="/Akash_K_Software_Developer_Resume.pdf"
    download="Akash_K_Software_Developer_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer nofollow"
    aria-label="Download Akash K resume as PDF"
    title="Download resume (PDF)"
    role="button"
    className="inline-block"
  >
    <Button
      size="lg"
      className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 group"
    >
      <Download className="w-5 h-5" />
      Download Resume
    </Button>
  </a>

  <Button
    size="lg"
    variant="outline"
    className="gap-2 group bg-transparent hover:bg-accent/10"
    onClick={handleViewProjects}
  >
    VIEW PROJECTS
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>



          {/* Quick stats */}
          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border/50 justify-center mx-auto">
            <div>
              <div className="text-3xl font-bold text-foreground">12+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">15+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">2</div>
              <p className="text-sm text-muted-foreground">Internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
