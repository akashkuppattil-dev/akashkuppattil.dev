"use client"
import { useState } from "react"
import {
  Code2,
  Palette,
  Image,
  Sparkles,
  ClipboardList,
  TrendingUp,
  Wrench,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Card } from "@/components/ui/card"

const serviceCategories = [
  {
    category: "Web & Software Development",
    description: "Full-stack development solutions from concept to deployment",
    services: [
      "Business Website Development",
      "Company & Startup Websites",
      "Full-Stack Web Applications",
      "Custom Software Development",
      "Admin Dashboards & Management Systems",
      "API Development & Integration"
    ],
    icon: Code2,
  },
  {
    category: "UI / UX & Product Design",
    description: "Beautiful, user-centered digital experiences",
    services: [
      "Website UI Design (Figma)",
      "Web App & Dashboard Design",
      "Mobile-First UI Design",
      "Design to Development (Figma → Code)",
      "Design Systems & UI Consistency"
    ],
    icon: Palette,
  },
  {
    category: "Graphic & Creative Design",
    description: "Eye-catching visuals for your brand",
    services: [
      "Poster Design",
      "Social Media Creatives",
      "Ad Creatives",
      "Promotional Banners"
    ],
    icon: Image,
  },
  {
    category: "Branding & Identity",
    description: "Build a memorable brand",
    services: [
      "Logo Design",
      "Brand Identity Basics",
      "Business Cards & Brand Assets",
      "Social Media Branding"
    ],
    icon: Sparkles,
  },
  {
    category: "Product & Client Management",
    description: "Professional project handling",
    services: [
      "Requirement Analysis",
      "Client Communication & Support",
      "Project Planning & Tracking",
      "Quality Assurance & Testing"
    ],
    icon: ClipboardList,
  },
  {
    category: "Digital Growth",
    description: "Optimize your digital presence",
    services: [
      "Landing Page Optimization",
      "SEO-Ready Website Setup",
      "Analytics Integration"
    ],
    icon: TrendingUp,
  },
  {
    category: "Maintenance & Support",
    description: "Keep your assets running smoothly",
    services: [
      "Website & App Maintenance",
      "Bug Fixes & Updates",
      "Performance Improvements"
    ],
    icon: Wrench,
  }
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceCategories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length)
  }

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Services I Offer
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive freelance services for your digital needs
          </p>
        </div>

        {/* Desktop & Tablet: Grid View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {serviceCategories.map((service, idx) => (
            <Card
              key={idx}
              className="premium-card p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-3">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">
                    {service.category}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Services count */}
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    {service.services.length} services included
                  </p>
                </div>
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
              {serviceCategories.map((service, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <Card className="premium-card p-6 min-h-[300px] shadow-lg">
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl border border-border/50 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {service.category}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Services list */}
                      <div className="pt-3 border-t border-border/50">
                        <ul className="space-y-2">
                          {service.services.slice(0, 3).map((item, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-accent font-bold mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {service.services.length > 3 && (
                            <li className="text-xs text-muted-foreground italic">
                              +{service.services.length - 3} more services
                            </li>
                          )}
                        </ul>
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
            {serviceCategories.map((_, idx) => (
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

        {/* CTA Section - Simple */}
        <div className="mt-10 text-center">
          <Card className="premium-card p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ready to Start Your Project?</h3>
              <p className="text-sm text-muted-foreground">
                Get a personalized quote and let's discuss your needs
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all text-sm"
              >
                Get Free Consultation →
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
