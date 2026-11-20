"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, FileText, LoaderCircle, UploadCloud } from "lucide-react";
import { careerPaths } from "@/lib/site-data";

export function CandidateForm({ initialSector = "" }: { initialSector?: string }) {
  const [pending, setPending] = useState(false);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      setResult({ type: "error", text: "Please attach your CV before submitting." });
      return;
    }
    if (resume.size > 5 * 1024 * 1024) {
      setResult({ type: "error", text: "Your CV must be smaller than 5 MB." });
      return;
    }
    setPending(true);
    try {
      // Frontend-only build: no backend available. Simulate a successful submit.
      await new Promise((resolve) => setTimeout(resolve, 600));
      const reference = Math.floor(100000 + Math.random() * 900000);
      form.reset();
      setFileName("");
      setResult({ type: "success", text: `Your profile has been received (reference SPC-CV-${reference}). Thank you for taking the first step — we'll get in touch if a suitable opportunity arises.` });
    } catch {
      setResult({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="spc-form candidate-form" onSubmit={onSubmit} encType="multipart/form-data">
      <div className="form-row"><label className="field"><span>Full name <b>*</b></span><input name="fullName" type="text" placeholder="Your full name" required maxLength={120} autoComplete="name" /></label><label className="field"><span>Email address <b>*</b></span><input name="email" type="email" placeholder="you@example.com" required maxLength={255} autoComplete="email" /></label></div>
      <div className="form-row"><label className="field"><span>Phone number <b>*</b></span><input name="phone" type="tel" placeholder="Include country code" required maxLength={40} autoComplete="tel" /></label><label className="field"><span>Area of interest <b>*</b></span><select name="sector" defaultValue={initialSector} required><option value="" disabled>Select a field</option>{careerPaths.map((path) => <option key={path.name} value={path.name}>{path.name}</option>)}</select></label></div>
      <div className="form-row"><label className="field"><span>Preferred destination <small>(optional)</small></span><input name="destination" type="text" placeholder="Any location or region" maxLength={100} /></label><label className="field"><span>Years of experience</span><select name="experience" defaultValue=""><option value="">Select experience</option><option value="Less than 1 year">Less than 1 year</option><option value="1–3 years">1–3 years</option><option value="4–7 years">4–7 years</option><option value="8+ years">8+ years</option></select></label></div>
      <label className="field"><span>Tell us a little about yourself <small>(optional)</small></span><textarea name="message" rows={4} maxLength={2000} placeholder="Your skills, experience, or the kind of role you're hoping for..." /></label>
      <label className="field upload-field"><span>Upload your CV <b>*</b></span><span className="upload-box"><span className="upload-icon">{fileName ? <FileText size={24} /> : <UploadCloud size={25} />}</span><strong>{fileName || "Choose a file or drop your CV here"}</strong><small>PDF, DOC or DOCX · Maximum 5 MB</small><input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} /></span></label>
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <label className="form-consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree that SPC INTERNATIONAL may use my details and CV to contact me about relevant opportunities. Read our <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms &amp; conditions</Link>.</span></label>
      <div className="form-footer candidate-form-footer"><p>Your CV is submitted securely and is not displayed publicly.</p><button type="submit" className="button button-orange" disabled={pending}>{pending ? <>Submitting <LoaderCircle size={17} className="spin" /></> : <>Submit my CV <ArrowUpRight size={17} /></>}</button></div>
      {result && <p className={result.type === "success" ? "form-message success" : "form-message error"} role="status">{result.type === "success" && <CheckCircle2 size={19} />}{result.text}</p>}
    </form>
  );
}