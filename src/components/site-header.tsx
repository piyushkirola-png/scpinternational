"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="site-container topbar-inner">
          <div className="topbar-left"><span className="topbar-dot" /> Overseas recruitment &amp; manpower consultancy</div>
          <div className="topbar-right"><span><MapPin size={13} strokeWidth={1.9} /> New Delhi, India</span><Link href="/contact?type=employer">For employers <ArrowUpRight size={13} /></Link></div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link href="/" aria-label="SPC International home" className="brand-link" onClick={() => setMenuOpen(false)}>
            <Image src="/logo-spc.svg" alt="SPC International — Growth Is In Our DNA" width={292} height={64} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return <Link key={link.href} href={link.href} className={active ? "nav-link active" : "nav-link"} aria-current={active ? "page" : undefined}>{link.label}</Link>;
            })}
          </nav>
          <Link className="header-cta" href="/submit-cv"><span>Submit your CV</span><span className="header-cta-icon"><ArrowUpRight size={17} strokeWidth={2.1} /></span></Link>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav">
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        <nav id="mobile-nav" className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={pathname === link.href ? "mobile-nav-link active" : "mobile-nav-link"}>{link.label}<ArrowUpRight size={17} /></Link>)}
          <Link href="/submit-cv" onClick={() => setMenuOpen(false)} className="mobile-nav-cta">Submit your CV <ArrowUpRight size={17} /></Link>
        </nav>
      </header>
    </>
  );
}
