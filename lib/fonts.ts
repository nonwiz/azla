import { JetBrains_Mono as FontMono, Inter as FontSans, Josefin_Slab } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontJosefin = Josefin_Slab({
  subsets: ["latin"],
})