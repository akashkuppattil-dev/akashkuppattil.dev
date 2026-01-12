"use client"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Fitness & Gym Website",
    description: "A modern fitness website designed with bold typography and a dark visual style. The website focuses on strong first impressions, clear call-to-action sections, and a smooth experience across all screen sizes.",
    highlights: [
      "Modern gym website design",
      "Bold typography and dark UI",
      "Responsive layout for all devices",
      "User engagement–focused structure"
    ],
    link: "https://fitness-forge-nu.vercel.app/",
    bgImage: "linear-gradient(135deg, #D6E9FA 0%, #B3DFFE 100%)"
  },
  {
    title: "Car Detailing Service Website",
    description: "A service-based website built for a car detailing business. The structure is designed to clearly present services and guide visitors toward inquiries and contact.",
    highlights: [
      "Service-focused business website",
      "Clean layout with clear sections",
      "Mobile-friendly and responsive design",
      "Conversion-oriented content structure"
    ],
    link: "https://akshy-car.vercel.app/",
    bgImage: "linear-gradient(135deg, #FFE5A3 0%, #FFD66F 100%)"
  },
  {
    title: "Automotive Website",
    description: "An automotive website created to present vehicle-related content in a clean and professional format. The design emphasizes visual clarity and brand presentation.",
    highlights: [
      "Automotive-focused UI design",
      "Clean visual hierarchy",
      "Structured content layout",
      "Modern frontend implementation"
    ],
    link: "https://hihexa-main.vercel.app/",
    bgImage: "linear-gradient(135deg, #F0D9F7 0%, #E8CCEF 100%)"
  },
  {
    title: "Car Sales Website",
    description: "A business website developed for a car sales company. The site focuses on showcasing vehicles, improving readability, and providing a smooth browsing experience for potential customers.",
    highlights: [
      "Vehicle showcase layout",
      "Business-oriented UX design",
      "Responsive and user-friendly",
      "Organized product presentation"
    ],
    link: "https://royalcontinentalhk.com/",
    bgImage: "linear-gradient(135deg, #C4F1C7 0%, #A7E8B0 100%)"
  },
  {
    title: "Web Development Company Website",
    description: "A professional website built for a web development company, highlighting services, company information, and contact sections in a clean and trustworthy layout.",
    highlights: [
      "Corporate website design",
      "Service-oriented layout",
      "Professional branding style",
      "Modern and minimal UI"
    ],
    link: "https://lumora-traid.vercel.app/",
    bgImage: "linear-gradient(135deg, #FFCDD2 0%, #FFABAB 100%)"
  },
]

export default function Work() {
  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 space-y-1.5 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Selected Work
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Real projects across different industries
          </p>
        </div>

        {/* Projects Grid - Mobile: 1 col, Tablet: 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="scroll-reveal group"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <div
                className="relative h-full min-h-[300px] sm:min-h-[340px] rounded-lg sm:rounded-xl overflow-hidden border border-accent/20 transition-all duration-500 hover:border-accent/50 hover:shadow-lg cursor-pointer flex flex-col"
                style={{
                  background: project.bgImage
                }}
              >
                {/* Background Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`work-pattern-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="2" y="2" width="16" height="16" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.3" />
                      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#work-pattern-${idx})`} />
                </svg>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
                  {/* Title */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description - Shorter preview on mobile */}
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug mb-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights - Show only first 2 */}
                  <div className="mb-3">
                    <p className="text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">Highlights</p>
                    <ul className="space-y-0.5">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-accent font-bold text-xs leading-none mt-0.5">✓</span>
                          <span className="text-[9px] sm:text-xs text-foreground/90 line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link */}
                  <div className="pt-3 border-t border-accent/20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/25 group-hover:bg-accent text-accent group-hover:text-background font-semibold rounded text-[9px] sm:text-xs transition-all duration-300"
                    >
                      View Live
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement & CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 text-center scroll-reveal">
          <p className="text-base sm:text-lg text-foreground mb-5 font-semibold">
            Have a project in mind? Let's work together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all text-sm"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
