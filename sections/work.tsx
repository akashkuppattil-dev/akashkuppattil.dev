"use client"
import { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Fitness & Gym Website",
    description: "A modern fitness website with bold typography and dark visual style. Smooth experience across all devices.",
    highlights: [
      "Modern gym website design",
      "Bold typography and dark UI",
      "Responsive layout"
    ],
    link: "https://fitness-forge-nu.vercel.app/",
  },
  {
    title: "Car Detailing Service Website",
    description: "Service-based website for car detailing business with clear service presentation.",
    highlights: [
      "Service-focused website",
      "Clean layout",
      "Mobile-friendly design"
    ],
    link: "https://akshy-car.vercel.app/",
  },
  {
    title: "Automotive Website",
    description: "Automotive website with clean and professional format emphasizing visual clarity.",
    highlights: [
      "Automotive-focused UI",
      "Clean visual hierarchy",
      "Modern implementation"
    ],
    link: "https://hihexa-main.vercel.app/",
  },
  {
    title: "Car Sales Website",
    description: "Business website for car sales company showcasing vehicles with smooth browsing.",
    highlights: [
      "Vehicle showcase layout",
      "Business-oriented UX",
      "Responsive design"
    ],
    link: "https://royalcontinentalhk.com/",
  },
  {
    title: "Web Development Company",
    description: "Professional website for web development company with clean and trustworthy layout.",
    highlights: [
      "Corporate website design",
      "Service-oriented layout",
      "Modern and minimal UI"
    ],
    link: "https://lumora-traid.vercel.app/",
  },
]

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real projects across different industries
          </p>
        </div>

        {/* Desktop & Tablet: Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="premium-card p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                {/* Title */}
                <h3 className="text-base font-bold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights - Compact list */}
                <ul className="space-y-1.5 pt-2 border-t border-border/50">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors"
                >
                  View Live
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel View */}
        <div className="sm:hidden mb-10 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {projects.map((project, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="premium-card p-6 min-h-[320px] shadow-lg">
                    <div className="space-y-4 h-full flex flex-col">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 pt-3 border-t border-border/50 flex-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-accent font-bold mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all text-sm"
                      >
                        View Live Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg hover:bg-accent transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-accent/90 text-accent-foreground flex items-center justify-center shadow-lg hover:bg-accent transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-accent w-8' : 'bg-muted-foreground/30'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Card className="premium-card p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                Have a project in mind? Let's work together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all text-sm"
              >
                Start a Project →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
