import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Macha.cc",
  description: "Browse and load Roblox scripts and executors easily with Macha.cc!",
  icons: {
    icon: "/favicon.ico",
  },

  themeColor: "#f7c5d8",

  openGraph: {
    title: "Macha.cc - Roblox Scripts & Executors",
    description: "Browse and load Roblox scripts and executors easily with Macha.cc!",
    url: "https://macha.cc",
    siteName: "Macha.cc",
    images: [
      {
        url: "/images/webimg.jpg",
        width: 1200,
        height: 630,
        alt: "Macha.cc Roblox Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Macha.cc - Roblox Scripts & Executors",
    description: "Browse and load Roblox scripts and executors easily with Macha.cc!",
    images: ["/images/webimg.jpg"],
  },

  keywords: [
    "Roblox",
    "Roblox Scripts",
    "Roblox Executors",
    "Macha",
    "Macha.cc",
    "Script Hub",
    "Roblox Exploits"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
