import type React from "react"
import { Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Clueless Builders - Premium Mobile Apps & Websites",
  description:
    "We started Clueless Builders not with a plan — but with a habit. A habit of building exceptional digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} antialiased dark`}>
      <body className="font-sans bg-gray-950 text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
