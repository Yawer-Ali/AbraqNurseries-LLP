import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, User, Phone, Mail, MapPin, Calendar, MessageSquare, Send, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/PageHero";
import { services } from "../data/services";
import { company } from "../data/company";
import { submitEnquiry, revealResult } from "../utils/enquiry";
import EnquiryDelivery, { type DeliveryResult } from "../components/EnquiryDelivery";

export default function BookOrchardPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [delivery, setDelivery] = useState<DeliveryResult | null>(null);
  // Quick-book links pass ?service=<id> to pre-select the service
  const [params] = useSearchParams();
  const requested = params.get("service");
  const initialService = services.some((s) => s.id === requested) ? (requested as string) : services[0].id;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    area: "",
    service: initialService,
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const serviceTitle = services.find((s) => s.id === form.service)?.title ?? form.service;
    const subject = `Orchard booking: ${serviceTitle} — ${form.name}`;
    const result = await submitEnquiry(
      subject,
      {
        Name: form.name,
        Phone: form.phone,
        Email: form.email,
        "Land location": form.location,
        "Land area": form.area,
        Service: serviceTitle,
        Timeline: form.timeline,
        Message: form.message,
      },
      form.email || undefined,
    );
    setDelivery({ subject, ...result });
    setSending(false);
    setSubmitted(true);
    revealResult("enquiry-result");
  };

  return (
    <div>
      <PageHero
        image="/images/real/measuring-planting-lines-1600.webp"
        imagePosition="100% 45%"
        alt="Measuring out planting lines on a new orchard site"
        eyebrow="Get Started"
        title="Book an orchard"
        accent="consultation"
        description="Tell us about your land and goals. We'll get back within 48 hours with a site visit plan and estimate."
      />

      <section className="py-24 md:py-32 bg-cream-100 paper-grain">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Side panel */}
            <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="relative rounded-[1.75rem] overflow-hidden bg-forest-900 text-cream-50">
                <div className="aspect-[4/3] lg:aspect-[4/5] relative">
                  <img src="/images/trellis/dsc08851.webp" alt="Blossoming high-density trellis rows" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/30 to-transparent" />
                </div>
                <div className="relative -mt-24 p-7 md:p-8">
                  <span className="eyebrow !text-honey-300">Site visit</span>
                  <p className="mt-4 font-display text-3xl leading-tight">
                    Response within <span className="serif-italic text-honey-200">48 hours</span>
                  </p>
                  <a href={`tel:${company.phone}`} className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-cream-50/15 group">
                    <span>
                      <span className="block text-[10px] tracking-[0.25em] uppercase text-cream-200/55">Call us directly</span>
                      <span className="block mt-1 text-lg font-600 group-hover:text-honey-200 transition-colors">{company.phone}</span>
                    </span>
                    <span className="w-11 h-11 rounded-full border border-cream-50/25 flex items-center justify-center group-hover:bg-honey-400 group-hover:border-honey-400 group-hover:text-forest-950 transition-all duration-500">
                      <Phone className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-8">
              {submitted ? (
                <div id="enquiry-result" className="bg-cream-50 rounded-[1.75rem] p-10 md:p-16 border border-cream-300 text-center shadow-luxe">
                  <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-forest-900 text-honey-200 mx-auto mb-8 animate-scale-in">
                    <span className="absolute inset-0 rounded-full animate-glow-pulse" />
                    <Check className="w-9 h-9" strokeWidth={2} />
                  </span>
                  <h2 className="display-md text-forest-900">Request <span className="serif-italic text-honey-600">received!</span></h2>
                  <p className="mt-5 text-charcoal-700/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name || "friend"}. Our team will review your
                    request and contact you within 48 hours to schedule a site visit.
                  </p>
                  {delivery && <EnquiryDelivery result={delivery} />}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", location: "", area: "", service: services[0].id, timeline: "", message: "" });
                    }}
                    className="mt-10 btn-lux btn-ghost-dark"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-cream-50 rounded-[1.75rem] p-7 md:p-12 border border-cream-300 shadow-[0_40px_80px_-50px_rgba(11,26,19,0.4)] space-y-7">
                  <div className="pb-7 border-b border-cream-300">
                    <span className="eyebrow">Consultation request</span>
                    <h2 className="mt-4 font-display text-4xl md:text-5xl text-forest-900">Tell us about your <span className="serif-italic text-honey-600">project</span></h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Full Name" icon={User} required>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input" placeholder="Your name" />
                    </Field>
                    <Field label="Phone" icon={Phone} required>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input" placeholder="+91 98765 43210" />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Email" icon={Mail}>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input" placeholder="you@example.com" />
                    </Field>
                    <Field label="Land Location" icon={MapPin} required>
                      <input type="text" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="form-input" placeholder="District / village" />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Land Area" icon={MapPin}>
                      <input type="text" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
                        className="form-input" placeholder="e.g. 5 acres" />
                    </Field>
                    <Field label="Service Needed" icon={Send}>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="form-input">
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Timeline" icon={Calendar}>
                    <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="form-input">
                      <option value="">Select a timeline</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Just exploring</option>
                    </select>
                  </Field>

                  <Field label="Message" icon={MessageSquare}>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input resize-none" placeholder="Tell us about your land, water access, altitude, and goals..." />
                  </Field>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
                    <p className="text-xs text-charcoal-700/70 order-2 sm:order-1">
                      Or call us directly: <a href={`tel:${company.phone}`} className="text-forest-800 font-600 link-underline">{company.phone}</a>
                    </p>
                    <button type="submit" disabled={sending} className="btn-lux btn-ink order-1 sm:order-2 w-full sm:w-auto disabled:opacity-60">
                      <Send className="w-4 h-4" /> {sending ? "Sending..." : "Submit Request"} <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, icon: Icon, required, children }: { label: string; icon: typeof User; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-[10px] font-700 tracking-[0.2em] uppercase text-charcoal-700/70 mb-2.5">
        <Icon className="w-3.5 h-3.5 text-honey-600" />
        {label}{required && <span className="text-apple-500">*</span>}
      </label>
      {children}
    </div>
  );
}
