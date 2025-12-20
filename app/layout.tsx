import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Oswald'ı da buraya eklemiş olalım
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

// 👇 BURAYI GÜNCELLE
export const metadata: Metadata = {
  title: "GİZLİ GARAJ | Media Kit",
  description: "Otomobil Dünyasının Suç Dosyaları & Viral İçerik Stüdyosu. 17.5M+ Aylık Erişim.",
  openGraph: {
    title: "GİZLİ GARAJ | Media Kit",
    description: "Markanızı milyonlara ulaştıracak viral otomobil içerikleri. İstatistiklerimizi inceleyin.",
    url: "https://gizligaraj.vercel.app",
    siteName: "Gizli Garaj",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop", // Buraya sitenin güzel bir ekran görüntüsünü koyabilirsin
        width: 1200,
        height: 630,
        alt: "Gizli Garaj Media Kit",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GİZLİ GARAJ | Media Kit",
    description: "Otomobil Dünyasının Suç Dosyaları & Viral İçerik Stüdyosu.",
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <div className="noise-bg fixed inset-0 pointer-events-none z-50"></div>
        {children}
      </body>
    </html>
  );
}
