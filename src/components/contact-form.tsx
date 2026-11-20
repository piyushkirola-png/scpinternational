"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type Kind = "general" | "employer" | "candidate";

export function ContactForm({ initialKind = "general", compact = false }: { initialKind?: Kind; compact?: boolean }) {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setResult(null);
    const form = event.currentTarget;
    try {
      // Frontend-only build: no backend available. Simulate a successful submit.
      await new Promise((resolve) => setTimeout(resolve, 600));
      const reference = Math.floor(100000 + Math.random() * 900000);
      form.reset();
      setResult({ type: "success", text: `Thanks for reaching out. Your enquiry has been received (reference SPC-${reference}). We'll be in touch.` });
    } catch {
      setResult({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className={compact ? "spc-form compact" : "spc-form"} onSubmit={onSubmit}>
      <div className="form-row">
        <label className="field"><span>Your name <b>*</b></span><input name="name" type="text" placeholder="Your full name" required maxLength={120} autoComplete="name" /></label>
        <label className="field"><span>Email address <b>*</b></span><input name="email" type="email" placeholder="you@example.com" required maxLength={255} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label className="field"><span>Phone number</span><input name="phone" type="tel" placeholder="Your contact number" maxLength={40} autoComplete="tel" /></label>
        <label className="field"><span>I am enquiring as</span><select name="kind" defaultValue={initialKind}><option value="general">General enquiry</option><option value="employer">An employer</option><option value="candidate">A job seeker</option></select></label>
      </div>
      {!compact && <label className="field"><span>Company / organisation <small>(optional)</small></span><input name="organization" type="text" placeholder="Your organisation" maxLength={180} autoComplete="organization" /></label>}
      <label className="field"><span>How can we help? <b>*</b></span><textarea name="message" rows={compact ? 3 : 5} placeholder="Tell us a little about what you're looking for..." required minLength={10} maxLength={3000} /></label>
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div className="form-footer"><p>By sending this form, you agree to our <Link href="/terms">terms &amp; conditions</Link> and <Link href="/privacy">privacy policy</Link>.</p><button type="submit" className="button button-navy" disabled={pending}>{pending ? <>Sending <LoaderCircle size={17} className="spin" /></> : <>Send enquiry <ArrowUpRight size={17} /></>}</button></div>
      {result && <p className={result.type === "success" ? "form-message success" : "form-message error"} role="status">{result.type === "success" && <CheckCircle2 size={19} />}{result.text}</p>}
    </form>
  );
}