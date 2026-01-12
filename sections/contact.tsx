import { Card } from "@/components/ui/card"
import { Clock, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-border/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Ready to start? Contact me through your preferred channel.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-accent font-semibold mt-4">
            <Clock className="w-4 h-4" />
            24h Response Time
          </div>
        </div>

        {/* Contact Methods Grid - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Email */}
          <a href="mailto:akashskuppattil@gmail.com" className="group block">
            <Card className="premium-card p-5 flex items-start gap-4 group-hover:bg-accent/3 group-hover:border-accent/50 h-full transition-all duration-300 border-accent/10">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                <p className="font-semibold text-sm text-foreground break-all hover:text-accent transition-colors">akashskuppattil@gmail.com</p>
              </div>
            </Card>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/919947878418" target="_blank" rel="noopener noreferrer" className="group block">
            <Card className="premium-card p-5 flex items-start gap-4 group-hover:bg-accent/3 group-hover:border-accent/50 h-full transition-all duration-300 border-accent/10">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">+91 9947878418</p>
              </div>
            </Card>
          </a>
        </div>

        {/* Trust section - Compact */}
        <div className="mb-8 p-5 rounded-lg bg-accent/5 border border-accent/20">
          <h3 className="font-bold text-sm text-foreground mb-3">What to expect:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "24h response",
              "Transparent communication",
              "No hidden costs",
              "Professional service"
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-muted-foreground text-xs mb-4">Connect on social</p>
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/akashkuppattil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="premium-card p-3 flex items-center justify-center w-12 h-12 group-hover:border-accent/50 group-hover:bg-accent/3 transition-all border-accent/10">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Card>
            </a>
            <a
              href="https://linkedin.com/in/akash-k-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="premium-card p-3 flex items-center justify-center w-12 h-12 group-hover:border-accent/50 group-hover:bg-accent/3 transition-all border-accent/10">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Card>
            </a>
            <a
              href="https://instagram.com/akash__kuppattil"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="premium-card p-3 flex items-center justify-center w-12 h-12 group-hover:border-accent/50 group-hover:bg-accent/3 transition-all border-accent/10">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </Card>
            </a>
          </div>
        </div>

        {/* Location info */}
        <div className="mt-8 text-center pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Calicut, Kerala, India • IST (UTC +5:30)
          </p>
        </div>
      </div>
    </section>
  )
}
