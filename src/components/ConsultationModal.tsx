import { useState } from "react";
import { X, Calendar, User, Phone, MapPin, Send, Check } from "lucide-react";
import { company } from "../data/company";
import { services } from "../data/services";

interface ConsultationModalProps {
  open?: boolean;
  isOpen?: boolean;
  onClose: () => void;
  initialService?: string;
  initialEstimateSummary?: string;
}

export function ConsultationModal({ open, isOpen, onClose, initialService, initialEstimateSummary }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const isVisible = open ?? isOpen ?? false;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    service: initialService || services[0]?.id || "",
    summary: initialEstimateSummary || ""
  });

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setForm({ name: "", phone: "", location: "", date: "", service: services[0]?.id || "", summary: "" });
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-[70] bg-charcoal-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-cream-50 rounded-3xl max-w-md w-full shadow-2xl animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 md:p-7 bg-forest-800 text-cream-50">
          <button onClick={onClose} className="absolute top-4 right-4 p-1.5 text-cream-200/60 hover:text-cream-50 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-600 font-display">Book a consultation</h3>
          <p className="text-cream-200/70 text-sm mt-1">Free 30-min site assessment call</p>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-forest-100 text-forest-600 mx-auto mb-4">
              <Check className="w-7 h-7" strokeWidth={2.5} />
            </span>
            <h4 className="text-lg font-600 text-forest-900 font-display">Request sent!</h4>
            <p className="text-sm text-charcoal-700/60 mt-2">We'll call you within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-7 space-y-4">
            <div>
              <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                <User className="w-3.5 h-3.5 text-forest-500" /> Name <span className="text-apple-500">*</span>
              </label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-input" placeholder="Your name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-forest-500" /> Phone <span className="text-apple-500">*</span>
                </label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="form-input" placeholder="+91..." />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-forest-500" /> Date
                </label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="form-input" />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-sm font-500 text-charcoal-700 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-forest-500" /> Land location
              </label>
              <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="form-input" placeholder="District / village" />
            </div>

            <div>
              <label className="text-sm font-500 text-charcoal-700 mb-1.5 block">Service needed</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="form-input">
                {services.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-600 text-cream-50 rounded-xl font-600 hover:bg-forest-700 transition-all duration-300 hover:scale-[1.01] shadow-md">
              <Send className="w-4 h-4" /> Request Consultation
            </button>
            <p className="text-xs text-charcoal-700/50 text-center">
              Or call: <a href={`tel:${company.phone}`} className="text-forest-600 font-500">{company.phone}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default ConsultationModal;
