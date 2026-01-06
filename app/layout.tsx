import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AKASH K — Software Developer | Full-Stack Architect",
  description:
    "Professional Software Developer and Full-Stack Architect specializing in Python (Django), Node.js (NestJS), and React. Engineering scalable, high-performance web systems and available for freelance/contract opportunities.",
  keywords: "Software Developer, Full-Stack Developer, Web Architect, Python Django Expert, NestJS Developer, React Developer, Freelance Developer India, Backend Specialist",
  openGraph: {
    title: "AKASH K — Software Developer | Full-Stack Architect",
    description: "Engineering scalable web systems with Python, Django, React, and modern backend technologies. Available for high-impact roles and contracts.",
    type: "website",
    url: "https://akashkuppattil.dev",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
