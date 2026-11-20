import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope/index.css";
import "@fontsource-variable/dm-sans/index.css";
import "./globals.css";
import "./updates.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: { default: "SPC INTERNATIONAL | Overseas Recruitment & Manpower Consultancy", template: "%s | SPC INTERNATIONAL" },
  description: "SPC INTERNATIONAL connects people and businesses through thoughtful overseas recruitment and manpower consultancy from New Delhi, India.",
  keywords: ["SPC International", "overseas recruitment", "manpower consultancy", "international careers", "New Delhi recruitment"],
  openGraph: { title: "SPC INTERNATIONAL", description: "People first. Possibilities everywhere.", type: "website" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
