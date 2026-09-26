import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "../data/company";

export function LocationMapSection() {
  const rows = [
    {
      icon: MapPin,
      label: "Address",
      content: (
        <>
          {company.address.line1}, {company.address.line2}
          <br />
          {company.address.city}, {company.address.state} {company.address.pincode}
        </>
      ),
    },
    { icon: Clock, label: "Hours", content: company.hours },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <a href={`tel:${company.phone}`} className="link-underline hover:text-honey-700 transition-colors">
          {company.phone}
        </a>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-cream-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade">
              <span className="eyebrow">Find Us</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="display-lg mt-6 text-forest-900">
                Visit our <span className="serif-italic text-honey-600">nursery</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="mt-6 text-charcoal-700/70 text-base md:text-lg leading-relaxed">
                Our nursery is open six days a week. Walk in to see our saplings,
                talk to our team, and get expert advice for your orchard project.
              </p>
            </ScrollReveal>

            <div className="mt-10 border-t border-cream-300">
              {rows.map((r, i) => (
                <ScrollReveal key={r.label} delay={200 + i * 80}>
                  <div className="group flex items-start gap-5 py-6 border-b border-cream-300">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full border border-cream-300 text-honey-700 shrink-0 group-hover:bg-forest-900 group-hover:border-forest-900 group-hover:text-honey-200 transition-all duration-500">
                      <r.icon className="w-4 h-4" strokeWidth={1.7} />
                    </span>
                    <div>
                      <div className="text-[10px] font-700 tracking-[0.25em] uppercase text-charcoal-700/70">{r.label}</div>
                      <div className="mt-1.5 text-forest-900 font-500 leading-relaxed">{r.content}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={450}>
              <a
                href="https://www.openstreetmap.org/?mlat=34.02&mlon=74.82#map=15/34.02/74.82"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 btn-lux btn-ink"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="mask" className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-5 rounded-[2rem] border border-honey-400/40 pointer-events-none" />
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-cream-200 shadow-luxe">
                <iframe
                  title="Abraq Nurseries location on map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.78%2C34.00%2C74.86%2C34.04&layer=mapnik&marker=34.02%2C74.82"
                  className="w-full h-full border-0 grayscale-[30%] sepia-[15%]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 md:left-10 px-5 py-4 rounded-2xl bg-forest-900 text-cream-50 shadow-luxe">
                <span className="text-[10px] tracking-[0.25em] uppercase text-honey-300">Nursery HQ</span>
                <p className="font-display text-xl mt-1">{company.address.city}, Kashmir</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default LocationMapSection;
