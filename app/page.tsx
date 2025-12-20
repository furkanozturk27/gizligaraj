"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, TrendingUp, Users, Zap, ArrowRight, Instagram, Youtube, Mail, ExternalLink } from "lucide-react";

// ==========================================
// 🎛️ AYARLAR VE VERİ YÖNETİM PANELİ (BURAYI DÜZENLE)
// ==========================================
const SITE_DATA = {
  // İletişim Bilgileri
  contact: {
    email: "infogizligaraj@gmail.com",
    instagram: "https://www.instagram.com/gizligaraj",
    youtube: "https://www.youtube.com/@gizligaraj",
  },
  // İstatistikler
  stats: [
    { value: "3.1M+", label: "Tek Video İzlenme Rekoru", icon: Zap },
    { value: "17.5M+", label: "Son 30 Günlük Erişim", icon: Users },
    { value: "%100", label: "Organik Büyüme", icon: TrendingUp },
  ],
  // Viral Videolar Listesi (INSTAGRAM REELS UYUMLU)
  // Not: Instagram otomatik kapak vermez. 'thumbnail' kısmına görsel linki koymalısın.
  portfolio: [
    {
      id: 1,
      title: "LASTİK PATLAMASI",
      views: "3.1M",
      // 👇 Videonun Instagram Linki
      link: "https://www.instagram.com/gizligaraj/",
      // 👇 Kapak Görseli (Değiştirebilirsin)
      thumbnail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
      tags: ["Viral", "Reels"]
    },
    {
      id: 2,
      title: "ŞANZIMAN HATASI",
      views: "1.7M",
      link: "https://www.instagram.com/gizligaraj/",
      thumbnail: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop",
      tags: ["Mekanik", "Fail"]
    },
    {
      id: 3,
      title: "FERRARİ VAKASI",
      views: "1.6M",
      link: "https://www.instagram.com/gizligaraj/",
      thumbnail: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=800&auto=format&fit=crop",
      tags: ["Lüks", "Kaza"]
    },
  ]
};

// ==========================================
// 🧩 BİLEŞENLER
// ==========================================

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-[0.2em] text-garage-black bg-garage-yellow uppercase rounded-sm">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-bold font-oswald text-white uppercase tracking-tight leading-none">
      {children}
    </h2>
    <div className="h-1 w-24 bg-garage-yellow mt-6" />
  </div>
);

const StatCard = ({ value, label, icon: Icon, delay }: { value: string; label: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-garage-yellow/50 transition-colors duration-500"
  >
    <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 rounded-full bg-garage-yellow/5 blur-2xl group-hover:bg-garage-yellow/10 transition-all duration-500" />
    <Icon className="w-8 h-8 text-garage-yellow mb-4 opacity-80" />
    <h3 className="text-5xl md:text-6xl font-bold text-white font-oswald tracking-tighter">{value}</h3>
    <p className="text-garage-gray mt-2 text-sm uppercase tracking-wider font-medium">{label}</p>
  </motion.div>
);

const VideoCard = ({ title, views, link, thumbnail, tags }: { title: string; views: string; link: string; thumbnail: string; tags: string[] }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group aspect-[9/16] bg-neutral-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer shadow-2xl block z-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-60"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

      {/* Play/Instagram Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-garage-yellow flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          <Instagram className="w-8 h-8 text-black" />
        </div>
      </div>

      {/* Top Right Icon */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
        <Instagram className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="flex items-center gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide ${i === 0 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none' : 'bg-white text-black'}`}>
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-white font-oswald leading-none mb-2 uppercase">{title}</h4>
        <p className="text-garage-yellow text-sm font-bold flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> {views} Görüntülenme
        </p>
      </div>
    </motion.a>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-garage-black text-white font-inter overflow-x-hidden selection:bg-garage-yellow selection:text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-garage-black via-garage-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/60 z-[5]" />
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2560&auto=format&fit=crop"
            alt="Garage Atmosphere"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-[13vw] md:text-[8vw] leading-[0.85] font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 tracking-tighter mb-6">
              GİZLİ <span className="text-garage-yellow">GARAJ</span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl border-l-4 border-garage-yellow pl-6 mb-10">
              Otomobil Dünyasının <span className="text-white font-semibold">Suç Dosyaları</span> <br /> & Viral İçerik Stüdyosu.
            </p>

            {/* FIXED BUTTON */}
            <a
              href={`mailto:${SITE_DATA.contact.email}`}
              className="relative z-50 group inline-flex items-center gap-3 bg-garage-yellow text-black font-bold py-4 px-8 md:px-10 rounded-sm text-lg uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.2)] cursor-pointer"
            >
              İşbirliği Başlat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-garage-yellow to-transparent" />
        </motion.div>
      </section>

      {/* --- MISSION / ABOUT --- */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-garage-yellow blur-[100px] opacity-10" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl border border-white/10 bg-neutral-900/50 flex items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000')] bg-cover opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-60"></div>
              <div className="relative z-10 border border-white/30 p-8 backdrop-blur-md bg-black/30">
                <span className="text-6xl font-oswald font-bold text-white tracking-tighter">GG</span>
              </div>
            </motion.div>
          </div>

          <div className="order-1 md:order-2">
            <SectionHeading subtitle="MİSYON">GİZEMİN PEŞİNDE</SectionHeading>
            <p className="text-lg md:text-xl text-garage-gray leading-relaxed mb-6 font-light">
              Biz sadece araba incelemiyoruz; otomobil tarihinin <strong className="text-white">saklı hikayelerini</strong>, mühendislik facialarını ve şehir efsanelerini bir <em className="text-garage-yellow not-italic">"Belgesel"</em> formatında anlatıyoruz.
            </p>
            <div className="pl-6 border-l border-white/20">
              <p className="text-lg text-white leading-relaxed font-light italic">
                "İzleyicilerimiz videoyu atlamaz, sonuna kadar nefessiz izler. Yüzümüz yok, kahraman biz değiliz; <strong className="text-garage-yellow">kahraman sizin markanız.</strong>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 bg-[#080808] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <SectionHeading subtitle="GÜÇ">RAKAMLARLA BİZ</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE_DATA.stats.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} delay={0.1 * (index + 1)} />
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="KANIT">VİRAL İÇERİKLER</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {SITE_DATA.portfolio.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                views={video.views}
                link={video.link}
                thumbnail={video.thumbnail}
                tags={video.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- AUDIENCE --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-garage-yellow/5 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <SectionHeading subtitle="HEDEF KİTLE">KİM BİZİ İZLİYOR?</SectionHeading>
                <div className="space-y-8 mt-10">
                  <div>
                    <div className="flex justify-between text-base font-bold uppercase tracking-widest mb-3">
                      <span>Erkek</span>
                      <span className="text-garage-yellow">92%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-garage-yellow"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-base font-bold uppercase tracking-widest mb-3">
                      <span>Yaş 18-34</span>
                      <span className="text-garage-yellow">85%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Mühendislik', 'Modifiye', 'Teknoloji', 'Motorsporları', 'Restorasyon', 'Sokak Kültürü'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-center p-6 border border-white/10 rounded-lg bg-black/40 hover:bg-garage-yellow hover:border-garage-yellow hover:text-black transition-all duration-300 cursor-default group"
                  >
                    <span className="font-bold uppercase tracking-wider text-xs md:text-sm text-center">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-10">BİRLİKTE TARİH YAZALIM</h2>

          <a href={`mailto:${SITE_DATA.contact.email}`} className="group relative inline-block mb-16 z-50">
            <span className="text-3xl md:text-6xl font-bold text-garage-yellow group-hover:text-white transition-colors">
              {SITE_DATA.contact.email}
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-garage-yellow origin-left transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
          </a>

          <div className="flex justify-center gap-8 mb-12 relative z-50">
            <a href={SITE_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={SITE_DATA.contact.youtube} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Youtube className="w-6 h-6" />
            </a>
            <a href={`mailto:${SITE_DATA.contact.email}`} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="text-gray-600 text-xs md:text-sm uppercase tracking-[0.2em]">
            © 2025 Gizli Garaj Media. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
