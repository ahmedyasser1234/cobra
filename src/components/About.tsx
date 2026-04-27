"use client";

import { LazyLottie } from "./LazyLottie";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  locale: Locale;
  content: LanguageContent["about"];
};

export function About({ locale, content }: AboutProps) {
  const isArabic = locale === "ar";
  const alignClass = isArabic ? "text-right" : "text-left";

  return (
    <section id="about" dir={isArabic ? "rtl" : "ltr"} className="relative scroll-mt-24 overflow-hidden bg-white py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] h-48 w-48 rounded-full bg-[#0ea5e9]/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col pt-0 ${alignClass}`}
          >
            <div className="mb-5">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#0ea5e9]"
              >
                {content.eyebrow}
              </motion.span>
              
              <h2 className={`mt-2 text-xl font-black leading-tight bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent sm:text-2xl lg:text-3xl pb-1 ${isArabic ? "" : "tracking-tight"}`}>
                {content.title}
              </h2>
              
              <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-slate-600 max-w-2xl">
                {content.description}
              </p>
            </div>

            {/* Mission Statement Box */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-5 shadow-sm"
            >
              <p className="text-[0.9rem] leading-relaxed text-slate-700 font-semibold">
                {content.mission}
              </p>
            </motion.div>

            {/* Highlights List */}
            <div className="mt-8 space-y-4">
              {content.highlights.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4.5 transition-all duration-300 hover:border-[#0ea5e9]/20"
                >
                  <div className="flex-1">
                    <h3 className="text-[0.95rem] font-bold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-slate-500 font-medium">
                      {point.description}
                    </p>
                  </div>
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-3">
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                <div className="relative aspect-square">
                  <LazyLottie
                    animationPath="/animations/general/about.json"
                    loop
                    autoplay
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
