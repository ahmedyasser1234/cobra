import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import { DocumentLocale } from "@/components/DocumentLocale";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cobra Creative Solutions | كوبرا للحلول الإبداعية",
    template: "%s | Cobra Creative Solutions",
  },
  description:
    "Premium digital agency for app development, e-commerce, and modern UI/UX delivery. | وكالة رقمية رائدة لتطوير التطبيقات، التجارة الإلكترونية، وتصميم واجهات المستخدم الحديثة.",
  keywords: [
    "Cobra Creative Solutions",
    "كوبرا للحلول الإبداعية",
    "digital agency",
    "وكالة رقمية",
    "app development",
    "تطوير تطبيقات",
    "e-commerce",
    "تجارة إلكترونية",
    "UI UX",
    "تطوير مواقع",
    "Shopify",
    "hosting",
  ],
  openGraph: {
    title: "Cobra Creative Solutions | كوبرا للحلول الإبداعية",
    description:
      "A polished, responsive agency homepage built for premium digital experiences. | تجربة رقمية فاخرة ومواقع متجاوبة مبنية للعلامات التجارية الطموحة.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body suppressHydrationWarning className={`${cairo.variable} flex min-h-full flex-col bg-[#f8fcfa] text-slate-900`}>
        <DocumentLocale />
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
