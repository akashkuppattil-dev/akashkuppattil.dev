import { Code2, Globe, Palette, Shield, Wrench, Zap } from "lucide-react"

const serviceCategories = [
  {
    category: "Web Development",
    description: "From concept to launch, I build modern, fast, and scalable websites.",
    services: ["Business Websites", "Landing Pages", "Portfolio Websites", "E-Commerce Sites", "Full-Stack Applications"],
    icon: Code2,
    bgImage: "linear-gradient(135deg, #D6E9FA 0%, #B3DFFE 100%)"
  },
  {
    category: "UI / UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    services: ["Website UI Design", "Landing Page Design", "Dashboard UI", "Mobile-First Design", "Design to Development"],
    icon: Palette,
    bgImage: "linear-gradient(135deg, #F0D9F7 0%, #E8CCEF 100%)"
  },
  {
    category: "Responsive Design",
    description: "Perfect on every device. Desktop, tablet, and mobile—all optimized.",
    services: ["Mobile-First Layouts", "Responsive Web Design", "Cross-Browser Testing", "Performance Optimization"],
    icon: Globe,
    bgImage: "linear-gradient(135deg, #C4F1C7 0%, #A7E8B0 100%)"
  },
  {
    category: "Web Performance",
    description: "Fast-loading sites that rank better and convert more.",
    services: ["Speed Optimization", "SEO Setup", "Analytics Integration", "Accessibility (A11y)"],
    icon: Zap,
    bgImage: "linear-gradient(135deg, #FFE5A3 0%, #FFD66F 100%)"
  },
  {
    category: "Maintenance & Support",
    description: "Ongoing updates, fixes, and improvements. I've got your back.",
    services: ["Website Updates", "Bug Fixes", "Feature Additions", "Performance Monitoring"],
    icon: Wrench,
    bgImage: "linear-gradient(135deg, #FFCDD2 0%, #FFABAB 100%)"
  },
  {
    category: "Web Security",
    description: "Your site and user data protected with best practices.",
    services: ["SSL/HTTPS Setup", "Data Security", "Backup & Recovery", "Hosting Guidance"],
    icon: Shield,
    bgImage: "linear-gradient(135deg, #D9D6FF 0%, #C4B5FF 100%)"
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 space-y-1.5 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Services
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Web solutions for your business
          </p>
        </div>

        {/* Bento Grid - Mobile: 1 col, Tablet: 2 col, Desktop: 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {serviceCategories.map((service, idx) => (
            <div 
              key={idx} 
              className={`scroll-reveal ${idx === 0 || idx === 5 ? 'sm:col-span-1 lg:col-span-2' : ''}`}
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              <div 
                className="relative group h-full min-h-[240px] sm:min-h-[260px] rounded-lg sm:rounded-xl overflow-hidden border border-accent/20 transition-all duration-500 hover:border-accent/50 hover:shadow-lg cursor-pointer"
                style={{
                  background: service.bgImage
                }}
              >
                {/* Background Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`service-pattern-${idx}`} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                      <circle cx="12.5" cy="12.5" r="3" fill="currentColor" opacity="0.3" />
                      <line x1="0" y1="12.5" x2="25" y2="12.5" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
                      <line x1="12.5" y1="0" x2="12.5" y2="25" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#service-pattern-${idx})`} />
                </svg>
                
                {/* Content */}
                <div className="relative h-full p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/30 border border-accent/50 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/50 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                  </div>

                  {/* Title and description - Optimized for mobile */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold mb-1 text-foreground group-hover:text-accent transition-colors line-clamp-2">{service.category}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 leading-snug line-clamp-2">{service.description}</p>
                  </div>

                  {/* Services list - Show only 2 on mobile, 3 on larger screens */}
                  <ul className="space-y-1">
                    {service.services.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-[9px] sm:text-xs text-muted-foreground flex items-start gap-1.5 group-hover:text-foreground transition-colors">
                        <span className="text-accent font-bold text-xs mt-0.5">✓</span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-lg sm:rounded-xl bg-accent/5 border border-accent/20 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
            Need something custom?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all text-xs sm:text-sm"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
