"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types";
import type { LanguageContent } from "@/data/siteContent";

type FooterProps = {
  locale: Locale;
  content: LanguageContent["footer"];
};

export function Footer({ locale, content }: FooterProps) {
  const isArabic = locale === "ar";
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services") ?? false;

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) {
      return href;
    }

    return isServicePage ? `/?lang=${locale}${href}` : href;
  };

  const quickLinks = isArabic
    ? [
        { label: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", href: resolveHref("#home") },
        { label: "\u0645\u0646 \u0646\u062d\u0646", href: resolveHref("#about") },
        { label: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a", href: resolveHref("#services") },
        { label: "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", href: resolveHref("#projects") },
        { label: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629", href: resolveHref("#why") },
        { label: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627", href: "https://wa.me/971523416509", external: true },
      ]
    : [
        { label: "Home", href: resolveHref("#home") },
        { label: "About", href: resolveHref("#about") },
        { label: "Services", href: resolveHref("#services") },
        { label: "Projects", href: resolveHref("#projects") },
        { label: "FAQ", href: resolveHref("#why") },
        { label: "Contact", href: "https://wa.me/971523416509", external: true },
      ];

  const serviceLinks = isArabic
    ? [
        { label: "تطوير المواقع", href: `/services/web-design-development?lang=${locale}` },
        { label: "حلول التجارة الإلكترونية", href: `/services/ecommerce-solutions?lang=${locale}` },
        { label: "تصميم السوشيال ميديا", href: `/services/social-media-design?lang=${locale}` },
        { label: "إنتاج الفيديو والوسائط", href: `/services/video-media-production?lang=${locale}` },
        { label: "التسويق الرقمي", href: `/services/digital-marketing?lang=${locale}` },
        { label: "الحملات الإعلانية", href: `/services/ad-campaigns?lang=${locale}` },
        { label: "تصميم UI/UX", href: `/services/ui-ux-design?lang=${locale}` },
        { label: "تطوير Shopify", href: `/services/shopify-development?lang=${locale}` },
        { label: "الصيانة والدعم الفني", href: `/services/maintenance-support?lang=${locale}` },
      ]
    : [
        { label: "Website Development", href: `/services/web-design-development?lang=${locale}` },
        { label: "E-commerce Solutions", href: `/services/ecommerce-solutions?lang=${locale}` },
        { label: "Social Media Design", href: `/services/social-media-design?lang=${locale}` },
        { label: "Video & Media Production", href: `/services/video-media-production?lang=${locale}` },
        { label: "Digital Marketing", href: `/services/digital-marketing?lang=${locale}` },
        { label: "Ad Campaigns", href: `/services/ad-campaigns?lang=${locale}` },
        { label: "UI/UX Design", href: `/services/ui-ux-design?lang=${locale}` },
        { label: "Shopify Development", href: `/services/shopify-development?lang=${locale}` },
        { label: "Maintenance & Support", href: `/services/maintenance-support?lang=${locale}` },
      ];

  const contactLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/971523416509",
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: isArabic ? "\u0627\u0644\u0628\u0631\u064a\u062f" : "Email",
      href: "mailto:ert2815@gmail.com",
      icon: FaEnvelope,
      external: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/cobra.solutions",
      icon: FaFacebookF,
      external: true,
    },
    {
      label: isArabic ? "\u0627\u0644\u0647\u0627\u062a\u0641" : "Phone",
      href: "tel:+971523416509",
      icon: FaPhone,
      external: true,
    },
  ] as const;

  const footerLinkFxClass =
    "brand-link inline-flex py-0.5 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#00f5ff]";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate border-t border-slate-100 bg-white text-slate-950"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f5ff]/40 to-transparent shadow-[0_-5px_20px_rgba(0,245,255,0.2)]" />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl sm:p-10 lg:p-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <section className="space-y-4">
              <Link
                href={resolveHref("#home")}
                className="inline-flex items-center text-slate-950 transition hover:opacity-90"
                aria-label={content.brandName}
              >
                <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                  <Image
                    src="/images/logos/cobra-logo-light.png"
                    alt="Cobra"
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </Link>

              <p className="text-[0.7rem] font-black uppercase tracking-[0.3em] text-[#00f5ff] drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">
                {content.brandTagline}
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-[#94a3b8]">
                {content.description}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-widest text-slate-950 uppercase">{content.quickLinksTitle}</h3>
              <ul className="mt-6 space-y-3.5 text-sm text-[#94a3b8] [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerLinkFxClass}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={footerLinkFxClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-widest text-slate-950 uppercase">{content.servicesTitle}</h3>
              <ul className="mt-6 space-y-3.5 text-sm text-[#94a3b8] [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className={footerLinkFxClass}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-extrabold tracking-widest text-slate-950 uppercase">{content.contactTitle}</h3>
              <p className="mt-6 text-sm leading-relaxed text-[#94a3b8]">{content.contactText}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {contactLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external && href.startsWith("http") ? "_blank" : undefined}
                    rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    title={label}
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-[#00f5ff]/40 hover:bg-[#00f5ff]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
                  >
                    <Icon className="h-5 w-5 text-[#00f5ff] transition-all duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-[#94a3b8] sm:flex-row sm:items-center sm:text-sm">
            <p className="font-medium tracking-wide">{content.copyright}</p>
            <div className="flex items-center gap-4 [&:has(a:hover)_a:not(:hover)]:opacity-45 [&:has(a:hover)_a:not(:hover)]:blur-[1.5px] [&:has(a:hover)_a]:transition-all [&:has(a:hover)_a]:duration-300">
              <Link href={resolveHref("#why")} className={footerLinkFxClass}>
                {isArabic ? "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629" : "FAQ"}
              </Link>
              <Link href={resolveHref("#about")} className={footerLinkFxClass}>
                {isArabic ? "\u0645\u0646 \u0646\u062d\u0646" : "About"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
