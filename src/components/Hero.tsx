import { useMemo, useState, useEffect, type MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import HeroParticles from "./HeroParticles";

type HeroProps = {
  locale: Locale;
  content: LanguageContent["hero"];
  onStartProject: () => void;
};

const brandWordPattern = /(كوبرا|Cobra)/g;

export function Hero({ locale, content, onStartProject }: HeroProps) {
  const isArabic = locale === "ar";
  const heroSlide = content.slides[0];
  const servicesButtonLabel = isArabic ? "استعرض الخدمات" : "Explore Services";
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % content.typingLines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [content.typingLines.length]);

  const handleServicesScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const servicesSection = document.getElementById("services");

    if (!servicesSection) {
      window.location.hash = "services";
      return;
    }

    const navbarOffset = 128;
    const top = servicesSection.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const renderTitle = (title: string | undefined) => {
    if (!title) return null;
    const parts = title.split(brandWordPattern);
    return parts.map((part, index) => (
      part === "كوبرا" || part === "Cobra" ? (
        <span key={`brand-${index}`} className="cobra-text" data-cobra-text={part}>
          {part}
        </span>
      ) : (
        <span key={`text-${index}`} className="hero-title-head">
          {part}
        </span>
      )
    ));
  };

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-[100svh] overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/services-combined.png"
          alt="Services Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
      </div>
      <HeroParticles />

      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#00f5ff]/10 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[0%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center justify-center gap-10 px-4 pt-20 pb-10 sm:px-6 sm:pt-32 sm:pb-12`}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full max-w-4xl flex-col items-center`}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-4 bg-transparent px-0 py-0"
          >
            <span className="text-[0.95rem] font-black tracking-widest text-white uppercase">
              {isArabic ? "كوبرا للحلول" : "COBRA SOLUTIONS"}
            </span>
            <div className="h-5 w-[1.5px] bg-white/20" />
            <AnimatePresence mode="wait">
              <motion.span
                key={typingIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[0.9rem] font-bold tracking-wide text-[#00f5ff] uppercase"
              >
                {content.typingLines[typingIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <h1
            className={`hero-title-cobra-theme max-w-4xl leading-[1.2] text-white ${isArabic ? "font-cairo" : ""}`}
          >
            {renderTitle(heroSlide?.title)}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-[1.1rem] [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]"
          >
            {heroSlide?.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-12 flex flex-wrap gap-5 justify-center`}
          >
            <button
              type="button"
              onClick={onStartProject}
              className="min-w-[200px] rounded-2xl bg-gradient-to-r from-[#00f5ff] to-[#008cff] px-10 py-5 text-[1.1rem] font-black text-white transition-all hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">{heroSlide?.primaryCta ?? "Start Project"}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
            </button>

            <a
              href="#projects"
              className="min-w-[200px] rounded-2xl bg-white px-10 py-5 text-[1.1rem] font-black transition-all hover:bg-white/90 flex items-center justify-center text-[#020617] shadow-lg hover:shadow-xl"
            >
              {heroSlide?.secondaryCta}
            </a>
          </motion.div>

          {/* Highlights */}
          <div className={`mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-8 w-full justify-center`}>
            {content.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
                {highlight}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Image Composition removed as per user request */}
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:block z-20"
      >
        <div className="h-9 w-6 rounded-full border-2 border-slate-200 flex justify-center p-1 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
        </div>
      </motion.div>
    </section>
  );
}
