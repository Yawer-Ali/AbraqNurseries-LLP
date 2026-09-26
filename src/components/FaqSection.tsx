import { useState } from "react";
import { Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { faqItems } from "../data/faq";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 bg-cream-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky editorial title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal variant="fade">
                <div className="flex items-center gap-4">
                  <span className="numeral text-sm italic text-honey-700">(09)</span>
                  <span className="eyebrow">FAQ</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="display-lg mt-6 text-forest-900">
                  Questions we hear <span className="serif-italic text-honey-600">often</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160} variant="mask" className="hidden lg:block mt-10">
                <div className="arch w-48 aspect-[3/4] overflow-hidden">
                  <img src="/images/trellis/dsc08864.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8 border-t border-cream-300">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <ScrollReveal key={i} delay={Math.min(i, 5) * 60}>
                  <div className="border-b border-cream-300">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left group"
                    >
                      <div className="flex items-start gap-5 md:gap-8 min-w-0">
                        <span className={`numeral italic text-sm pt-2 transition-colors ${isOpen ? "text-honey-700" : "text-charcoal-700/70"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <span className="text-[10px] font-700 tracking-[0.22em] uppercase text-honey-700">{item.category}</span>
                          <h3 className={`mt-1.5 font-display text-2xl md:text-[1.9rem] leading-snug transition-colors duration-300 ${isOpen ? "text-forest-900" : "text-forest-900/80 group-hover:text-forest-900"}`}>
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`mt-2 shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isOpen ? "bg-forest-900 border-forest-900 text-cream-50 rotate-45" : "border-cream-300 text-forest-900 group-hover:border-forest-900"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-8 pl-10 md:pl-[3.75rem] pr-14 text-charcoal-700/75 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
