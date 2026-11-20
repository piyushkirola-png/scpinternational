import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, FileText, Info } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SectorIcon } from "@/components/sector-icon";
import { careerPaths } from "@/lib/site-data";
import { careerDetails } from "@/lib/career-details";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return careerPaths.map((path) => ({ slug: path.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = careerPaths.find((item) => item.slug === slug);
  return { title: path ? `${path.name} Careers` : "Career Field", description: path ? `Learn about example roles in ${path.name.toLowerCase()} and share your CV with SPC INTERNATIONAL.` : "Explore career fields with SPC INTERNATIONAL." };
}

export default async function CareerFieldPage({ params }: Props) {
  const { slug } = await params;
  const path = careerPaths.find((item) => item.slug === slug);
  const detail = careerDetails[slug];
  if (!path || !detail) notFound();
  const cvHref = `/submit-cv?sector=${encodeURIComponent(path.name)}`;
  const related = careerPaths.filter((item) => item.slug !== slug).slice(0, 3);

  return <main id="main-content">
    <PageHero title={path.name} eyebrow="EXPLORE A CAREER FIELD" description={detail.intro} image={detail.image} />
    <section className="career-detail-intro section-space"><div className="site-container">
      <Link href="/opportunities" className="career-detail-back"><ArrowLeft size={16} /> All career fields</Link>
      <div className="career-detail-intro-grid"><div className="career-detail-copy"><p className="eyebrow"><span /> YOUR FIELD, YOUR FUTURE</p><h2 className="section-title">A closer look at <em>{path.name}.</em></h2><p className="section-lead">{detail.intro}</p><p>{detail.overview}</p><div className="career-detail-notice"><Info size={19} /><span>The positions below are examples of roles in this field, not currently advertised vacancies. Availability depends on employer needs and individual suitability.</span></div></div>
      <aside className="career-detail-aside"><span className="career-detail-aside-icon"><SectorIcon name={path.icon} size={30} /></span><p>WHAT HELPS YOU STAND OUT</p><h3>Bring your strengths to the conversation.</h3><ul>{detail.skills.map((skill) => <li key={skill}><Check size={16} />{skill}</li>)}</ul><Link href={cvHref} className="button button-orange">Share your CV <ArrowUpRight size={18} /></Link></aside></div>
    </div></section>
    <section className="career-role-section section-space"><div className="site-container"><div className="career-role-heading"><div><p className="eyebrow"><span /> EXAMPLE ROLES</p><h2 className="section-title">Explore the work behind <em>the title.</em></h2></div><p>Tap a role to see what it can involve. Responsibilities and requirements vary by employer and destination.</p></div><div className="career-role-grid">{detail.roles.map((role) => <details className="career-role-card" key={role.title}><summary><span className="career-role-icon"><FileText size={22} strokeWidth={1.7} /></span><span className="career-role-title">{role.title}<small>View role details</small></span><ChevronDown className="career-role-chevron" size={20} /></summary><div className="career-role-body"><p>{role.description}</p><Link href={cvHref}>Share your CV for this field <ArrowUpRight size={16} /></Link></div></details>)}</div></div></section>
    <section className="related-careers section-space"><div className="site-container"><div className="related-careers-heading"><div><p className="eyebrow"><span /> KEEP EXPLORING</p><h2 className="section-title">Other paths worth <em>exploring.</em></h2></div><Link href="/opportunities" className="text-link">View all fields <ArrowUpRight size={17} /></Link></div><div className="related-careers-grid">{related.map((item) => <Link key={item.slug} href={`/opportunities/${item.slug}`} className="related-career-card"><span><SectorIcon name={item.icon} size={23} /></span><strong>{item.name}</strong><ArrowUpRight size={18} /></Link>)}</div></div></section>
    <CtaBand eyebrow="LET'S HEAR YOUR STORY" title="Your experience could open a new door." description="Share your CV and tell us about the work you would like to do. We'll reach out if a relevant opportunity comes along." primaryLabel="Share your CV" primaryHref={cvHref} />
  </main>;
}
