"use client"

import { Card } from "@/components/ui/card"
import {
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        const errorMsg = data?.error || data?.details || `HTTP ${res.status}: ${res.statusText}`
        console.error("Form error:", errorMsg)
        alert(`Error: ${errorMsg}`)
        return
      }

      setSuccess(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("Network error:", err)
      alert(`Network error: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm mb-2">
            💬 Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Send me a message or schedule a quick call to discuss your needs
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold mt-6">
            <Clock className="w-5 h-5 text-accent" />
            <span className="text-accent">Usually responds within 24 hours</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* LEFT — Contact Methods (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>

              {/* Email */}
              <a href="mailto:akashskuppattil@gmail.com" className="block group">
                <Card className="premium-card p-5 flex items-center gap-4 border-accent/10 hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      akashskuppattil@gmail.com
                    </p>
                  </div>
                </Card>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919947878418"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="premium-card p-5 flex items-center gap-4 border-accent/10 hover:border-accent/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-green-600 transition-colors">
                      +91 99478 78418
                    </p>
                  </div>
                </Card>
              </a>
            </div>

            {/* Location & Availability */}
            <Card className="premium-card p-6 border-accent/10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Calicut, Kerala, India
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      IST (UTC +5:30)
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="font-semibold text-sm">Currently Available</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Open to freelance projects and long-term collaborations
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold mb-3">Connect on Social Media</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/akashkuppattil-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card border border-border/50 hover:border-accent/50 flex items-center justify-center transition-all hover:scale-110">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/akash-k-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card border border-border/50 hover:border-blue-500/50 flex items-center justify-center transition-all hover:scale-110">
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                  </div>
                </a>
                <a
                  href="https://instagram.com/akash__kuppattil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card border border-border/50 hover:border-pink-500/50 flex items-center justify-center transition-all hover:scale-110">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-pink-600 transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <Card className="premium-card p-8 border-accent/20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </div>

              {success ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-accent hover:underline text-sm font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-sm transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={6}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-sm resize-none transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 text-sm font-bold disabled:opacity-60 transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </Card>

            {/* Trust Points */}
            <Card className="mt-6 p-6 bg-accent/5 border border-accent/20">
              <h4 className="font-bold text-sm mb-4">What to Expect:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Quick response within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Free consultation & quote</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Clear project timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Professional communication</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}