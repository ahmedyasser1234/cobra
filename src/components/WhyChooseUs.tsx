"use client";

import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

import { SectionHeading } from "./SectionHeading";

type WhyChooseUsProps = {
  locale: Locale;
  content: LanguageContent["why"];
};

export function WhyChooseUs({ locale, content }: WhyChooseUsProps) {
  const isArabic = locale === "ar";
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="why" dir={isArabic ? "rtl" : "ltr"} className="bg-sky-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
              align={isArabic ? "right" : "left"}
              tone="dark"
              isArabic={isArabic}
            />
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {content.reasons.map((reason, index) => {
              const isOpen = index === openIndex;

              return (
                <article
                  key={reason.title}
                  className={`overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/20 ${isOpen ? "border-[#0ea5e9]/30 bg-[#0ea5e9]/5" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 sm:px-8 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? "bg-[#0ea5e9] text-white shadow-md" : "bg-[#0ea5e9]/10 text-[#0ea5e9]"}`}>
                        <HelpCircle className="h-5 w-5" />
                      </span>
                      <h3 className={`text-[1.1rem] font-bold sm:text-[1.15rem] ${isArabic ? "" : "tracking-tight"} ${isOpen ? "text-[#0ea5e9]" : "text-slate-900"}`}>
                        {reason.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition duration-300 ${
                        isOpen ? "rotate-180 text-[#0ea5e9]" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 pb-6 pt-0 text-[1rem] leading-relaxed text-slate-600 font-medium sm:px-8 ${
                          isArabic ? "text-right" : ""
                        }`}
                      >
                        {reason.description}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
