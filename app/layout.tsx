import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Selamat Idul Adha 1446 H - Mahasiswa SI Kelas F 2024",
  description: "Ucapan Selamat Hari Raya Idul Adha dari Mahasiswa Sistem Informasi Kelas F Angkatan 2024",
  keywords: "Idul Adha, Hari Raya, Sistem Informasi, Mahasiswa, 2024",
  openGraph: {
    title: "Selamat Idul Adha 1446 H - Mahasiswa SI Kelas F 2024",
    description: "Ucapan Selamat Hari Raya Idul Adha dari Mahasiswa Sistem Informasi Kelas F Angkatan 2024",
    images: [
      {
        url: "/images/SI24F.jpg",
        width: 1200,
        height: 630,
        alt: "Mahasiswa Sistem Informasi Kelas F Angkatan 2024",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selamat Idul Adha 1446 H - Mahasiswa SI Kelas F 2024",
    description: "Ucapan Selamat Hari Raya Idul Adha dari Mahasiswa Sistem Informasi Kelas F Angkatan 2024",
    images: ["/images/SI24F.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
