import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "AWH Engineering College — Calicut, Kerala",
    period: "2023 – 2025",
    status: "Graduated",
  },
  {
    degree: "Bachelor of Computer Science (BSc CS)",
    institution: "SAFI Institute of Advanced Study — Malappuram, Kerala",
    period: "2019 – 2022",
    status: "Graduated",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Education</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <Card key={idx} className="p-8 border-border/50 glass hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-background" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>
                <Badge variant="secondary">{edu.status}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
