import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "../data/company";

export function LocationMapSection() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <ScrollReveal>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Find Us</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-600 text-forest-900 leading-tight font-display">
                Visit our<br /><span className="italic font-400 text-gradient-green">nursery</span>
              </h2>
              <p className="mt-5 text-charcoal-700/70 text-lg leading-relaxed">
                Our nursery is open six days a week. Walk in to see our saplings,
                talk to our team, and get expert advice for your orchard project.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 p-5 bg-cream-50 rounded-2xl border border-cream-200 hover-lift transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-xs font-600 text-forest-500 uppercase tracking-wide">Address</div>
                    <div className="text-charcoal-800 font-500 mt-1">
                      {company.address.line1}, {company.address.line2}<br />
                      {company.address.city}, {company.address.state} {company.address.pincode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-cream-50 rounded-2xl border border-cream-200 hover-lift transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600 flex-shrink-0">
                    <Clock className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-xs font-600 text-forest-500 uppercase tracking-wide">Hours</div>
                    <div className="text-charcoal-800 font-500 mt-1">{company.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-cream-50 rounded-2xl border border-cream-200 hover-lift transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600 flex-shrink-0">
                    <Phone className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-xs font-600 text-forest-500 uppercase tracking-wide">Phone</div>
                    <a href={`tel:${company.phone}`} className="text-charcoal-800 font-500 mt-1 hover:text-forest-600 transition-colors block">
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://www.openstreetmap.org/?mlat=34.02&mlon=74.82#map=15/34.02/74.82"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-cream-50 rounded-full font-600 text-sm hover:bg-forest-700 transition-all duration-300 hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-cream-200 shadow-xl aspect-[4/3] bg-cream-200">
              <iframe
                title="Abraq Nurseries location on map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.78%2C34.00%2C74.86%2C34.04&layer=mapnik&marker=34.02%2C74.82"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default LocationMapSection;
