"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence, useInView, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion";
import { TrendingUp, Users, Zap, ArrowRight, Instagram, Youtube, Mail, Copy, Check, MessageCircle, X, Film, Target, MonitorPlay, Package, Megaphone, MapPin, BarChart3, Activity, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ==========================================
// ✨ SPARKLES (KIVILCIM) MOTORU
// ==========================================
const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    particleColor = "#FFD700",
    speed = 1,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasId = useId();
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    if (context && canvasRef.current) {
      const particles: any[] = [];
      const { width, height } = canvasRef.current;

      for (let i = 0; i < particleDensity; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
        });
      }

      const draw = () => {
        if (!context || !canvasRef.current) return;
        context.clearRect(0, 0, width, height);
        context.fillStyle = particleColor;

        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          context.beginPath();
          context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          context.fill();
        });

        animationFrameId = requestAnimationFrame(draw);
      };
      draw();
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [context, maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id || canvasId}
      className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
      style={{ background }}
      width={1200}
      height={800}
    />
  );
};

// ==========================================
// 🎛️ AYARLAR VE VERİ YÖNETİM PANELİ
// ==========================================
const SITE_DATA = {
  contact: {
    email: "infogizligaraj@gmail.com",
    phone: "905514518662",
    whatsappMessage: "Merhaba, Gizli Garaj ile işbirliği yapmak istiyoruz.",
    instagram: "https://www.instagram.com/gizligaraj",
    youtube: "https://www.youtube.com/@gizligaraj",
  },
  // INSTAGRAM VERİLERİ (GÜNCEL)
  audience: {
    cities: [
      { name: "İstanbul", value: 42, color: "#FFD700" },
      { name: "Ankara", value: 20, color: "#FFFFFF" },
      { name: "İzmir", value: 15, color: "#888888" },
      { name: "Diğer", value: 23, color: "#333333" },
    ],
    ages: [
      { range: "18-24", value: 45 },
      { range: "25-34", value: 35 },
      { range: "35-44", value: 15 },
      { range: "45+", value: 5 },
    ],
    gender: { male: 92, female: 8 }
  },
  features: [
    {
      title: "BELGESEL TADINDA",
      desc: "Sıkıcı teknik veriler değil, hikaye anlatıyoruz. İzleyici reklam olduğunu anlamadan videoyu sonuna kadar nefessiz izler.",
      icon: Film
    },
    {
      title: "PREMIUM PRODÜKSİYON",
      desc: "Telefonla çekilmiş vloglar değil; sinema kameraları, renk düzenleme ve ses tasarımı ile markanızı 'Prestige' seviyesinde sunuyoruz.",
      icon: Zap
    },
    {
      title: "%100 OTOMOBİL TUTKUNU",
      desc: "Genel izleyici değil; araba alan, modifiye yapan, bu kültürü yaşayan 'Alım Gücü Yüksek' ve sadık bir kitleye hitap ediyoruz.",
      icon: Target
    }
  ],
  services: [
    {
      title: "VIRAL REELS ENTEGRASYONU",
      desc: "Markanızın ürünü veya hizmeti, milyonlarca izlenen Reels akışımızın içine 'doğal kurgu' ile yerleştirilir.",
      icon: MonitorPlay
    },
    {
      title: "ÜRÜN DENEYİMİ & İNCELEME",
      desc: "Ürününüzü garajımızda gerçek koşullarda test ediyoruz. 'Unboxing'den montaja kadar tüm süreci sinematik bir dille anlatıyoruz.",
      icon: Package
    },
    {
      title: "PROJE SPONSORLUĞU",
      desc: "Uzun soluklu projelerimizin (Örn: Motor yenileme) ana sponsoru olun. Tüm seride logonuz ve markanız yer alsın.",
      icon: Megaphone
    }
  ],
  stats: [
    { number: 3.1, suffix: "M+", label: "Tek Video İzlenme Rekoru", icon: Zap },
    { number: 19.4, suffix: "M+", label: "Son 30 Günlük Erişim", icon: Users },
    { number: 415, suffix: "K+", label: "Aylık Etkileşim", icon: Activity },
  ],
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

const DonutChart = ({ data }: { data: typeof SITE_DATA.audience.cities }) => {
  const radius = 80;
  const stroke = 20;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="rotate-[-90deg]">
        {data.map((item, index) => {
          const offset = circumference - (item.value / 100) * circumference;
          const rotation = (accumulatedPercent / 100) * 360;
          accumulatedPercent += item.value;

          return (
            <motion.circle
              key={index}
              cx="100"
              cy="100"
              r={radius}
              stroke={item.color}
              strokeWidth={stroke}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
              style={{ transformOrigin: "center", rotate: rotation }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none rotate-0">
        <MapPin className="w-8 h-8 text-garage-yellow mb-1" />
        <span className="text-xs text-gray-400 uppercase tracking-widest">Lokasyon</span>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, delay }: { title: string; desc: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="border-l-2 border-white/10 pl-6 hover:border-garage-yellow transition-colors duration-300 group"
  >
    <div className="mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-garage-yellow group-hover:text-black transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-2xl font-bold font-oswald text-white mb-2 uppercase">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const ServiceCard = ({ title, desc, icon: Icon, delay }: { title: string; desc: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#111] border border-white/10 p-8 rounded-xl hover:border-garage-yellow/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg"
  >
    <div className="w-14 h-14 bg-garage-yellow/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-garage-yellow transition-colors duration-300">
      <Icon className="w-7 h-7 text-garage-yellow group-hover:text-black transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold font-oswald text-white mb-3 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const AnimatedNumber = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayValue = useTransform(springValue, (latest) => {
    if (Number.isInteger(value)) {
      return Math.round(latest).toString();
    }
    return latest.toFixed(1);
  });

  return (
    <span ref={ref} className="flex">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const StatCard = ({ number, suffix, label, icon: Icon, delay }: { number: number; suffix: string; label: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-garage-yellow/50 transition-colors duration-500"
  >
    <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 rounded-full bg-garage-yellow/5 blur-2xl group-hover:bg-garage-yellow/10 transition-all duration-500" />
    <Icon className="w-8 h-8 text-garage-yellow mb-4 opacity-80" />
    <h3 className="text-5xl md:text-6xl font-bold text-white font-oswald tracking-tighter flex items-center">
      <AnimatedNumber value={number} suffix={suffix} />
    </h3>
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

// ⚡ YENİLENMİŞ DİKKAT ÇEKİCİ İŞBİRLİĞİ BUTONU
const CtaButton = ({ onClick, className }: { onClick?: () => void, className?: string }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative group inline-flex items-center gap-4 bg-garage-yellow text-black font-bold py-6 px-12 rounded-lg text-xl uppercase tracking-widest overflow-hidden shadow-[0_0_60px_rgba(255,215,0,0.5)] cursor-pointer",
        className
      )}
    >
      {/* Arka Plan Parlama Efekti */}
      <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Yanıp Sönen Işık Efekti */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm group-hover:via-white/50"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <span className="relative z-10">İşbirliği Başlat</span>
      <ArrowRight className="relative z-10 w-7 h-7 group-hover:translate-x-1 transition-transform" />
    </motion.button>
  )
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- ZOOM PARALLAX & SCROLL AYARLARI ---
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Hero animasyonları
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 500]);

  // İçerik animasyonu
  const contentY = useTransform(scrollYProgress, [0.4, 1], ["100vh", "0vh"]);


  const handleCopyMail = () => {
    navigator.clipboard.writeText(SITE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="bg-garage-black text-white font-inter overflow-x-hidden selection:bg-garage-yellow selection:text-black">

      {/* --- PREMIUM CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-[#111] border border-white/10 w-full max-w-md p-8 rounded-2xl shadow-2xl relative pointer-events-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase text-center">İletişime Geç</h3>
                <p className="text-gray-400 text-center text-sm mb-8">Markanızı tanıtmak için en uygun yöntemi seçin.</p>

                <div className="space-y-4">
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

      {/* ⭐⭐⭐ ZOOM PARALLAX HERO SECTION ⭐⭐⭐ */}
      <div ref={containerRef} className="relative h-[250vh]">

        <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

          {/* ARKA PLAN + SPARKLES */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <div className="absolute inset-0 bg-gradient-to-t from-garage-black via-garage-black/80 to-transparent z-20" />
            <div className="absolute inset-0 bg-black/50 z-[10]" />
            <motion.img
              style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]) }}
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2560&auto=format&fit=crop"
              alt="Garage Atmosphere"
              className="w-full h-full object-cover"
            />
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={70}
              className="w-full h-full z-10"
              particleColor="#FFD700"
            />
          </div>

          {/* ZOOM YAPILACAK DEV YAZI */}
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity, y: heroTextY }}
            className="relative z-30 text-center origin-center px-4"
          >
            <h1 className="text-[13vw] md:text-[8vw] leading-[0.85] font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 tracking-tighter mb-6 whitespace-nowrap">
              GİZLİ <span className="text-garage-yellow">GARAJ</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto border-l-4 border-garage-yellow pl-6">
              Otomobil Dünyasının <span className="text-white font-semibold">Suç Dosyaları</span>
            </p>
          </motion.div>

          {/* SCROLL İPUCU */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 z-40"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] animate-pulse">Girmek İçin Kaydır</span>
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>

        </div>
      </div>

      {/* ⭐⭐⭐ ANA İÇERİK (ZOOM EFEKTİNDEN SONRA GELEN KISIM) ⭐⭐⭐ */}
      <div className="relative z-40 bg-garage-black -mt-[100vh]">

        {/* YENİLENMİŞ İŞBİRLİĞİ BUTONU */}
        <div className="container mx-auto px-6 pb-24 relative z-50 text-center">
          <CtaButton onClick={() => setIsModalOpen(true)} className="mb-24" />
        </div>

        {/* MİSYON */}
        <section className="py-24 md:py-32 relative border-t border-white/5 bg-garage-black">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-garage-yellow blur-[100px] opacity-10" />
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-square rounded-2xl border border-white/10 bg-neutral-900/50 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000')] bg-cover opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-60"></div>
                <div className="relative z-10 border border-white/30 p-8 backdrop-blur-md bg-black/30">
                  <span className="text-6xl font-oswald font-bold text-white tracking-tighter">GG</span>
                </div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading subtitle="MİSYON">GİZEMİN PEŞİNDE</SectionHeading>
              <p className="text-lg md:text-xl text-garage-gray leading-relaxed mb-6 font-light">Biz sadece araba incelemiyoruz; otomobil tarihinin <strong className="text-white">saklı hikayelerini</strong>, mühendislik facialarını ve şehir efsanelerini bir <em className="text-garage-yellow not-italic">"Belgesel"</em> formatında anlatıyoruz.</p>
              <div className="pl-6 border-l border-white/20"><p className="text-lg text-white leading-relaxed font-light italic">"İzleyicilerimiz videoyu atlamaz, sonuna kadar nefessiz izler. Yüzümüz yok, kahraman biz değiliz; <strong className="text-garage-yellow">kahraman sizin markanız.</strong>"</p></div>
            </div>
          </div>
        </section>

        {/* NEDEN BİZ */}
        <section className="py-24 bg-[#080808] border-t border-white/5">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="FARKLILIK">NEDEN GİZLİ GARAJ?</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {SITE_DATA.features.map((feature, i) => (
                <FeatureCard key={i} title={feature.title} desc={feature.desc} icon={feature.icon} delay={0.2 * i} />
              ))}
            </div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className="py-24 bg-gradient-to-b from-[#080808] to-[#111] border-t border-white/5">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="İŞ MODELLERİ">HİZMETLERİMİZ</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SITE_DATA.services.map((service, i) => (
                <ServiceCard key={i} title={service.title} desc={service.desc} icon={service.icon} delay={0.2 * i} />
              ))}
            </div>
          </div>
        </section>

        {/* RAKAMLAR */}
        <section className="py-24 bg-[#080808] relative border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mb-16">
              <SectionHeading subtitle="GÜÇ">RAKAMLARLA BİZ</SectionHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SITE_DATA.stats.map((stat, index) => (
                <StatCard key={index} icon={stat.icon} number={stat.number} suffix={stat.suffix} label={stat.label} delay={0.1 * (index + 1)} />
              ))}
            </div>
          </div>
        </section>

        {/* ⭐⭐⭐ HEDEF KİTLE ANALİZİ (YÜZDELER SABİTLENDİ) ⭐⭐⭐ */}
        <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-garage-yellow/5 blur-[120px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <SectionHeading subtitle="TELEMETRİ">HEDEF KİTLE ANALİZİ</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* 1. KUTU: CİNSİYET */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Users className="w-6 h-6 text-garage-yellow" />
                  <h3 className="text-xl font-oswald text-white uppercase tracking-wide">Cinsiyet Dağılımı</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2">
                      <span>Erkek</span>
                      <span className="text-garage-yellow">{SITE_DATA.audience.gender.male}%</span>
                    </div>
                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${SITE_DATA.audience.gender.male}%` }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-garage-yellow" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2">
                      <span>Kadın</span>
                      <span className="text-white">{SITE_DATA.audience.gender.female}%</span>
                    </div>
                    <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${SITE_DATA.audience.gender.female}%` }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }} className="h-full bg-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. KUTU: ŞEHİRLER */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center"
              >
                <div className="flex items-center gap-3 mb-6 w-full">
                  <MapPin className="w-6 h-6 text-garage-yellow" />
                  <h3 className="text-xl font-oswald text-white uppercase tracking-wide">Lokasyon</h3>
                </div>
                <DonutChart data={SITE_DATA.audience.cities} />
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6 w-full">
                  {SITE_DATA.audience.cities.map((city, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: city.color }} />
                        <span className="text-gray-300">{city.name}</span>
                      </div>
                      <span className="font-bold text-white">%{city.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. KUTU: YAŞ DAĞILIMI (YÜZDELER SABİTLENDİ) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="w-6 h-6 text-garage-yellow" />
                  <h3 className="text-xl font-oswald text-white uppercase tracking-wide">Yaş Aralığı</h3>
                </div>
                <div className="flex items-end justify-between h-48 gap-4">
                  {SITE_DATA.audience.ages.map((age, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                      {/* ⚡ GÜNCELLEME: Yüzde değeri artık hep görünür */}
                      <span className="text-garage-yellow font-bold text-sm transition-opacity">%{age.value}</span>
                      <div className="w-full bg-white/10 rounded-t-lg relative overflow-hidden flex-1 flex items-end">
                        <motion.div initial={{ height: 0 }} whileInView={{ height: `${age.value * 2}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className={`w-full ${i === 0 ? 'bg-white' : i === 1 ? 'bg-garage-yellow' : 'bg-gray-600'}`} />
                      </div>
                      <span className="text-xs font-bold text-gray-400">{age.range}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
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

        {/* FOOTER */}
        <footer className="py-24 bg-black border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-10">BİRLİKTE TARİH YAZALIM</h2>

            {/* YENİLENMİŞ FOOTER BUTONU */}
            <CtaButton onClick={() => setIsModalOpen(true)} className="mb-16" />

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
      </div>
    </main>
  );
}
