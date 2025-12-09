import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border/30">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">AKASH K</h3>
            <p className="text-sm text-muted-foreground">Software Developer & Full-stack Builder</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-sm">
              {["ABOUT", "PROJECTS", "CONTACT"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">TECHNOLOGIES</h4>
            <ul className="space-y-2 text-sm">
              {["Django", "React.js", "NestJS"].map((tech) => (
                <li key={tech}>
                  <span className="text-muted-foreground">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">SOCIAL</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/akashkuppattil-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center text-muted-foreground hover:text-accent-foreground"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/akash-k-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center text-muted-foreground hover:text-accent-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:akashskuppattil@gmail.com"
                className="w-8 h-8 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center text-muted-foreground hover:text-accent-foreground"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} AKASH K — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
