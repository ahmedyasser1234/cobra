"use client";

import { LazyLottie } from "./LazyLottie";
import { motion } from "framer-motion";
import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type JoinUsBenefitsSectionProps = {
  locale: Locale;
  content: LanguageContent["joinUsBenefits"];
};

const benefitAnimations = [
  "/animations/get-with-us/get1.json",
  "/animations/get-with-us/get2.json",
  "/animations/get-with-us/get3.json",
  "/animations/get-with-us/get4.json",
  "/animations/get-with-us/get5.json",
];

export function JoinUsBenefitsSection({ locale, content }: JoinUsBenefitsSectionProps) {
  const isArabic = locale === "ar";
  const items = content.items.slice(0, benefitAnimations.length);

  const renderItem = (label: string, index: number) => (
    <motion.article
      key={`${label}-${index}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
      className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-xl"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="w-full max-w-[200px]">
          <LazyLottie animationPath={benefitAnimations[index]} loop autoplay className="h-auto w-full transition-all duration-500" />
        </div>
        <p className="text-[1.1rem] font-black leading-relaxed text-slate-900">{label}</p>
      </div>
    </motion.article>
  );

  return (
    <section id="join-us-benefits" dir={isArabic ? "rtl" : "ltr"} className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-2xl font-black sm:text-3xl lg:text-4xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent pb-2 ${isArabic ? "" : "tracking-tight"}`}>
            {content.sectionTitle}
          </h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-4 h-6 w-52 text-[#0ea5e9]" fill="none" aria-hidden="true">
            <path
              d="M8 15c40-8 78-9 114-4 28 4 55 7 90-2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((label, index) => renderItem(label, index))}
        </div>
      </div>
    </section>
  );
}
