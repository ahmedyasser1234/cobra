"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

import type { Locale, ServiceDetail } from "@/types";
import { contentByLocale } from "@/data/siteContent";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import HeroParticles from "./HeroParticles";

type ServiceDetailPageProps = {
  service: ServiceDetail;
  locale: Locale;
};

export function ServiceDetailPage({ service, locale }: ServiceDetailPageProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openFaq, setOpenFaq] = useState(0);
  const isArabic = locale === "ar";
  const siteContent = contentByLocale[locale];

  const updateLocale = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("lang", nextLocale);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const emailHref = `mailto:ert2815@gmail.com?subject=${encodeURIComponent(
    isArabic ? `${service.title} - طلب مشروع` : `${service.title} - Project inquiry`,
  )}`;
  const whatsappHref = `https://wa.me/971523416509?text=${encodeURIComponent(
    isArabic
      ? `مرحبًا Cobra Creative Solutions، أريد مناقشة ${service.title}.`
      : `Hi Cobra Creative Solutions, I would like to discuss ${service.title}.`,
  )}`;
  const backToServicesHref = `/?lang=${locale}#services`;

  return (
    <main className="bg-white text-slate-950" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar locale={locale} onLocaleChange={updateLocale} content={siteContent.nav} />

      <section className="relative min-h-[85svh] overflow-hidden bg-[#020617] pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-40 flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage || "/images/hero/services-combined.png"}
            alt=""
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/40 to-[#020617]" />
        </div>
        <HeroParticles />

        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#00f5ff]/10 blur-[140px] animate-pulse" />
          <div className="absolute bottom-[0%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col justify-center gap-12 px-4 sm:px-6 lg:px-8 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.6em] text-[#00f5ff] drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">
              {service.category}
            </p>
            <h1 className={`mt-1 text-4xl font-black sm:text-5xl lg:text-7xl leading-[1.4] bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent py-4 ${isArabic ? "" : "tracking-tight"}`}>
              {service.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg font-medium">
              {service.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href={backToServicesHref}
                className={`group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#00f5ff] to-[#008cff] px-8 py-4 text-base font-black text-white shadow-[0_10px_30px_rgba(0,245,255,0.3)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_15px_40px_rgba(0,245,255,0.4)] ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <ArrowLeft className={`h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 ${isArabic ? "rotate-180 group-hover:translate-x-1" : ""}`} />
                {isArabic ? "العودة إلى الخدمات" : "Back to Services"}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:block z-20"
        >
          <div className="h-9 w-6 rounded-full border-2 border-slate-200 flex justify-center p-1 backdrop-blur-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
          </div>
        </motion.div>
      </section>

      <section className="relative bg-white py-20 sm:py-24 border-t border-slate-100">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/30 hover:shadow-lg ${isArabic ? "text-right" : ""}`}
          >
            {/* Angled Background Image */}
            <div 
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 w-full"
              style={{
                clipPath: isArabic 
                  ? "polygon(0 0, 100% 100%, 0 100%)" 
                  : "polygon(100% 0, 100% 100%, 0 100%)"
              }}
            >
              <Image
                src={service.heroImage || "/images/hero/services-combined.png"}
                alt=""
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${isArabic ? "from-[#0ea5e9]/20 to-transparent" : "from-transparent to-[#0ea5e9]/20"}`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${isArabic ? "from-transparent via-white/50 to-white/95" : "from-white/95 via-white/50 to-transparent"}`} />
            </div>

            <div className={`relative z-10 flex flex-col gap-4 w-full sm:w-[70%] lg:w-[65%]`}>
               <span className="text-sm font-black uppercase tracking-[0.25em] text-[#0ea5e9]">{isArabic ? "نظرة عامة" : "Overview"}</span>
               <h2 className={`text-3xl font-black leading-tight bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent ${isArabic ? "" : "tracking-tight"}`}>
                 {isArabic ? "ما الذي نصنعه؟" : "What this service is designed to do"}
               </h2>
              <p className="text-lg leading-relaxed text-slate-700 font-medium">
                {service.overview}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-[2.5rem] border border-slate-100 bg-slate-50/30 p-10 shadow-sm ${isArabic ? "text-right" : ""}`}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0ea5e9]">{isArabic ? "لمن هذه الخدمة" : "Who it is for"}</span>
            <div className="mt-8 space-y-4">
              {service.audience.map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 transition-all duration-300 hover:border-[#0ea5e9]/20 hover:bg-slate-50 ${isArabic ? "text-right" : ""}`}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[1.05rem] font-bold text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-sky-50 py-20 sm:py-24 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto max-w-3xl space-y-6 ${isArabic ? "text-right" : "text-center"}`}>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#0ea5e9]">
              {isArabic ? "محتويات الخدمة" : "What is included"}
            </p>
            <h2 className={`text-3xl font-black sm:text-5xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent ${isArabic ? "" : "tracking-tight"}`}>
              {isArabic ? "تغطية شاملة لكل التفاصيل" : "Every essential, covered with precision"}
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">
            {service.includes.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="group rounded-[2rem] border border-slate-100 bg-slate-50/50 px-6 py-8 text-[1rem] font-bold text-slate-900 text-center shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/20 hover:bg-white hover:shadow-md flex flex-col items-center gap-6"
              >
                <div className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Image
                    src={service.includeIcons?.[index] || `/images/services/service${(index % 6) + 1}.svg`}
                    alt=""
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm sm:text-base font-black uppercase tracking-[0.4em] text-[#0ea5e9]">
              {isArabic ? "رحلة العمل معنا" : "Our process"}
            </p>
            <h2 className="text-2xl font-black sm:text-4xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent">
              {isArabic ? "خطوات واضحة، نتائج استثنائية" : "A streamlined path to perfection"}
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {service.process.map((step, index) => {
              const bgs = service.processImages || [
                "/images/hero/hero-marketing-seo.png",
                "/images/hero/panel-creative.png",
                "/images/hero/panel-code.png",
                "/images/hero/hero-fusion.png",
              ];
              return (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 py-14 shadow-sm transition-all duration-500 hover:border-[#0ea5e9]/40 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] min-h-[300px] flex flex-col justify-center"
                >
                  {/* Background Image with sophisticated overlay */}
                  <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
                    <Image
                      src={bgs[index % bgs.length]}
                      alt=""
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 transition-colors duration-500 group-hover:from-white/90 group-hover:via-white/70 group-hover:to-white/20" />
                  </div>
                  
                  {/* Glowing background accent on hover */}
                  <div className="absolute -inset-1 z-0 bg-gradient-to-br from-[#0ea5e9]/0 via-[#00f5ff]/0 to-[#8b5cf6]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#0ea5e9]/10 group-hover:via-[#00f5ff]/5 group-hover:to-[#8b5cf6]/10 group-hover:opacity-100" />

                  {/* Content Container with subtle glassmorphism */}
                  <div className="relative z-10 backdrop-blur-[2px] rounded-3xl p-4 transition-all duration-500 group-hover:backdrop-blur-none group-hover:bg-white/5">
                    <div className="absolute -top-4 -right-2 text-6xl font-black text-slate-900/[0.03] group-hover:text-[#0ea5e9]/10 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
                      0{index + 1}
                    </div>
                    
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#008cff] text-xl font-black text-white shadow-[0_8px_20px_rgba(14,165,233,0.4)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      {index + 1}
                    </div>
                    
                    <h3 className="mt-8 text-2xl font-black text-slate-900 group-hover:text-[#0ea5e9] transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="mt-4 text-[1.05rem] leading-relaxed text-slate-700 font-bold group-hover:text-slate-900 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    {/* Animated bottom line */}
                    <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#00f5ff] transition-all duration-500 group-hover:w-16" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-sky-50 py-20 sm:py-24 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm sm:text-base font-black uppercase tracking-[0.4em] text-[#0ea5e9]">
              {isArabic ? "لماذا كوبرا؟" : "Why it matters"}
            </p>
            <h2 className="text-2xl font-black sm:text-4xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent">
              {isArabic ? "قيمة حقيقية لأعمالك" : "Real value for your digital growth"}
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => {
              const bgs = service.benefitImages || [
                "/images/hero/hero-ads.png",
                "/images/hero/hero-ecommerce.png",
                "/images/hero/hero-social-media.png",
                "/images/hero/hero-web-dev.png",
              ];
              return (
                <motion.div
                  key={benefit}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white px-8 py-16 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0ea5e9]/20 min-h-[220px] flex flex-col justify-center"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 opacity-80 transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={bgs[index % bgs.length]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/30 transition-colors duration-300 group-hover:bg-white/20" />
                  </div>

                  <div className="relative z-10 text-[1.1rem] font-bold text-slate-900 text-center drop-shadow-sm">
                    {benefit}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm sm:text-base font-black uppercase tracking-[0.4em] text-[#0ea5e9]">FAQ</p>
            <h2 className="text-2xl font-black sm:text-4xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent">
              {isArabic ? "إجابات لاستفساراتك" : "Clear answers to your questions"}
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-5">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className={`group w-full rounded-[2.2rem] border border-slate-100 bg-slate-50/30 p-7 shadow-sm transition-all duration-300 hover:border-[#0ea5e9]/20 hover:bg-white ${isArabic ? "text-right" : "text-left"}`}
                >
                  <div className={`flex items-center justify-between gap-6`}>
                    <span className="text-[1rem] font-bold text-slate-900">{faq.question}</span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#0ea5e9] text-white" : ""}`}>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[0.95rem] leading-relaxed text-slate-600 font-medium">{faq.answer}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-sm sm:p-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3.5rem]">
              <div className="absolute inset-0 z-0 opacity-90 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={service.ctaImage || "/images/hero/custom-hero-bg.png"}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div 
                className="absolute inset-0 z-[1] transition-opacity duration-500" 
                style={{ 
                  background: isArabic 
                    ? 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 20%, rgba(255, 255, 255, 0.8) 40%, transparent 70%)' 
                    : 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 20%, rgba(255, 255, 255, 0.8) 40%, transparent 70%)' 
                }} 
              />
            </div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="text-sm sm:text-base font-black uppercase tracking-[0.5em] text-[#0ea5e9]">
                  {isArabic ? "هل أنت مستعد؟" : "Let's Get Started"}
                </p>
                <h2 className="mt-6 text-2xl font-black sm:text-4xl leading-[1.2] bg-gradient-to-br from-[#0369a1] via-[#075985] to-[#0369a1] bg-clip-text text-transparent pb-2">
                  {service.ctaTitle}
                </h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-800 font-bold">
                  {service.ctaDescription}
                </p>
              </div>

              <div className={`flex flex-wrap gap-4 ${isArabic ? "lg:justify-start" : "lg:justify-end"}`}>
                <Link
                  href={emailHref}
                  className="inline-flex h-14 items-center gap-3 rounded-2xl bg-[#0ea5e9] px-8 text-base font-black text-white shadow-[0_10px_30px_rgba(14,165,233,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)]"
                >
                  {isArabic ? "ابدأ الآن" : "Start Now"}
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 text-base font-black text-slate-900 transition-all duration-300 hover:bg-slate-50"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isArabic ? "واتساب" : "WhatsApp"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} content={siteContent.footer} />
    </main>
  );
}
