import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/sections/navigation"
import Hero from "@/sections/hero"
import About from "@/sections/about"
import Skills from "@/sections/skills"
import Services from "@/sections/services"
import Experience from "@/sections/experience"
import Projects from "@/sections/projects"
import Education from "@/sections/education"
import Certifications from "@/sections/certifications"
import Blog from "@/sections/blog"
import Resume from "@/sections/resume"
import Contact from "@/sections/contact"
import Footer from "@/sections/footer"

export default function Home() {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Certifications />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
