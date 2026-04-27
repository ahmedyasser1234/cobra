"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";
import { services as servicesData } from "@/data/services";

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  content: LanguageContent["nav"];
};


export function Navbar({ locale, onLocaleChange, content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const isArabic = locale === "ar";
  const isServicePage = pathname?.startsWith("/services") ?? false;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServicePage]);

  useEffect(() => {
    if (isServicePage || typeof window === "undefined") {
      return;
    }

    const sections = content.links
      .map((link) => link.href.replace("#", ""))
      .filter(Boolean);

    const observedSections = sections
      .map((section) => document.getElementById(section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!observedSections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5],
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [content.links, isServicePage]);

  const languageLabel = isArabic ? "EN" : "AR";

  const navLinks = content.links.map((link) => {
    const href = isServicePage ? `/?lang=${locale}${link.href}` : link.href;
    const sectionId = link.href.replace("#", "");
    const isActive = !isServicePage && sectionId === activeSection;

    return { ...link, href, isActive, sectionId };
  });

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string,
  ) => {
    if (isServicePage || !href.startsWith("#")) {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    event.preventDefault();

    const navbarOffset = 128;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);
  };

  const homeHref = isServicePage ? `/?lang=${locale}#home` : "#home";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto w-full max-w-7xl rounded-[1.2rem] transition-all duration-500 ${
          isScrolled
            ? "bg-[#020617]/80 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl py-2 border border-white/10"
            : "bg-transparent py-4 border-none shadow-none"
        }`}
      >
        <div className="px-5 sm:px-8">
          <div className={`flex items-center justify-between gap-4 ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
            
            {/* Branding */}
            <a
              href={homeHref}
              className={`group flex items-center transition-transform duration-300 hover:scale-[1.02] ${isArabic ? "flex-row-reverse" : "flex-row"}`}
              aria-label="Cobra"
            >
              <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                <Image
                  src="/images/logos/cobra-logo-dark.png"
                  alt="Cobra"
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain mix-blend-screen"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              dir={isArabic ? "rtl" : "ltr"}
              className="hidden items-center gap-1 lg:flex"
            >
              {navLinks.map((link) => {
                const isServices = link.sectionId === "services";

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => isServices && setIsServicesOpen(true)}
                    onMouseLeave={() => isServices && setIsServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(event) =>
                        handleSectionClick(event, link.href, link.sectionId)
                      }
                      className={`relative flex items-center gap-1 px-4 py-2 text-[0.85rem] font-black transition-all duration-300 ${
                        link.isActive 
                          ? "bg-gradient-to-r from-[#00f5ff] to-[#008cff] bg-clip-text text-transparent" 
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isServices && (
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                      )}
                    </a>

                    {isServices && (
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-full w-64 pt-2 ${
                              isArabic ? "right-0" : "left-0"
                            }`}
                          >
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/95 p-2 shadow-2xl backdrop-blur-xl">
                              <div className="flex flex-col gap-1">
                                {servicesData.map((service) => (
                                  <a
                                    key={service.slug}
                                    href={`/services/${service.slug}?lang=${locale}`}
                                    className={`rounded-xl px-4 py-2.5 text-[0.8rem] font-bold text-white/70 transition-all hover:bg-white/10 hover:text-[#00f5ff] ${
                                      isArabic ? "text-right" : "text-left"
                                    }`}
                                  >
                                    {service[locale].title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
              <button
                type="button"
                onClick={() => onLocaleChange(locale === "en" ? "ar" : "en")}
                className="inline-flex h-9 w-12 cursor-pointer items-center justify-center text-[0.85rem] font-black text-[#00f5ff] transition-all hover:text-[#00f5ff]/80"
                aria-label="Change language"
              >
                {languageLabel}
              </button>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 lg:hidden"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
           initial={false}
           animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
           className="overflow-hidden lg:hidden"
        >
          <div className="border-t border-white/10 bg-[#020617]/95 px-6 py-5 backdrop-blur-3xl">
            <nav
              className={`flex flex-col gap-2 ${
                isArabic ? "items-end text-right" : "items-start text-left"
              }`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              {navLinks.map((link) => {
                const isServices = link.sectionId === "services";
                const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

                if (isServices) {
                  return (
                    <div key={link.label} className="w-full">
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex w-full items-center justify-between px-4 py-3 text-[1rem] font-black transition-all ${
                          link.isActive 
                            ? "bg-gradient-to-r from-[#00f5ff] to-[#008cff] bg-clip-text text-transparent" 
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50/50 rounded-xl"
                          >
                            <div className="flex flex-col py-2">
                              {servicesData.map((service) => (
                                <a
                                  key={service.slug}
                                  href={`/services/${service.slug}?lang=${locale}`}
                                  onClick={() => setIsOpen(false)}
                                  className={`px-8 py-2.5 text-[0.9rem] font-bold text-slate-500 hover:text-[#00f5ff] ${
                                    isArabic ? "text-right" : "text-left"
                                  }`}
                                >
                                  {service[locale].title}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => {
                      handleSectionClick(event, link.href, link.sectionId);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-[1rem] font-black transition-all ${
                      link.isActive 
                        ? "bg-gradient-to-r from-[#00f5ff] to-[#008cff] bg-clip-text text-transparent" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
