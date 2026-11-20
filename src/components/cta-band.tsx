import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBand({ eyebrow = "THE NEXT STEP STARTS HERE", title, description, primaryLabel = "Get in touch", primaryHref = "/contact" }: { eyebrow?: string; title: string; description: string; primaryLabel?: string; primaryHref?: string }) {
  return <section className="cta-band"><div className="site-container cta-band-inner"><div><p className="eyebrow eyebrow-light"><span /> {eyebrow}</p><h2>{title}</h2><p>{description}</p></div><Link href={primaryHref} className="button button-orange">{primaryLabel} <ArrowUpRight size={18} /></Link></div><div className="cta-band-orbit" aria-hidden="true" /></section>;
}
