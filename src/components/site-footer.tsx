import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { navLinks, officeAddress, whatsappDisplay, whatsappLink } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-top">
        <div><p className="eyebrow eyebrow-light"><span /> LET&apos;S MOVE FORWARD</p><h2>Good things start with<br /><em>a conversation.</em></h2></div>
        <Link href="/contact" className="button button-orange">Get in touch <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-rule" />
      <div className="site-container footer-main">
        <div className="footer-brand">
          <Link href="/" aria-label="SPC International home"><Image src="/logo-spc-light.svg" alt="SPC International" width={305} height={67} /></Link>
          <p>Connecting people, purpose and possibility through a more personal approach to overseas recruitment.</p>
          <span className="footer-small-label">Based in New Delhi. Thinking beyond borders.</span>
        </div>
        <div className="footer-column"><h3>Explore</h3><ul>{navLinks.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}<li><Link href="/submit-cv">Submit your CV</Link></li></ul></div>
        <div className="footer-column"><h3>What we do</h3><ul><li><Link href="/services#manpower">Manpower solutions</Link></li><li><Link href="/services#recruitment">Recruitment &amp; selection</Link></li><li><Link href="/services#guidance">Career guidance</Link></li><li><Link href="/opportunities">Career paths</Link></li></ul></div>
        <div className="footer-column footer-address"><h3>Visit our office</h3><div className="footer-address-body"><MapPin size={18} strokeWidth={1.8} /><p>SPC INTERNATIONAL<br />{officeAddress}</p></div><a href={whatsappLink("Hello SPC International, I would like to contact your New Delhi office.")} className="footer-contact-link">WhatsApp {whatsappDisplay} <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="site-container footer-bottom"><p>© {new Date().getFullYear()} SPC INTERNATIONAL. All rights reserved.</p><div><Link href="/terms">Terms &amp; conditions</Link><Link href="/privacy">Privacy policy</Link><Link href="/contact">Contact us <ArrowRight size={14} /></Link></div></div>
    </footer>
  );
}
