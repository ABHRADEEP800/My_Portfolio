import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import SectionHeader from "./SectionHeader";
import { sendContactMessage } from "../services/contact.service";

const LINKS = [
  { label: "Email",    value: "hello@abhradeep.com",       href: "mailto:hello@abhradeep.com",          icon: "✉️" },
  { label: "GitHub",   value: "github.com/ABHRADEEP800",   href: "https://github.com/ABHRADEEP800",     icon: "🔗" },
  { label: "LinkedIn", value: "linkedin.com/in/ABHRADEEP800", href: "https://linkedin.com/in/ABHRADEEP800", icon: "💼" },
];

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) { toast.error("reCAPTCHA not ready, please wait."); return; }
    setLoading(true);
    try {
      const token = await executeRecaptcha("contact_form");
      await sendContactMessage({ ...form, recaptchaToken: token });
      toast.success("Message sent! I'll reply soon 🚀");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  }, [executeRecaptcha, form]);

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="Get In Touch" title="Let's" highlight="Connect"
          subtitle="Got a project in mind or just want to say hi? I'd love to hear from you." />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* Left: info */}
          <div className="flex flex-col gap-6 reveal">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
              I'm currently open to freelance work and full-time opportunities.
              Whether it's a quick question or a long-term collaboration, don't
              hesitate to reach out!
            </p>
            {LINKS.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="card p-4 flex items-center gap-4 hover:border-[var(--accent)] transition-colors duration-200">
                <span className="text-2xl">{l.icon}</span>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--text-2)" }}>{l.label}</p>
                  <p className="text-sm font-semibold mt-0.5 break-all" style={{ color: "var(--text)" }}>{l.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <div className="card p-8 reveal" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Name</label>
                  <input value={form.name} onChange={update("name")} required placeholder="John Doe"
                    className="form-input" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Email</label>
                  <input type="email" value={form.email} onChange={update("email")} required placeholder="you@example.com"
                    className="form-input" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-2)" }}>Message</label>
                <textarea value={form.message} onChange={update("message")} required rows={5}
                  placeholder="Tell me about your project..."
                  className="form-input resize-none" />
              </div>
              <button type="submit" disabled={loading}
                className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading
                  ? <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
                  : <>Send Message <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></>
                }
              </button>
              <p className="text-[10px] text-center" style={{ color: "var(--text-2)" }}>
                Protected by reCAPTCHA v3 — <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">Privacy</a> &amp; <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline">Terms</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
