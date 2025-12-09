import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Trogon Media Pvt Ltd",
    period: "July 2025 – Sept 2025",
    location: "Remote",
    highlights: [
      "Worked with Laravel & CodeIgniter frameworks",
      "Built responsive UI components (HTML, CSS, JS, Bootstrap)",
      "Managed deployments with cPanel",
      "Hosted updates, database setup, and configuration",
      "Collaborated across design + backend teams",
    ],
    skills: ["PHP", "Laravel", "CodeIgniter", "HTML", "CSS", "Bootstrap", "cPanel"],
  },
  {
    title: "Software Developer Intern",
    company: "Bairuha Tech, Calicut",
    period: "Jan 2025 – May 2025",
    location: "Calicut, Kerala",
    highlights: [
      "Full-stack development with React.js, NestJS, PostgreSQL",
      "Implemented secure JWT + RBAC authentication systems",
      "Performed API testing, debugging, and validations",
      "Improved backend performance and response times",
      "Participated in Agile/Scrum sprint planning and reviews",
    ],
    skills: ["React.js", "NestJS", "PostgreSQL", "JWT", "RBAC", "Agile"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Professional Experience</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-accent ml-6"></div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-6 w-14 h-14 bg-background border-4 border-accent rounded-full flex items-center justify-center ml-0">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>

              {/* Content */}
              <Card className="p-6 md:ml-32 border-border/50 glass hover:border-accent/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-background border-border/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
