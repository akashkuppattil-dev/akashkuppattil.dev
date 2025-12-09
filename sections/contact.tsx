"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "akashskuppattil@gmail.com",
    link: "mailto:akashskuppattil@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9947878418",
    link: "tel:+919947878418",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Calicut, Kerala, India",
    link: "",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/akashkuppattil-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/akash-k-developer",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:akashskuppattil@gmail.com",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", message: "" })
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, and interesting projects. Feel
              free to reach out!
            </p>

            <div className="space-y-4">
              {contactLinks.map((contact) => {
                const Icon = contact.icon
                return (
                  <Card
                    key={contact.label}
                    className="p-4 border-border/50 glass hover:border-accent/50 transition-all cursor-pointer"
                    onClick={() => contact.link && window.open(contact.link)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-semibold text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          copyToClipboard(contact.value, contact.label)
                        }}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {copied === contact.label ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm font-semibold text-muted-foreground mb-4">Connect on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.url, "_blank")}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/30 hover:to-primary/30 transition-all"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border/50 glass">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Message</label>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>

              {submitted && (
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/30 text-sm text-accent text-center">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
