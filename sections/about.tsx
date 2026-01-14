"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Heart, MessageSquare, Target, ChevronLeft, ChevronRight } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is my priority. I listen carefully, understand your vision, and deliver solutions that exceed expectations."
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "I don't cut corners. Clean code, thoughtful design, and attention to detail in every project."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Transparent updates, regular check-ins, and responsive support throughout our partnership."
  }
]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length)
  }

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Web developer & designer specializing in clean, modern websites that help businesses succeed online.
          </p>
        </div>

        <div className="space-y-8">
          {/* Main content */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I help businesses build professional digital presence through clean, modern web design and development. I focus on creating sites that look great and actually convert visitors into customers.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From startups to established businesses, I work closely to understand your goals and deliver solutions that drive real results.
            </p>
          </div>

          {/* What I deliver */}
          <div className="pt-4">
            <h3 className="text-lg font-bold mb-4 text-foreground">What I Deliver</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-accent font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">Responsive Websites</p>
                  <p className="text-xs text-muted-foreground">Beautiful on all devices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">Performance Optimized</p>
                  <p className="text-xs text-muted-foreground">Fast-loading, SEO-friendly sites.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Modern best practices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-accent font-bold text-lg">✓</span>
                <div>
                  <p className="font-semibold text-sm text-foreground">Ongoing Support</p>
                  <p className="text-xs text-muted-foreground">Updates & maintenance included.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-4 text-foreground">How I Work</h3>

            {/* Desktop & Tablet: Grid View */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4">
              {values.map((value, idx) => (
                <Card key={idx} className="premium-card p-4 border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-sm font-bold mb-1 text-foreground">{value.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>

            {/* Mobile: Carousel View */}
            <div className="sm:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  {values.map((value, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <Card className="premium-card p-6 min-h-[220px] shadow-lg">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                          <value.icon className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="text-base font-bold mb-2 text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
                {values.map((_, idx) => (
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
          </div>
        </div>
      </div>
    </section>
  )
}
