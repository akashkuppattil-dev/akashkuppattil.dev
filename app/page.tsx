import { ThemeProvider } from "@/components/theme-provider"
import About from "@/sections/about"
import Contact from "@/sections/contact"
import Footer from "@/sections/footer"
import Hero from "@/sections/hero"
import Navigation from "@/sections/navigation"
import Process from "@/sections/process"
import Services from "@/sections/services"
import Work from "@/sections/work"

export default function Home() {
  return (
    <ThemeProvider>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <Process />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
