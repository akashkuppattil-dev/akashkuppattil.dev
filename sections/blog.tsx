"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogs = [
  {
    title: "Lessons from Building Real-Time Applications",
    excerpt:
      "Discover key insights and best practices for developing real-time applications using modern tech stacks and architectural patterns.",
    date: "Dec 2024",
    category: "Backend",
  },
  {
    title: "Choosing Between Django and NestJS",
    excerpt:
      "A comprehensive comparison of Django and NestJS, exploring when to use each framework and their unique advantages for different project types.",
    date: "Nov 2024",
    category: "Architecture",
  },
  {
    title: "Backend Authentication Best Practices (JWT & RBAC)",
    excerpt:
      "Deep dive into implementing secure authentication systems using JWT tokens and role-based access control for enterprise applications.",
    date: "Oct 2024",
    category: "Security",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Latest Insights</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded"></div>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {blogs.map((blog, idx) => (
            <Card
              key={idx}
              className="p-6 border-border/50 glass hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20 flex flex-col min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{blog.category}</span>
                <span className="text-xs text-muted-foreground">{blog.date}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight flex-grow">{blog.title}</h3>

              <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow">{blog.excerpt}</p>

              <Button variant="ghost" className="w-full justify-between gap-2 text-accent hover:text-accent/80 px-0">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
