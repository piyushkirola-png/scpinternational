import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ title, eyebrow, description, image = "/images/hero-main.png" }: { title: string; eyebrow: string; description: string; image?: string }) {
  return (
    <section className="page-hero">
      {/* <Image src={image} alt="" fill sizes="100vw" className="page-hero-image" priority /> */}
      <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1920px" quality={90} className="page-hero-image" priority />
      <div className="page-hero-overlay" />
      <div className="site-container page-hero-content">
        <div className="page-hero-topline"><span /> {eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="breadcrumbs"><Link href="/">Home</Link><ArrowUpRight size={13} /><span>{title}</span></div>
      </div>
      <span className="page-hero-graphic" aria-hidden="true" />
    </section>
  );
}
