import type React from "react"
import type { Metadata } from "next"
import { Baloo_2, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SoulSignal",
  description: "Find the perfect match for you with Statistics and Love combined.",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#f09898",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://soulsignal.netlify.app/",
    title: "SoulSignal",
    description: "Find the perfect match for you with Statistics and Love combined.",
    image: "/webimage.png",
    siteName: "SoulSignal",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://soulsignal.netlify.app/",
    title: "SoulSignal",
    description: "Find the perfect match for you with Statistics and Love combined.",
    images: ["/webimage.png"],
  },
}

// display font for big headings/brand
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-baloo",
})

// body font for paragraphs/UI
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${nunito.variable} ${baloo.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
