"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function Hero() {
  const handleServicesScroll = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Minimal background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full animate-fade-in relative z-10 flex flex-col items-center justify-center">
        {/* Wave Greeting */}
        <div className="mb-4 animate-slide-up text-5xl sm:text-6xl">
          <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
            👋
          </span>
        </div>

        {/* Simplified headline */}
        <div className="text-center space-y-4 mb-8 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground animate-slide-up [animation-delay:100ms]">
            Hi, I'm <span className="text-accent">Akash K</span>
            <span className="block">I build beautiful, fast & responsive</span>
            <span className="text-accent">websites & web apps</span>
          </h1>
        </div>

        {/* Simple value proposition */}
        <div className="max-w-2xl w-full mb-8 animate-slide-up [animation-delay:200ms]">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
            Full-stack web development • UI/UX design • Performance optimization • Web security
            <span className="block mt-2 text-foreground font-medium">From concept to launch, I deliver modern solutions for your business</span>
          </p>
        </div>

        {/* Simple CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto animate-slide-up [animation-delay:300ms]">
          <Button
            size="sm"
            className="px-8 py-2 bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold rounded-lg shadow-lg shadow-accent/20"
            onClick={handleServicesScroll}
          >
            View Services <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="px-8 py-2 text-sm font-semibold rounded-lg border-foreground/20"
            onClick={handleContactScroll}
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Contact
          </Button>
        </div>

        {/* Trust signal - minimal */}
        <div className="mt-8 text-center animate-slide-up [animation-delay:400ms]">
          <p className="text-xs text-muted-foreground">
            ✓ 24h Response • Quality Work • Transparent Pricing
          </p>
        </div>
      </div>
    </section>
  )
}
