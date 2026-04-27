"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    setIsRTL(document.documentElement.dir === "rtl");
    const onScroll = () => setVisible(window.scrollY > 420);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          aria-label="Back to top"
          className={`fixed bottom-24 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-[#00f5ff] shadow-[0_14px_34px_rgba(0,0,0,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#00f5ff]/40 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,245,255,0.2)] sm:bottom-28 ${
            isRTL ? "left-6 sm:left-8" : "right-6 sm:right-8"
          }`}
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
