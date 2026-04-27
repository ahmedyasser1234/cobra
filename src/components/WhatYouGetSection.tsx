"use client";

import { useEffect, useMemo, useState } from "react";
import { LazyLottie } from "./LazyLottie";
import { motion, type Variants } from "framer-motion";
import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type WhatYouGetSectionProps = {
  locale: Locale;
  content: LanguageContent["whatYouGet"];
};

const animations = [
  "/animations/why-choose-us/feature1.json",
  "/animations/why-choose-us/feature2.json",
  "/animations/why-choose-us/feature3.json",
  "/animations/why-choose-us/feature4.json",
  "/animations/why-choose-us/feature5.json",
  "/animations/why-choose-us/feature6.json",
  "/animations/why-choose-us/feature7.json",
  "/animations/why-choose-us/feature8.json",
  "/animations/why-choose-us/feature9.json",
  "/animations/why-choose-us/feature10.json",
  "/animations/why-choose-us/feature11.json",
  "/animations/why-choose-us/feature12.json",
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function WhatYouGetSection({ locale, content }: WhatYouGetSectionProps) {
  const isArabic = locale === "ar";
  const items = content.items.slice(0, animations.length);
  const rotatingTitles = useMemo(
    () =>
      isArabic
        ? ["لماذا تختار كوبرا", "لماذا تعتمد على كوبرا", "لماذا توظف كوبرا"]
        : ["Why Choose Cobra", "Why Rely on Cobra", "Why Hire Cobra"],
    [isArabic],
  );
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [rotatingTitles.length]);

  return (
    <section id="what-you-get" dir={isArabic ? "rtl" : "ltr"} className="bg-sky-50 py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-2xl font-black bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent sm:text-3xl lg:text-5xl pb-2 ${isArabic ? "" : "tracking-tight"}`}>
            <motion.span
              key={activeTitleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-block"
            >
              {rotatingTitles[activeTitleIndex]}
            </motion.span>
          </h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-6 h-6 w-52 text-[#0ea5e9]" fill="none" aria-hidden="true">
            <path
              d="M8 15c40-8 78-9 114-4 28 4 55 7 90-2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-8 text-lg leading-relaxed text-[#475569] font-medium">{content.sectionSubtitle}</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-8 transition-all duration-500 hover:border-[#0ea5e9]/30 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)]"
            >
              <div className="flex h-full w-full flex-col items-center justify-between gap-6 text-center">
                <h3 className="text-xl font-black leading-snug text-[#0f172a] group-hover:text-[#0ea5e9] transition-colors">{item.title}</h3>

                <div className="mx-auto w-full max-w-[200px]">
                  <LazyLottie
                    animationPath={animations[index]}
                    loop
                    autoplay
                    className="h-32 w-full sm:h-36 transition-all duration-500"
                  />
                </div>

                <p className="text-[0.95rem] leading-relaxed text-[#64748b] font-medium">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
