import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, MessageSquareText, SearchCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { OpportunityExplorer } from "@/components/opportunity-explorer";
import { careerPaths } from "@/lib/site-data";

export const metadata: Metadata = { title: "Career Opportunities", description: "Explore career fields and share your CV with SPC INTERNATIONAL for relevant international opportunities." };

export default async function OpportunitiesPage({ searchParams }: { searchParams: Promise<{ sector?: string }> }) {
  const params = await searchParams;
  const initialSector = careerPaths.some((path) => path.name === params.sector) ? params.sector : "All fields";
  return <main id="main-content"><PageHero title="Career possibilities" eyebrow="EXPLORE WHAT'S NEXT" description="Your skills have a story to tell. Discover the fields we work across and take your next step with confidence." image="/images/hero-healthcare-new.png" />
    <section className="opportunities-section section-space"><div className="site-container"><div className="opportunities-heading"><div><p className="eyebrow"><span /> FIND YOUR DIRECTION</p><h2 className="section-title">Where could your skills <em>take you?</em></h2></div><p>Explore the sectors and kinds of roles we may help candidates pursue. Search for a field that feels right, then introduce yourself.</p></div><div className="opportunity-notice"><span className="notice-star">✳</span><p><strong>A note on opportunities:</strong> The roles shown below are examples of career fields, not live vacancy listings. Openings vary with employer demand and candidate suitability. Share your CV to be considered when relevant opportunities arise.</p></div><OpportunityExplorer initialSector={initialSector || "All fields"} /></div></section>
    <section className="candidate-steps section-space"><div className="site-container"><div className="section-centered"><p className="eyebrow"><span /> YOUR FIRST STEPS</p><h2 className="section-title">Start with your <em>story.</em></h2><p>A simple way to put yourself in the conversation for future opportunities.</p></div><div className="candidate-steps-grid"><div><span className="step-icon"><SearchCheck size={26} /></span><h3>Explore your interests</h3><p>Browse the fields above and think about where your experience could make an impact.</p></div><div><span className="step-icon"><FileText size={26} /></span><h3>Share your CV</h3><p>Tell us about your skills and what you’d like to do next through our secure form.</p></div><div><span className="step-icon"><MessageSquareText size={26} /></span><h3>Stay connected</h3><p>If a suitable opportunity becomes available, our team may get in touch to discuss it with you.</p></div></div></div></section>
    <CtaBand eyebrow="READY TO BE SEEN?" title="The next chapter starts with a first step." description="Share your experience with us today. We’ll keep your profile in mind as relevant opportunities come along." primaryLabel="Submit your CV" primaryHref="/submit-cv" />
  </main>;
}
