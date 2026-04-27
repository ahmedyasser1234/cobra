"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { Locale, ShowcaseProject } from "@/types";

type ProjectCardProps = {
  project: ShowcaseProject;
  index: number;
  locale: Locale;
};

export function ProjectCard({ project, index, locale }: ProjectCardProps) {
  const isArabic = locale === "ar";
  const actionLabel = isArabic ? "مشاهدة المشروع" : "View project";
  const localizedTitle = project.translations?.[locale]?.title ?? project.title;
  const localizedCategory = project.translations?.[locale]?.category ?? project.category;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="brand-card relative flex h-full min-h-[22rem] flex-col overflow-hidden border border-slate-200 bg-white backdrop-blur-xl transition-all duration-500 hover:border-[#00f5ff]/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]">
        
        {/* Dashboard Header UI */}
        <div className={`flex items-center justify-between border-b border-slate-100 px-4 py-2.5 transition-colors duration-500 ${isArabic ? "flex-row-reverse" : ""}`}>
          <div className={`flex gap-1.5 ${isArabic ? "flex-row-reverse" : ""}`}>
            <div className="h-2 w-2 rounded-full bg-red-400/20 transition-all duration-500 group-hover:bg-red-400 group-hover:shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
            <div className="h-2 w-2 rounded-full bg-amber-400/20 transition-all duration-500 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <div className="h-2 w-2 rounded-full bg-emerald-400/20 transition-all duration-500 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
          <div className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400 transition-colors duration-500 group-hover:text-[#0ea5e9]">
             {isArabic ? "معرض الأعمال" : "SHOWCASE"} // {localizedCategory || "Digital"}
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <Image
            src={encodeURI(project.image)}
            alt={localizedTitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="relative z-10 p-5 pt-0">
          <div className="mb-4">
             <h3 className={`text-xl font-black text-slate-900 sm:text-[1.25rem] ${isArabic ? "" : "tracking-tight"}`}>
               {localizedTitle}
             </h3>
             <div className="mt-1 h-0.5 w-10 bg-[#00f5ff] transition-all duration-500 group-hover:w-full" />
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#00f5ff]/30 bg-[#00f5ff]/5 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-[#00f5ff] hover:text-white hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
          >
            {actionLabel}
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-2 bottom-20 pointer-events-none opacity-10">
           <div className="flex flex-col gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-1">
                   {[...Array(6)].map((_, j) => (
                     <div key={j} className="h-0.5 w-0.5 rounded-full bg-[#00f5ff]" />
                   ))}
                </div>
              ))}
           </div>
        </div>
      </div>
    </motion.article>
  );
}
