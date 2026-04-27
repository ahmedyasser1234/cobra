import Link from "next/link";
import {
  Globe,
  Palette,
  Rocket,
  ShoppingCart,
  Store,
  Wrench,
  Megaphone,
  Video,
  type LucideIcon,
} from "lucide-react";

import type { LanguageContent } from "@/data/siteContent";
import type { Locale } from "@/types";

type ServicesProps = {
  locale: Locale;
  content: LanguageContent["services"];
};

type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const iconBySlug: Record<string, LucideIcon> = {
  "web-design-development": Globe,
  "ecommerce-solutions": ShoppingCart,
  "social-media-design": Palette,
  "video-media-production": Video,
  "digital-marketing": Rocket,
  "ad-campaigns": Megaphone,
};

export function Services({ locale, content }: ServicesProps) {
  const isArabic = locale === "ar";
  const cardCtaLabel = isArabic ? "عرض التفاصيل" : "View Details";

  const services: ServiceEntry[] = content.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    image: item.image,
  }));

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="scroll-mt-28 bg-white py-20 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-black uppercase tracking-[0.25em] text-[#0ea5e9] sm:text-lg">
            {content.eyebrow}
          </p>
          <h2 className={`mt-6 text-balance text-2xl font-black bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent sm:text-3xl lg:text-5xl pb-2 ${isArabic ? "" : "tracking-tight"}`}>
            {content.title}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600 font-medium">
            {content.description}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = iconBySlug[service.slug] ?? Globe;

            return (
              <article
                key={service.slug}
                className={`group relative flex h-full flex-col overflow-hidden border border-slate-100 bg-slate-50/50 p-0 transition-all duration-500 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] ${
                  isArabic ? "text-right" : "text-left"
                }`}
                style={{ borderRadius: "2rem" }}
              >
                {/* Browser Header UI */}
                <div className={`flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-100/30 transition-colors duration-500 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className={`flex gap-1.5 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="h-2 w-2 rounded-full bg-red-400/20 transition-all duration-500 group-hover:bg-red-400 group-hover:shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                    <div className="h-2 w-2 rounded-full bg-amber-400/20 transition-all duration-500 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400/20 transition-all duration-500 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </div>
                  <div className="text-[0.65rem] font-black uppercase tracking-widest text-slate-400 transition-colors duration-500 group-hover:text-[#0ea5e9]">
                     {isArabic ? "الخدمة رقم" : "SERVICE NO"} // {idx + 1}
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-8 z-10">
                  {/* Background Image Watermark */}
                  <div className={`absolute ${isArabic ? "-left-12" : "-right-12"} -bottom-12 opacity-[0.15] transition-all duration-700 group-hover:opacity-[0.35] group-hover:scale-110 pointer-events-none w-64 h-64`}>
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Icon className="h-12 w-12 text-[#0ea5e9] transition-all duration-500 group-hover:scale-110" aria-hidden="true" />
                      <div className="absolute -inset-4 bg-[#0ea5e9]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                  </div>

                  <h3 className={`mt-8 text-2xl font-black text-slate-900 transition-colors group-hover:text-[#0ea5e9] ${isArabic ? "" : "tracking-tight"}`}>
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600 font-medium flex-1">
                    {service.description}
                  </p>

                  <div className="mt-10">
                    <Link
                      href={`/services/${service.slug}?lang=${locale}`}
                      className="relative z-20 inline-flex w-full items-center justify-center rounded-2xl bg-white border border-slate-200 py-4 text-sm font-black text-slate-900 transition-all duration-300 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:shadow-[0_20px_40px_-12px_rgba(14,165,233,0.35)]"
                    >
                      {cardCtaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
