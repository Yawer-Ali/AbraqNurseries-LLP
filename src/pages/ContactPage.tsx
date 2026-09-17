import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check, User, MessageSquare } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import LocationMapSection from "../components/LocationMapSection";
import { company } from "../data/company";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General inquiry", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "General inquiry", message: "" });
    }, 1000);
  };

  const contactInfo = [
    { icon: MapPin, label: "Visit", value: `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} ${company.address.pincode}` },
    { icon: Phone, label: "Call", value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Hours", value: company.hours },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/24513297/pexels-photo-24513297.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gulmarg valley with snowcapped mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Get in Touch</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display">
              Let's talk about<br /><span className="italic font-400 text-honey-200">your orchard</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-600 text-forest-900 font-display mb-6">Reach us directly</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3 p-5 bg-cream-100 rounded-2xl border border-cream-200">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-forest-100 text-forest-600 flex-shrink-0">
                        <info.icon className="w-5 h-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className="text-xs font-600 text-forest-500 uppercase tracking-wide">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-charcoal-800 font-500 mt-0.5 hover:text-forest-600 transition-colors text-sm block">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-charcoal-800 font-500 mt-0.5 text-sm">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl overflow-hidden border border-cream-200 aspect-[4/3] bg-cream-100">
                  <iframe
                    title="Abraq Nurseries location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=74.78%2C34.00%2C74.86%2C34.04&layer=mapnik&marker=34.02%2C74.82"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-cream-50 rounded-3xl p-7 md:p-9 shadow-lg border border-cream-200">
                {status === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 text-forest-600 mb-5">
                      <Check className="w-8 h-8" strokeWidth={2.5} />
                    </span>
                    <h3 className="text-2xl font-600 text-forest-900 font-display mb-2">Message sent!</h3>
                    <p className="text-charcoal-700/70 max-w-xs">
                      Thank you for reaching out. We'll get back to you within 48 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-forest-600 font-500 hover:text-forest-800 transition-colors text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-600 text-forest-900 font-display mb-2">Send a message</h3>

                    {status === "error" && (
                      <div className="p-4 bg-apple-50 border border-apple-200 rounded-xl text-sm text-apple-700">
                        Something went wrong. Please try again or call us at {company.phone}.
                      </div>
                    )}

                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                        <User className="w-3.5 h-3.5 text-forest-500" /> Name <span className="text-apple-500">*</span>
                      </label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input" placeholder="Your name" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-500 text-charcoal-700 mb-1.5">Email</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input" placeholder="you@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-500 text-charcoal-700 mb-1.5">Phone</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-500 text-charcoal-700 mb-1.5">Subject</label>
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
                      <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-forest-500" /> Message <span className="text-apple-500">*</span>
                      </label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="form-input resize-none" placeholder="Tell us about your land, needs, or questions..." />
                    </div>

                    <button type="submit" disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-600 text-cream-50 rounded-xl font-600 hover:bg-forest-700 transition-all duration-300 hover:scale-[1.01] shadow-md disabled:opacity-60">
                      <Send className="w-4 h-4" />
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <LocationMapSection />
    </div>
  );
}
