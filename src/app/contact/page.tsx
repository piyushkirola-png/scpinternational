
import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MoveUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppMark } from "@/components/floating-whatsapp";
import { officeAddress, whatsappDisplay, whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SPC INTERNATIONAL at our New Delhi office about overseas recruitment, manpower needs or career opportunities.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;

  const initialKind =
    params.type === "employer" || params.type === "candidate"
      ? params.type
      : "general";

  return (
    <main id="main-content">
      <PageHero
        title="Let's connect"
        eyebrow="REACH OUT TO US"
        description="A question, a hiring need, or a new ambition — whatever brings you here, we’re ready to listen."
        image="/images/hero-business-new.png"
      />

      <section className="contact-page-section section-space">
        <div className="site-container contact-page-grid">
          <div className="contact-page-info">
            <p className="eyebrow">
              <span /> GET IN TOUCH
            </p>

            <h2 className="section-title">
              Tell us what’s on your <em>mind.</em>
            </h2>

            <p>
              We believe good conversations lead to great possibilities. Send
              us a note and let’s take it from there.
            </p>

            <div className="contact-info-list">
              {/* Office Address */}
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={23} strokeWidth={1.6} />
                </span>

                <div>
                  <h3>Visit our office</h3>
                  <p>
                    SPC INTERNATIONAL
                    <br />
                    {officeAddress}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <WhatsAppMark size={22} />
                </span>

                <div>
                  <h3>Connect on WhatsApp</h3>
                  <p>
                    Prefer to start with a quick message? Chat with us directly
                    at {whatsappDisplay}.
                  </p>

                  <a
                    href={whatsappLink(
                      "Hello SPC International, I would like to get in touch."
                    )}
                  >
                    Chat on WhatsApp <MoveUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Mail size={22} strokeWidth={1.6} />
                </span>

                <div>
                  <h3>Email us</h3>
                  <p>
                    Have an enquiry or need more information? Write to us at
                    info@scpinternational.online.
                  </p>

                  <a href="mailto:info@scpinternational.online">
                    info@scpinternational.online <MoveUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-callout">
              <span>✳</span>
              <p>
                For employers, candidates and everyone curious about what
                comes next.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="contact-page-form">
            <div className="contact-form-heading">
              <span className="small-orange-line" />
              <p>SEND AN ENQUIRY</p>
              <h3>We’d love to hear from you.</h3>
              <span>
                Fill in the form below and our team will follow up.
              </span>
            </div>

            <ContactForm initialKind={initialKind} />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="site-container location-inner">
          <div className="location-copy">
            <p className="eyebrow eyebrow-light">
              <span /> FIND US IN NEW DELHI
            </p>

            <h2>
              Rooted here.
              <br />
              <em>Looking everywhere.</em>
            </h2>

            <p>
              Our office is in Bharat Nagar, New Friends Colony. Questions
              about careers or hiring? We are just a message away.
            </p>

            <a
              className="button button-orange"
              href={whatsappLink(
                "Hello SPC International, I have a question for your team."
              )}
            >
              Chat with our team <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="location-art" aria-hidden="true">
            <span className="location-ring ring-one" />
            <span className="location-ring ring-two" />
            <span className="location-ring ring-three" />

            <span className="location-pin">
              <MapPin size={34} fill="currentColor" />
            </span>

            <span className="location-art-label">
              NEW DELHI <span>28.6° N / 77.2° E</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
