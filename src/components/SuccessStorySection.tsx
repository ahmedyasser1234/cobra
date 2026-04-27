"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, XCircle, TrendingUp, Users, Target, Rocket, Palette } from "lucide-react";

import type { Locale } from "@/types";

export function SuccessStorySection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";

  const stats = [
    { label: isArabic ? "فريق احترافي" : "Expert Team", value: "15+", icon: Users },
    { label: isArabic ? "استراتيجية مخصصة" : "Custom Strategy", value: "100%", icon: Target },
    { label: isArabic ? "جودة تضمن النتائج" : "Quality Results", value: "98%", icon: TrendingUp },
    { label: isArabic ? "دعم مستمر" : "24/7 Support", value: "24/7", icon: Rocket },
  ];

  return (
    <section className="relative overflow-hidden bg-sky-50 pt-10 pb-24 sm:pt-14 sm:pb-32" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Right Side: Content (First in Grid for RTL/LTR flow) */}
          <div className={`${isArabic ? "lg:text-right" : "lg:text-left"} text-center order-2 lg:order-1`}>
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-0 py-2 text-sm font-black uppercase tracking-[0.2em] text-[#0ea5e9]"
             >
               <div className="h-2 w-2 rounded-full bg-[#0ea5e9]" />
               {isArabic ? "شريكك نحو النجاح" : "Your Partner to Success"}
             </motion.div>
             
             <h2 className="mt-8 text-3xl font-black leading-[1.15] sm:text-4xl lg:text-5xl bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent pb-2">
               {isArabic ? "من فكرة بسيطة لبراند يسيطر على" : "From a simple idea to a brand that"} 
               <span className="relative block sm:inline-block">
                 <span className="relative z-10"> {isArabic ? "السوق!" : "Dominates!"}</span>
                 <svg viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full h-3 text-[#0ea5e9]/20" preserveAspectRatio="none">
                   <path d="M0 10 Q 50 0, 100 10 T 200 10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                 </svg>
               </span>
             </h2>

             <p className="mt-10 text-lg font-medium leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
               {isArabic 
                 ? "نحول أفكارك إلى حضور رقمي احترافي يجذب العملاء ويحقق المبيعات. لا نكتفي ببناء موقع، بل نصنع تجربة رقمية لا تُنسى تعزز من مكانة علامتك التجارية."
                 : "We transform your ideas into a professional digital presence that attracts customers and drives sales. We don't just build a website; we craft an unforgettable digital experience."}
             </p>
             
             {/* Stats Grid */}
             <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
               {stats.map((stat, i) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 * i }}
                   className="group flex flex-col items-center gap-3 rounded-3xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-xl lg:items-start"
                 >
                   <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] transition-all duration-300 group-hover:bg-[#0ea5e9] group-hover:text-white">
                    <stat.icon className="h-5 w-5" />
                   </div>
                   <div className={`${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                     <span className="block text-2xl font-black text-slate-900 leading-none">{stat.value}</span>
                     <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">{stat.label}</span>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>

          {/* Left Side: Before/After Visual (Second in Grid for RTL/LTR flow) */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 flex flex-col gap-8 sm:flex-row lg:flex-col xl:flex-row items-center justify-center">
              
              {/* Before Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 p-6 shadow-2xl grayscale-[0.2] opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-[0.65rem] font-bold text-red-400 uppercase tracking-wider backdrop-blur-sm">
                  <XCircle className="h-3.5 w-3.5" />
                  {isArabic ? "قبل كوبرا" : "Before Cobra"}
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-black text-white">{isArabic ? "فكرة تائهة" : "Lost Idea"}</h4>
                  <div className="mt-4 space-y-3">
                    {[
                      { text: isArabic ? "هوية مشتتة وغير واضحة" : "Scattered & Unclear Identity" },
                      { text: isArabic ? "تجربة مستخدم معقدة" : "Complex User Experience" },
                      { text: isArabic ? "ضعف ملحوظ في المبيعات" : "Low Conversion & Sales" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3 text-slate-400"
                      >
                        <XCircle className="h-4 w-4 text-red-500/70 shrink-0" />
                        <span className="text-sm font-bold">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="relative mt-8 h-44 w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src="/images/success-story/before.png" alt="Before" fill className="object-cover opacity-60" />
                </div>
              </motion.div>


              {/* After Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative w-full max-w-[340px] overflow-hidden rounded-[3rem] border-2 border-[#0ea5e9]/30 bg-white p-7 shadow-2xl shadow-[#0ea5e9]/20 ring-4 ring-[#0ea5e9]/5"
              >
                <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-emerald-100 px-4 py-1.5 text-[0.7rem] font-black text-emerald-600 uppercase tracking-widest shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {isArabic ? "مع كوبرا" : "With Cobra"}
                </div>
                <div className="mt-12">
                  <h4 className={`text-2xl font-black text-[#0ea5e9] ${isArabic ? "" : "tracking-tight"}`}>{isArabic ? "براند مسيطر" : "Dominant Brand"}</h4>
                  <ul className="mt-6 space-y-4">
                    {[
                      { text: isArabic ? "هوية بصرية فاخرة" : "Luxury Visual Identity", icon: Palette },
                      { text: isArabic ? "تجربة مستخدم ذكية" : "Smart UX Experience", icon: Target },
                      { text: isArabic ? "نمو متسارع" : "Accelerated Growth", icon: TrendingUp }
                    ].map((item, idx) => (
                      <motion.li 
                        key={item.text} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-3 text-slate-800"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                        <span className="text-sm font-black">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-10 h-56 w-full overflow-hidden rounded-2xl border-2 border-[#0ea5e9]/10 shadow-xl">
                  <Image src="/images/success-story/after.png" alt="After" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>

            </div>
            
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#0ea5e9]/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
          </div>

        </div>
      </div>
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] h-64 w-64 rounded-full bg-[#0ea5e9]/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] h-64 w-64 rounded-full bg-[#06b6d4]/5 blur-[100px]" />
      </div>
    </section>
  );
}

