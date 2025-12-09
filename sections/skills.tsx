import { Card } from "@/components/ui/card"
import {
  Code2,
  Database,
  GitBranch,
  Zap,
  Settings,
  Cpu,
  FileText,
  Lock,
  Users,
  CheckCircle,
  BarChart3,
  Cloud,
  Braces,
  Box,
  Palette,
  TerminalSquare,
  GitCompare,
  FolderOpen,
} from "lucide-react"

const skillsWithIcons = {
  // Languages
  Python: Code2,
  JavaScript: Braces,
  TypeScript: Cpu,
  Java: Box,
  PHP: Code2,

  // Frameworks / Backend
  Django: TerminalSquare,
  "Node.js": Box,
  NestJS: Zap,
  Laravel: Palette,
  CodeIgniter: Code2,

  // Frontend
  HTML: Code2,
  CSS: Palette,
  Bootstrap: Box,
  "React.js": Braces,
  "Tailwind CSS": Palette,

  // Databases
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,

  // Tools
  Git: GitCompare,
  GitHub: GitBranch,
  Docker: Box,
  Postman: FolderOpen,
  cPanel: Cloud,

  // Other Technical Skills
  JWT: Lock,
  RBAC: Lock,
  SDLC: FileText,
  "Agile/Scrum": Users,
  Testing: CheckCircle,
  Excel: BarChart3,
  "Power BI": BarChart3,
}

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "PHP"],
  },
  {
    title: "Frameworks / Backend",
    icon: Zap,
    skills: ["Django", "Node.js", "NestJS", "Laravel", "CodeIgniter"],
  },
  {
    title: "Frontend",
    icon: Cpu,
    skills: ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Docker", "Postman", "cPanel"],
  },
  {
    title: "Other Technical Skills",
    icon: Settings,
    skills: ["JWT", "RBAC", "SDLC", "Agile/Scrum", "Testing", "Excel", "Power BI"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">SKILLS & EXPERTISE</h2>
          <div className="w-12 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Card
                key={idx}
                className="p-6 border-border/50 glass hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skillsWithIcons[skill] || Code2
                    return (
                      <div
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-full bg-background border border-border/50 text-foreground/80 hover:border-accent/50 transition-colors flex items-center gap-1.5 group hover:bg-background/80"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-accent group-hover:text-accent" />
                        <span>{skill}</span>
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
