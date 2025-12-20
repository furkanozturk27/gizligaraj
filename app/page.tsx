"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, TrendingUp, Users, Zap, ArrowRight, Instagram, Youtube, Mail, Copy, Check, MessageCircle, X } from "lucide-react";

// ==========================================
// 🎛️ AYARLAR VE VERİ YÖNETİM PANELİ
// ==========================================
const SITE_DATA = {
  contact: {
    email: "infogizligaraj@gmail.com",
    // ✅ NUMARAN ENTEGRE EDİLDİ (Uluslararası Format)
    phone: "905514518662",
    whatsappMessage: "Merhaba, Gizli Garaj ile işbirliği yapmak istiyoruz.", // İlk açılış mesajı
    instagram: "https://www.instagram.com/gizligaraj",
    youtube: "https://www.youtube.com/@gizligaraj",
  },
  stats: [
    { value: "3.1M+", label: "Tek Video İzlenme Rekoru", icon: Zap },
    { value: "17.5M+", label: "Son 30 Günlük Erişim", icon: Users },
    { value: "%100", label: "Organik Büyüme", icon: TrendingUp },
  ],
  // VIRAL VIDEOLAR (Instagram)
  // Not: Linkleri ve Thumbnailleri buradan güncelleyebilirsin.
  portfolio: [
    {
      id: 1,
      title: "LASTİK PATLAMASI",
      views: "3.2M",
      link: "https://www.instagram.com/reel/DSKBtpQiGDr/",
      thumbnail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
      tags: ["Viral", "Reels"]
    },
    {
      id: 2,
      title: "ŞANZIMAN HATASI",
      views: "1.7M",
      link: "https://www.instagram.com/reel/DSTHiwdCNQd/",
      thumbnail: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop",
      tags: ["Mekanik", "Fail"]
    },
    {
      id: 3,
      title: "BENZİN POMPASI",
      views: "1.8M",
      link: "https://www.instagram.com/reel/DSZ7QKqjTkt/",
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
      <div
        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-60"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-garage-yellow flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          <Instagram className="w-8 h-8 text-black" />
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
        <Instagram className="w-4 h-4 text-white" />
      </div>

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
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mail Kopyalama Fonksiyonu
  const handleCopyMail = () => {
    navigator.clipboard.writeText(SITE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="min-h-screen bg-garage-black text-white font-inter overflow-x-hidden selection:bg-garage-yellow selection:text-black">

      {/* --- PREMIUM CONTACT MODAL (POPUP) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-[#111] border border-white/10 w-full max-w-md p-8 rounded-2xl shadow-2xl relative pointer-events-auto">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase text-center">İletişime Geç</h3>
                <p className="text-gray-400 text-center text-sm mb-8">Markanızı tanıtmak için en uygun yöntemi seçin.</p>

                <div className="space-y-4">
                  {/* WhatsApp Option */}
                  <a
                    href={`https://wa.me/${SITE_DATA.contact.phone}?text=${encodeURIComponent(SITE_DATA.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full p-4 rounded-xl bg-[#25D366] text-black font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg group"
                  >
                    <div className="bg-white/20 p-2 rounded-full">
                      <MessageCircle className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80 uppercase tracking-wider">Hızlı Yanıt</div>
                      <div className="text-lg">WhatsApp'tan Yaz</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Mail Option */}
                  <button
                    onClick={handleCopyMail}
                    className="flex items-center gap-4 w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group"
                  >
                    <div className="bg-garage-yellow/10 p-2 rounded-full">
                      <Mail className="w-6 h-6 text-garage-yellow" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Kurumsal</div>
                      <div className="text-lg text-white font-bold">
                        {copied ? "Mail Kopyalandı! ✅" : "Mail Adresini Kopyala"}
                      </div>
                    </div>
                    {copied ? <Check className="ml-auto w-5 h-5 text-green-500" /> : <Copy className="ml-auto w-5 h-5 text-gray-500 group-hover:text-white" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0 pointer-events-none select-none">
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

            {/* YENİ MODAL TETİKLEYİCİ BUTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative z-50 inline-flex items-center gap-3 bg-garage-yellow text-black font-bold py-4 px-8 md:px-10 rounded-sm text-lg uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.3)] cursor-pointer"
            >
              İşbirliği Başlat
              <ArrowRight className="w-5 h-5" />
            </button>
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

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-10">BİRLİKTE TARİH YAZALIM</h2>

          <button onClick={() => setIsModalOpen(true)} className="group relative inline-block mb-16 z-50">
            <span className="text-3xl md:text-6xl font-bold text-garage-yellow group-hover:text-white transition-colors">
              {SITE_DATA.contact.email}
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-garage-yellow origin-left transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300"></span>
          </button>

          <div className="flex justify-center gap-8 mb-12 relative z-50">
            <a href={SITE_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={SITE_DATA.contact.youtube} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Youtube className="w-6 h-6" />
            </a>
            <button onClick={() => setIsModalOpen(true)} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-garage-yellow hover:text-black hover:border-garage-yellow transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </button>
          </div>

          <div className="text-gray-600 text-xs md:text-sm uppercase tracking-[0.2em]">
            © 2025 Gizli Garaj Media. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
