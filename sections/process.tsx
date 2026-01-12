import { CheckCircle2, Code2, MessageSquare, Pencil, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Requirements Discussion",
    description: "We start with a detailed conversation about your goals, target audience, and specific requirements. Clear communication sets the foundation for success.",
    icon: MessageSquare,
    bgImage: "linear-gradient(135deg, #E8D4F8 0%, #D5C7F0 100%)"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "I create wireframes and design mockups, planning the structure and user experience. You'll see exactly what we're building before development begins.",
    icon: Pencil,
    bgImage: "linear-gradient(135deg, #D6E9FA 0%, #B3DFFE 100%)"
  },
  {
    number: "03",
    title: "Development",
    description: "Clean, modern code is built with best practices. Responsive design, fast performance, and proper structure ensure your site works perfectly.",
    icon: Code2,
    bgImage: "linear-gradient(135deg, #C4F1C7 0%, #A7E8B0 100%)"
  },
  {
    number: "04",
    title: "Testing & Review",
    description: "Thorough testing across devices and browsers. We review together, gather feedback, and make refinements until you're completely satisfied.",
    icon: CheckCircle2,
    bgImage: "linear-gradient(135deg, #FFE5A3 0%, #FFD66F 100%)"
  },
  {
    number: "05",
    title: "Delivery & Support",
    description: "Your site goes live. I provide deployment support and remain available for updates, fixes, and ongoing maintenance as needed.",
    icon: Rocket,
    bgImage: "linear-gradient(135deg, #FFCDD2 0%, #FFABAB 100%)"
  },
]

export default function Process() {
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

        {/* Steps - Mobile: 1 col, Tablet: 2 col, Desktop: 5 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <div 
                className="relative group h-full min-h-[240px] sm:min-h-[260px] rounded-lg sm:rounded-xl overflow-hidden border border-accent/20 transition-all duration-500 hover:border-accent/50 hover:shadow-lg cursor-pointer"
                style={{
                  background: step.bgImage
                }}
              >
                {/* Background Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-15 group-hover:opacity-25 transition-opacity" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
                      <path d="M10 0 L20 10 L10 20 L0 10 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${idx})`} />
                </svg>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-5 flex flex-col justify-between">
                  {/* Step number - smaller on mobile */}
                  <div className="text-2xl sm:text-3xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">{step.number}</div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-accent/30 border border-accent/50 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/50 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-4.5 sm:w-5 h-4.5 sm:h-5 text-accent" />
                  </div>

                  {/* Content - Show only essentials on mobile */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold mb-1 text-foreground group-hover:text-accent transition-colors line-clamp-2">{step.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-3">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Compact on mobile */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-lg sm:rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 text-center scroll-reveal">
          <p className="text-sm sm:text-base text-foreground mb-4 font-semibold">Ready to start?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-background font-semibold rounded-lg sm:rounded-xl hover:bg-accent/90 hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
