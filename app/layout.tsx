import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AKASH K — Web Development, UI Design & Digital Services",
  description:
    "Professional freelance web developer and designer. I build modern websites, landing pages, web applications, and handle UI/UX design for businesses. Fast delivery, clean code, responsive design, and ongoing support.",
  keywords: "Web Developer, Web Designer, Freelance Web Developer, Landing Page Design, Business Website, Web Application Development, UI/UX Design, Responsive Web Design, India",
  openGraph: {
    title: "AKASH K — Web Development & Design Services",
    description: "Build your digital presence with professional web development and UI/UX design. Fast, reliable, and client-focused services.",
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
