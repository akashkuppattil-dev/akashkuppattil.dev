"use client"
import { useState } from "react"
import { CheckCircle2, Code2, MessageSquare, Pencil, Rocket, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Requirements Discussion",
    description: "We start with a detailed conversation about your goals, target audience, and specific requirements. Clear communication sets the foundation for success.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "I create wireframes and design mockups, planning the structure and user experience. You'll see exactly what we're building before development begins.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Development",
    description: "Clean, modern code is built with best practices. Responsive design, fast performance, and proper structure ensure your site works perfectly.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Review",
    description: "Thorough testing across devices and browsers. We review together, gather feedback, and make refinements until you're completely satisfied.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Delivery & Support",
    description: "Your site goes live. I provide deployment support and remain available for updates, fixes, and ongoing maintenance as needed.",
    icon: Rocket,
  },
]

export default function Process() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 space-y-1.5 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Simple process from start to finish
          </p>
        </div>

        {/* Desktop & Tablet: Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="scroll-reveal"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <Card className="premium-card h-full min-h-[240px] sm:min-h-[260px] hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group">
                {/* Background Pattern - Optional decoration */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02] pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
                      <path d="M10 0 L20 10 L10 20 L0 10 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${idx})`} />
                </svg>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-5 flex flex-col justify-between">
                  {/* Step number */}
                  <div className="text-2xl sm:text-3xl font-black text-muted-foreground/30 group-hover:text-accent/50 transition-colors">{step.number}</div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-foreground group-hover:text-accent transition-colors line-clamp-2">{step.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-3">{step.description}</p>
                  </div>
                </div>
              </Card>
            </div>
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
              {steps.map((step, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="premium-card h-full min-h-[280px] shadow-lg relative overflow-hidden">
                    {/* Background Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02] pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pattern-mobile-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
                          <path d="M10 0 L20 10 L10 20 L0 10 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-mobile-${idx})`} />
                    </svg>

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      {/* Step number */}
                      <div className="text-4xl font-black text-muted-foreground/30">{step.number}</div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                        <step.icon className="w-7 h-7 text-accent" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-xl hover:bg-accent/90 hover:scale-110 transition-all z-10 active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-xl hover:bg-accent/90 hover:scale-110 transition-all z-10 active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all active:scale-95 ${idx === currentIndex ? 'bg-accent w-10' : 'bg-muted-foreground/40 w-2.5'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section - Compact on mobile */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 text-center scroll-reveal">
          <p className="text-sm sm:text-base text-foreground mb-4 font-semibold">Ready to start?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground font-semibold rounded-lg sm:rounded-xl hover:bg-accent/90 hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
