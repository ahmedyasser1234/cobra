"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";
import { contentByLocale } from "@/data/siteContent";

type FloatingWhatsAppButtonProps = {
  locale?: Locale;
  content?: LanguageContent["whatsapp"];
};

export function FloatingWhatsAppButton({ locale, content }: FloatingWhatsAppButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [urlLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "ar";
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") === "en" ? "en" : "ar";
  });

  const resolvedLocale: Locale = locale ?? urlLocale;
  const resolvedContent = content ?? contentByLocale[resolvedLocale].whatsapp;
  const isArabic = resolvedLocale === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = encodeURIComponent(
    isArabic
      ? "مرحبًا Cobra Creative Solutions، أرغب في مناقشة مشروع."
      : "Hi Cobra Creative Solutions, I would like to discuss a project.",
  );
  const href = `https://wa.me/971523416509?text=${message}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group fixed bottom-6 z-[60] flex items-center gap-3 sm:bottom-8 ${
        isArabic ? "left-6 sm:left-8 flex-row" : "right-6 sm:right-8 flex-row-reverse"
      }`}
    >
      {/* Tooltip / Label */}
      <motion.div
        animate={{ 
          opacity: isScrolled ? 1 : [0, 1, 1, 0],
          x: isScrolled ? 0 : (isArabic ? [10, 0, 0, 10] : [-10, 0, 0, -10])
        }}
        transition={isScrolled ? { duration: 0.3 } : { 
          duration: 32, 
          repeat: Infinity, 
          times: [0, 0.03, 0.97, 1],
          ease: "easeInOut"
        }}
        className={`hidden flex-col items-start px-4 py-2 transition-all duration-500 sm:flex ${
          isArabic ? "text-right items-end" : "text-left items-start"
        } ${
          isScrolled 
            ? "rounded-full bg-[#020617]/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
            : ""
        }`}
      >
        <p className="text-[0.85rem] font-black uppercase tracking-widest text-[#00f5ff] drop-shadow-[0_0_10px_rgba(0,245,255,0.4)]">
          {resolvedContent.tooltipTitle}
        </p>
        <p className="mt-0.5 text-[0.75rem] font-bold text-slate-300 drop-shadow-md">
          {resolvedContent.tooltipText}
        </p>
      </motion.div>
 
      {/* WhatsApp Icon Circle */}
      <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
        <div className="absolute inset-0 rounded-full bg-[#00f5ff]/20 blur-lg animate-pulse" />
        <motion.span 
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#008cff] to-[#00f5ff] text-white shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] group-hover:scale-110"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            <path d="M9 10h.01" />
            <path d="M15 10h.01" />
            <path d="M9 15c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" />
          </svg>
          
          {/* Subtle WhatsApp Indicator */}
          <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
          </div>
        </motion.span>
      </div>
    </motion.a>
  );
}
