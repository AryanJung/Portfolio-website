import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aryan Jung Thapa | Software Engineer Portfolio",
  description:
    "Portfolio of Aryan Jung Thapa - Software Engineering student at NCIT College specializing in full-stack development, machine learning, and AI. Explore my projects including Kura-Kani News Summarizer, Books_Online, and Tourist_Destination.",
  keywords: [
    "Aryan Jung Thapa",
    "Software Engineer",
    "Full Stack Developer",
    "NCIT College",
    "Nepal",
    "Web Development",
    "Machine Learning",
    "AI",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Aryan Jung Thapa" }],
  creator: "Aryan Jung Thapa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryanjungthapa.vercel.app",
    title: "Aryan Jung Thapa | Software Engineer Portfolio",
    description: "Portfolio showcasing software engineering projects and skills",
    siteName: "Aryan Jung Thapa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Jung Thapa | Software Engineer Portfolio",
    description: "Portfolio showcasing software engineering projects and skills",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
