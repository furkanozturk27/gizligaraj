import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Fontları import et
import "./globals.css";

// 1. Font Konfigürasyonu
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// 2. Metadata (SEO)
export const metadata: Metadata = {
  title: "GİZLİ GARAJ | Media Kit",
  description: "Otomobil Dünyasının Suç Dosyaları & Viral İçerik Stüdyosu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {/* Grain Texture Overlay */}
        <div className="noise-bg"></div>
        {children}
      </body>
    </html>
  );
}
