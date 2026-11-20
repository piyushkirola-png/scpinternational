import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms for using the SPC INTERNATIONAL website and sharing recruitment enquiries or CV details." };

export default function TermsPage() {
  return <main id="main-content">
    <PageHero title="Terms & conditions" eyebrow="GOOD TO KNOW" description="Clear information about using this website and taking part in a recruitment conversation with SPC INTERNATIONAL." image="/images/hero-business-new.png" />
    <section className="privacy-section section-space"><div className="site-container privacy-layout">
      <aside><p className="eyebrow"><span /> WEBSITE TERMS</p><h2>Clear expectations make better connections.</h2><p>These terms apply to use of the SPC INTERNATIONAL website. Please read them alongside our privacy policy before submitting information.</p><Link href="/privacy" className="text-link">Read our privacy policy <ArrowUpRight size={17} /></Link></aside>
      <div className="privacy-content">
        <div><h3>1. About this website</h3><p>This website shares general information about SPC INTERNATIONAL, an overseas recruitment and manpower consultancy based in New Delhi. The content is intended to help visitors understand our services and start a conversation. It is not professional, immigration or legal advice.</p></div>
        <div><h3>2. Career fields and opportunities</h3><p>Sector and role descriptions are illustrative examples, not live job advertisements or offers of employment. Openings can change and depend on employer requirements, your qualifications and the relevant selection process. Submitting your CV or contacting us does not guarantee an interview, placement, visa or any other outcome.</p></div>
        <div><h3>3. Information you provide</h3><p>Please submit information that is accurate and that you are authorised to share. You are responsible for ensuring your CV and contact details are up to date. Do not upload someone else’s CV without their permission or include banking details and other unnecessary sensitive information in a form.</p></div>
        <div><h3>4. Recruitment decisions</h3><p>Any potential opportunity is subject to the requirements and decisions of the relevant employer and, where applicable, the competent authorities. We may contact you when a suitable opportunity arises, but we cannot promise a response for every submission or a particular recruitment result.</p></div>
        <div><h3>5. Payments and suspicious requests</h3><p>This website does not take payments. Please do not send card details, passwords or banking information through our forms. If you receive a request that appears to misuse our name, contact us through the details shown on this website before taking action.</p></div>
        <div><h3>6. Website content and availability</h3><p>We aim to keep the information on this website useful and current, but content may change or be unavailable from time to time. The SPC INTERNATIONAL name, logo and original website materials should not be reproduced or presented as your own without permission.</p></div>
        <div><h3>7. External services</h3><p>WhatsApp and other external websites operate under their own terms and privacy practices. When you follow an external link, you leave this website and should review the terms of that service.</p></div>
        <div><h3>8. Updates and contact</h3><p>We may update these terms as the website and our services evolve. Continued use of the website after an update means the current version applies. If you have a question about these terms, please contact our team.</p></div>
        <div className="privacy-contact"><h3>Need to ask us something?</h3><p>We’re happy to explain how the website or recruitment enquiry process works.</p><Link href="/contact" className="text-link">Contact SPC INTERNATIONAL <ArrowUpRight size={18} /></Link></div>
      </div>
    </div></section>
  </main>;
}
