import { Code2, Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/[0.03] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold tracking-tight">Akash K</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional web development and design services. Helping businesses establish their digital presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Services", href: "#services" },
                { name: "Work", href: "#work" },
                { name: "Process", href: "#process" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              {["Web Development", "UI/UX Design", "Responsive Design", "Web Performance"].map((service) => (
                <li key={service} className="text-muted-foreground font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/akashkuppattil-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akash-k-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/akash__kuppattil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:akashskuppattil@gmail.com"
                className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground/60">
          <p>© {currentYear} Akash K — Web Development & Design</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <p>Made with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
