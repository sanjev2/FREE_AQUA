import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Aqua - Free Water Powered by Ethical Advertising",
  description: "Free, clean drinking water for communities powered by ethical advertising partnerships.",
  keywords: "water access, clean water, social impact, sustainable marketing, community outreach",
  openGraph: {
    title: "Free Aqua - Free Water Powered by Ethical Advertising",
    description: "Free, clean drinking water for communities powered by ethical advertising partnerships.",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9488",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
