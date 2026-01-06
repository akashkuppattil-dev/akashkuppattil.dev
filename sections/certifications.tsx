import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  { title: "Python & Django Certifications", provider: "Udemy", icon: "🐍" },
  { title: "JavaScript & React Basics", provider: "Coursera", icon: "⚛️" },
  { title: "SQL & Database Certifications", provider: "Simplilearn", icon: "🗄️" },
  { title: "Web Development Fundamentals", provider: "FreeCodeCamp", icon: "💻" },
  { title: "Google Cloud Basics", provider: "Google", icon: "☁️" },
  { title: "Meta React Advanced", provider: "Meta", icon: "📱" },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Certifications</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="p-6 border-border/50 glass hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center flex flex-col"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="text-3xl">{cert.icon}</div>
                <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.provider}</p>

              <Badge variant="secondary" className="text-xs bg-background border-border/50 mt-auto w-fit">
                Certified
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
