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
  metadataBase: new URL("https://eid-adha-si24f.vercel.app/"),
  icons: {
    icon: [
      { url: "/images/HMSI.png", sizes: "32x32", type: "image/png" },
      { url: "/images/HMSI.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/HMSI.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/HMSI.png",
  },
  openGraph: {
    title: "Selamat Idul Adha 1446 H - Mahasiswa SI Kelas F 2024",
    description: "Ucapan Selamat Hari Raya Idul Adha dari Mahasiswa Sistem Informasi Kelas F Angkatan 2024",
    url: "https://eid-adha-si24f.vercel.app/",
    images: [
      {
        url: "/images/OG-image.jpg",
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
    images: ["/images/OG-image.jpg"],
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
      <head>
        <link rel="icon" href="/images/HMSI.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/HMSI.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
