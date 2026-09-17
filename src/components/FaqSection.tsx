import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { faqItems } from "../data/faq";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <ScrollReveal>
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">FAQ</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-600 text-forest-900 leading-tight font-display">
              Questions we hear<br /><span className="italic font-400 text-gradient-green">often</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`bg-cream-50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i ? "border-forest-300 shadow-md" : "border-cream-200"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-colors duration-300 ${
                      open === i ? "bg-forest-600 text-cream-50" : "bg-forest-50 text-forest-600"
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                    </span>
                    <h3 className="text-base md:text-lg font-600 text-forest-900 font-display">{item.question}</h3>
                  </div>
                  <span className="text-xs font-500 text-forest-500 bg-forest-50 px-2.5 py-1 rounded-full flex-shrink-0">
                    {item.category}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400 ease-out"
                  style={{ maxHeight: open === i ? "300px" : "0px" }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 pl-16 text-charcoal-700/70 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default FaqSection;
