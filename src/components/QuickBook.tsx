import { Link } from "react-router-dom";
import { ArrowUpRight, Sprout, Leaf, FlaskConical, Compass, Scissors } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const actions = [
  { service: "orchard-development", title: "Book an Orchard", note: "Turnkey high-density setup", icon: Sprout },
  { service: "nursery-saplings", title: "Book Plants", note: "Certified feathered saplings", icon: Leaf },
  { service: "soil-testing", title: "Book a Soil Test", note: "Soil & water analysis", icon: FlaskConical },
  { service: "consulting", title: "Book an Expert Call", note: "Talk to a horticulturist", icon: Compass },
  { service: "scientific-plantation", title: "Book Plantation Support", note: "Pruning, nutrition, IPM", icon: Scissors },
];

/** One-tap entry points into the booking form, each pre-selecting its service. */
export function QuickBook() {
  return (
    <section className="relative bg-cream-50 pt-16 md:pt-20 pb-6 md:pb-8">
      <div className="container-wide">
        <ScrollReveal variant="fade">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
            <div>
              <span className="eyebrow">Book in one tap</span>
              <p className="mt-3 font-display text-3xl md:text-4xl text-forest-900">
                Where would you like to <span className="serif-italic text-honey-600">begin?</span>
              </p>
            </div>
            <p className="text-sm text-charcoal-700/70 max-w-xs md:text-right">
              Pick a service — we’ll call back within 48 hours to plan a site visit.
            </p>
          </div>
        </ScrollReveal>

        <div className="-mx-5 px-5 scroll-pl-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-5 gap-3 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-2">
          {actions.map((a, i) => (
            <ScrollReveal key={a.service} delay={i * 70} className="snap-start shrink-0 w-[70vw] sm:w-64 md:w-auto">
              <Link
                to={`/services/book-orchard?service=${a.service}`}
                className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[1.25rem] border border-cream-300 bg-cream-100/60 p-5 md:p-6 transition-colors duration-500 hover:border-forest-900"
              >
                {/* pine fill rises on hover */}
                <span className="absolute inset-0 bg-forest-900 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative flex items-center justify-between">
                  <span className="w-11 h-11 rounded-full bg-cream-50 border border-cream-300 text-honey-700 flex items-center justify-center transition-colors duration-500 group-hover:bg-honey-400 group-hover:border-honey-400 group-hover:text-forest-950">
                    <a.icon className="w-4 h-4" strokeWidth={1.7} />
                  </span>
                  <span className="numeral italic text-sm text-charcoal-700/70 transition-colors duration-500 group-hover:text-honey-300">0{i + 1}</span>
                </span>
                <span className="relative">
                  <span className="block font-display text-2xl leading-tight text-forest-900 transition-colors duration-500 group-hover:text-cream-50">
                    {a.title}
                  </span>
                  <span className="mt-2 flex items-center justify-between gap-3 text-xs text-charcoal-700/75 transition-colors duration-500 group-hover:text-cream-200/80">
                    {a.note}
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:rotate-45 group-hover:text-honey-300" />
                  </span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickBook;
