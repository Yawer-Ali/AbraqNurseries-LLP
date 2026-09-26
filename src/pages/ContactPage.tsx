import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check, User, MessageSquare } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import LocationMapSection from "../components/LocationMapSection";
import PageHero from "../components/PageHero";
import { company } from "../data/company";
import { submitEnquiry, revealResult } from "../utils/enquiry";
import EnquiryDelivery, { type DeliveryResult } from "../components/EnquiryDelivery";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General inquiry", message: "" });
  const [delivery, setDelivery] = useState<DeliveryResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const subject = `Website enquiry: ${form.subject} — ${form.name}`;
    const result = await submitEnquiry(
      subject,
      { Name: form.name, Phone: form.phone, Email: form.email, Subject: form.subject, Message: form.message },
      form.email || undefined,
    );
    setDelivery({ subject, ...result });
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "General inquiry", message: "" });
    revealResult("enquiry-result");
  };

  const contactInfo = [
    { icon: MapPin, label: "Visit", value: `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} ${company.address.pincode}` },
    { icon: Phone, label: "Call", value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Hours", value: company.hours },
  ];

  const labelCls = "flex items-center gap-2 text-[10px] font-700 tracking-[0.2em] uppercase text-charcoal-700/70 mb-2.5";

  return (
    <div>
      <PageHero
        image="/images/real/netting-mountains-path-1600.webp"
        alt="Netted orchards beneath the Pir Panjal range"
        eyebrow="Get in Touch"
        title="Let's talk about"
        accent="your orchard"
      />

      <section className="py-24 md:py-32 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade">
                <span className="eyebrow">Reach us directly</span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="display-md mt-6 text-forest-900">
                  A conversation <span className="serif-italic text-honey-600">rooted in the valley</span>
                </h2>
              </ScrollReveal>

              <div className="mt-10 border-t border-cream-300">
                {contactInfo.map((info, i) => (
                  <ScrollReveal key={info.label} delay={120 + i * 80}>
                    <div className="group flex items-start gap-5 py-6 border-b border-cream-300">
                      <span className="flex items-center justify-center w-11 h-11 rounded-full border border-cream-300 text-honey-700 flex-shrink-0 group-hover:bg-forest-900 group-hover:border-forest-900 group-hover:text-honey-200 transition-all duration-500">
                        <info.icon className="w-4 h-4" strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-700 text-charcoal-700/70 uppercase tracking-[0.25em]">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="mt-1.5 inline-block font-display text-2xl text-forest-900 hover:text-honey-700 transition-colors break-all">
                            {info.value}
                          </a>
                        ) : (
                          <div className="mt-1.5 text-forest-900 font-500 leading-relaxed">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={420} variant="mask">
                <div className="mt-10 rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-cream-200 border border-cream-300">
                  <iframe
                    title="Abraq Nurseries location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=74.78%2C34.00%2C74.86%2C34.04&layer=mapnik&marker=34.02%2C74.82"
                    className="w-full h-full border-0 grayscale-[30%] sepia-[15%]"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150} className="lg:col-span-7">
              <div className="bg-cream-100 rounded-[1.75rem] p-7 md:p-12 border border-cream-300 lg:sticky lg:top-28">
                {status === "success" ? (
                  <div id="enquiry-result" className="h-full flex flex-col items-center justify-center text-center py-16">
                    <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-forest-900 text-honey-200 mb-8 animate-scale-in">
                      <span className="absolute inset-0 rounded-full animate-glow-pulse" />
                      <Check className="w-9 h-9" strokeWidth={2} />
                    </span>
                    <h3 className="display-md text-forest-900">Message <span className="serif-italic text-honey-600">sent!</span></h3>
                    <p className="mt-4 text-charcoal-700/70 max-w-xs">
                      Thank you for reaching out. We'll get back to you within 48 hours.
                    </p>
                    {delivery && <EnquiryDelivery result={delivery} />}
                    <button onClick={() => setStatus("idle")} className="mt-10 btn-lux btn-ghost-dark">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="pb-7 border-b border-cream-300">
                      <span className="eyebrow">Write to us</span>
                      <h3 className="mt-4 font-display text-4xl md:text-5xl text-forest-900">Send a <span className="serif-italic text-honey-600">message</span></h3>
                    </div>

                    {status === "error" && (
                      <div className="p-4 bg-apple-50 border border-apple-200 rounded-xl text-sm text-apple-700">
                        Something went wrong. Please try again or call us at {company.phone}.
                      </div>
                    )}

                    <div>
                      <label className={labelCls}>
                        <User className="w-3.5 h-3.5 text-honey-600" /> Name <span className="text-apple-500">*</span>
                      </label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input" placeholder="Your name" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className={labelCls}>Email</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input" placeholder="you@example.com" />
                      </div>
                      <div>
                        <label className={labelCls}>Phone</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>Subject</label>
                      <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="form-input">
                        <option>General inquiry</option>
                        <option>Orchard development</option>
                        <option>Nursery & saplings</option>
                        <option>Scientific plantation support</option>
                        <option>Soil testing</option>
                        <option>Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelCls}>
                        <MessageSquare className="w-3.5 h-3.5 text-honey-600" /> Message <span className="text-apple-500">*</span>
                      </label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="form-input resize-none" placeholder="Tell us about your land, needs, or questions..." />
                    </div>

                    <button type="submit" disabled={status === "submitting"}
                      className="btn-lux btn-ink w-full disabled:opacity-60">
                      <Send className="w-4 h-4" />
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LocationMapSection />
    </div>
  );
}
