import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, FileCheck2, LockKeyhole, MessageCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CandidateForm } from "@/components/candidate-form";
import { careerPaths } from "@/lib/site-data";

export const metadata: Metadata = { title: "Submit Your CV", description: "Introduce yourself to SPC INTERNATIONAL. Securely submit your CV for relevant overseas career opportunities." };

export default async function SubmitCVPage({ searchParams }: { searchParams: Promise<{ sector?: string }> }) {
  const params = await searchParams;
  const initialSector = careerPaths.some((path) => path.name === params.sector) ? params.sector : "";
  return <main id="main-content"><PageHero title="Submit your CV" eyebrow="YOUR JOURNEY STARTS HERE" description="Tell us who you are, what you do and where you hope to go. We’d love to get to know your story." image="/images/service-journey.png" />
    <section className="cv-section section-space"><div className="site-container cv-grid"><aside className="cv-aside"><p className="eyebrow"><span /> A STEP TOWARD WHAT&apos;S NEXT</p><h2 className="section-title">Your experience deserves to be <em>seen.</em></h2><p>Whether you’re ready for a new direction or simply exploring what might be possible, sharing your CV is a great place to start.</p><div className="cv-aside-list"><div><span><FileCheck2 size={21} /></span><div><h3>Tell us your story</h3><p>Share your background, skills and areas of interest.</p></div></div><div><span><LockKeyhole size={21} /></span><div><h3>Your details stay private</h3><p>Your CV is submitted securely and never posted publicly.</p></div></div><div><span><MessageCircle size={21} /></span><div><h3>We’ll be in touch when it fits</h3><p>If a suitable opportunity arises, we may reach out to start a conversation.</p></div></div></div><div className="cv-aside-note"><Sparkles size={23} /><p>No promises of placement — just a thoughtful first step towards a potential opportunity.</p></div></aside><div className="cv-form-panel"><div className="cv-form-title"><span className="small-orange-line" /><p>INTRODUCE YOURSELF</p><h2>Let’s get to know you.</h2><span>Fields marked * are required.</span></div><CandidateForm initialSector={initialSector || ""} /></div></div></section>
    <section className="cv-bottom-note"><div className="site-container"><span>Have a question before you apply?</span><Link href="/contact">Talk to our team <ArrowUpRight size={17} /></Link></div></section>
  </main>;
}
