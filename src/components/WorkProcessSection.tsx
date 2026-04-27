"use client";

import { LazyLottie } from "./LazyLottie";
import { motion } from "framer-motion";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

type WorkProcessSectionProps = {
  locale: Locale;
  content: LanguageContent["workProcess"];
};

export function WorkProcessSection({ locale, content }: WorkProcessSectionProps) {
  const isArabic = locale === "ar";
  const stepIllustrations = [
    "/animations/how-we-work/step1.json",
    "/animations/how-we-work/step2.json",
    "/animations/how-we-work/step3.json",
    "/animations/how-we-work/step4.json",
    "/animations/how-we-work/step5.json",
  ];
  const visibleSteps = content.steps.slice(0, stepIllustrations.length);
  const firstRow = visibleSteps.slice(0, 2);
  const secondRow = visibleSteps.slice(2, 5);

  const renderStepCard = (step: (typeof visibleSteps)[number], index: number) => {
    return (
      <motion.article
        key={`${index}-${step.title}`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="h-full overflow-hidden rounded-[1.8rem] border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-xl"
      >
        <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
          <div className="w-full overflow-hidden rounded-[1.8rem] border border-slate-100 bg-white p-2">
            <LazyLottie
              animationPath={stepIllustrations[index]}
              loop
              autoplay
              className="mx-auto h-[180px] w-full max-w-[320px] sm:h-[195px]"
            />
          </div>

          <h3 className={`text-[1.3rem] font-extrabold text-slate-900 ${isArabic ? "" : "tracking-tight"}`}>
            {step.title}
          </h3>

          <p className="text-[1rem] leading-relaxed text-slate-600 font-medium">
            {step.description}
          </p>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="how-we-work" dir={isArabic ? "rtl" : "ltr"} className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-2xl font-black bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent sm:text-3xl lg:text-4xl pb-2 ${isArabic ? "" : "tracking-tight"}`}>{content.sectionTitle}</h2>
          <svg viewBox="0 0 220 24" className="mx-auto mt-4 h-6 w-52 text-[#0ea5e9]" fill="none" aria-hidden="true">
            <path
              d="M8 15c40-8 78-9 114-4 28 4 55 7 90-2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-8 text-base text-slate-600 font-medium">{content.sectionSubtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {firstRow.map((step, index) => renderStepCard(step, index))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondRow.map((step, index) => renderStepCard(step, index + 2))}
        </div>
      </div>
    </section>
  );
}
