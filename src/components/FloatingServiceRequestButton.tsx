"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareText } from "lucide-react";

import type { Locale } from "@/types";

type FloatingServiceRequestButtonProps = {
  locale: Locale;
  onOpen: () => void;
};

export function FloatingServiceRequestButton({ locale, onOpen }: FloatingServiceRequestButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isArabic = locale === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Position it opposite to WhatsApp
  const sideClass = isArabic ? "left-6 sm:left-8" : "right-6 sm:right-8";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={isArabic ? "ابدأ مشروعك" : "Start Project"}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed bottom-6 ${sideClass} z-[60] group flex items-center gap-3 sm:bottom-8`}
    >
      <div className={`relative flex h-14 items-center gap-2 px-1.5 transition-all duration-500 sm:h-16 ${
        isArabic ? "flex-row-reverse" : "flex-row"
      } ${
        isScrolled 
          ? "rounded-full bg-[#020617]/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] pr-4 pl-1.5" 
          : ""
      }`}>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5ff] to-[#008cff] text-white shadow-[0_0_15px_rgba(0,245,255,0.4)] sm:h-11 sm:w-11"
        >
          <MessageSquareText className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.div>

        <motion.span 
          animate={{ 
            opacity: isScrolled ? 1 : [0, 1, 1, 0],
            x: isScrolled ? 0 : (isArabic ? [-10, 0, 0, -10] : [10, 0, 0, 10])
          }}
          transition={isScrolled ? { duration: 0.3 } : { 
            duration: 32, 
            repeat: Infinity, 
            times: [0, 0.03, 0.97, 1],
            ease: "easeInOut"
          }}
          className={`text-sm font-black uppercase tracking-wider text-white drop-shadow-[0_2px_10px_rgba(0,245,255,0.3)] sm:text-base ${
            isScrolled ? "block" : ""
          }`}
        >
          {isArabic ? "ابدأ مشروعك" : "Start Project"}
        </motion.span>
      </div>
    </motion.button>
  );
}
