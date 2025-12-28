import type React from "react";
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// No function calls! Just use .className

export const metadata: Metadata = {
  title: "Free Aqua - Free Water Powered by Ethical Advertising",
  description: "Free, clean drinking water for communities powered by ethical advertising partnerships.",
  keywords: "water access, clean water, social impact, sustainable marketing, community outreach",
  openGraph: {
    title: "Free Aqua - Free Water Powered by Ethical Advertising",
    description: "Free, clean drinking water for communities powered by ethical advertising partnerships.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d9488",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${GeistMono.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
