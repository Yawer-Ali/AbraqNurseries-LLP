import { useState } from "react";
import { Check, User, Phone, Mail, MapPin, Calendar, MessageSquare, Send } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";
import { company } from "../data/company";

export default function BookOrchardPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    area: "",
    service: services[0].id,
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7656739/pexels-photo-7656739.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Planting a sapling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Get Started</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display">
              Book an orchard<br /><span className="italic font-400 text-honey-200">consultation</span>
            </h1>
            <p className="mt-5 text-cream-100/80 text-lg max-w-xl">
              Tell us about your land and goals. We'll get back within 48 hours
              with a site visit plan and estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide max-w-3xl">
            {submitted ? (
              <div className="bg-cream-50 rounded-3xl p-10 md:p-14 border border-cream-200 text-center shadow-lg">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 text-forest-600 mx-auto mb-5">
                  <Check className="w-8 h-8" strokeWidth={2.5} />
                </span>
                <h2 className="text-2xl font-600 text-forest-900 font-display mb-3">Request received!</h2>
                <p className="text-charcoal-700/70 max-w-md mx-auto">
                  Thank you, {form.name || "friend"}. Our team will review your
                  request and contact you within 48 hours to schedule a site visit.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", location: "", area: "", service: services[0].id, timeline: "", message: "" });
                  }}
                  className="mt-6 text-forest-600 font-500 hover:text-forest-800 transition-colors text-sm"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream-50 rounded-3xl p-7 md:p-10 border border-cream-200 shadow-lg space-y-5">
                <h2 className="text-2xl font-600 text-forest-900 font-display">Tell us about your project</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" icon={User} required>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input" placeholder="Your name" />
                  </Field>
                  <Field label="Phone" icon={Phone} required>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="form-input" placeholder="+91 98765 43210" />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" icon={Mail}>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input" placeholder="you@example.com" />
                  </Field>
                  <Field label="Land Location" icon={MapPin} required>
                    <input type="text" required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="form-input" placeholder="District / village" />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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

                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-600 text-cream-50 rounded-xl font-600 hover:bg-forest-700 transition-all duration-300 hover:scale-[1.01] shadow-md">
                  <Send className="w-4 h-4" /> Submit Request
                </button>

                <p className="text-xs text-charcoal-700/50 text-center">
                  Or call us directly: <a href={`tel:${company.phone}`} className="text-forest-600 font-500">{company.phone}</a>
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

function Field({ label, icon: Icon, required, children }: { label: string; icon: typeof User; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-forest-500" />
        {label}{required && <span className="text-apple-500">*</span>}
      </label>
      {children}
    </div>
  );
}
