"use client"

import { useState } from "react"
import { ArrowRight, MessageCircle, Sparkles, Zap, Lightbulb, Rocket, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const valueCards = [
  {
    icon: Lightbulb,
    title: "Got an Idea?",
    description: "Let's turn your vision into a professional website or app"
  },
  {
    icon: Zap,
    title: "Growing Your Business?",
    description: "Get a powerful online presence that attracts customers"
  },
  {
    icon: Rocket,
    title: "Need a Complete Solution?",
    description: "From design to development to launch—I handle everything"
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleServicesScroll = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % valueCards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + valueCards.length) % valueCards.length)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Simple grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-10">
          {/* Introduction */}
          <div className="space-y-3 animate-slide-up">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Hi, I'm <span className="text-accent font-bold">Akash K</span> 👋
            </p>
            <p className="text-xl sm:text-2xl text-foreground font-semibold">
              Your Freelance Partner in Digital Transformation
            </p>
          </div>

          {/* Main Value Proposition */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15]">
              <span className="block text-foreground mb-2">I Transform Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient bg-[length:200%_auto]">
                Ideas Into Digital Reality
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're starting a new business, have a brilliant idea, or need to bring your existing business online—
              <span className="text-foreground font-semibold"> I'm here to make it happen</span>.
            </p>
          </div>

          {/* How I Help - Value Cards */}
          {/* Desktop & Tablet: Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "200ms" }}>
            {valueCards.map((card, idx) => (
              <Card key={idx} className="premium-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl border border-border/50 mb-4 mx-auto flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile: Carousel View */}
          <div className="md:hidden relative animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {valueCards.map((card, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <Card className="premium-card p-6 min-h-[200px] shadow-lg">
                      <div className="w-14 h-14 rounded-xl border border-border/50 mb-4 mx-auto flex items-center justify-center">
                        <card.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
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
              {valueCards.map((_, idx) => (
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

          {/* What I Offer (Quick Summary) */}
          <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl">
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">What I Do For You</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <div className="font-bold text-foreground mb-1">💻 Web Development</div>
                  <p className="text-xs text-muted-foreground">Full websites & apps</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <div className="font-bold text-foreground mb-1">🎨 UI/UX Design</div>
                  <p className="text-xs text-muted-foreground">Beautiful interfaces</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <div className="font-bold text-foreground mb-1">✨ Branding</div>
                  <p className="text-xs text-muted-foreground">Logo & identity</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background/50">
                  <div className="font-bold text-foreground mb-1">📈 Digital Growth</div>
                  <p className="text-xs text-muted-foreground">SEO & optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <button
              onClick={handleContactScroll}
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={handleServicesScroll}
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent border-2 border-foreground/20 text-foreground rounded-2xl font-bold text-lg transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Explore Services
            </button>
          </div>

          {/* Trust signals */}
          <div className="pt-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-semibold">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-700 dark:text-green-400">Currently accepting new projects</span>
            </div>
          </div>

          {/* Stats */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "600ms" }}>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">24h</div>
              <div className="text-xs text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">Fast</div>
              <div className="text-xs text-muted-foreground">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">Pro</div>
              <div className="text-xs text-muted-foreground">Quality Work</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

