import { useParams, Link, Navigate } from "react-router-dom";
import { Sprout, Scissors, Leaf, FlaskConical, Compass, Check, ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import { services } from "../data/services";

const iconMap: Record<string, typeof Sprout> = {
  sprout: Sprout,
  leaf: Leaf,
  scissors: Scissors,
  flask: FlaskConical,
  compass: Compass,
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] ?? Sprout;
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <div className="pt-20">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <Link to="/services" className="inline-flex items-center gap-2 text-cream-200/80 hover:text-cream-50 transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="max-w-3xl">
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cream-50/15 backdrop-blur-sm text-cream-50 mb-5">
              <Icon className="w-7 h-7" strokeWidth={1.8} />
            </span>
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">{service.tagline}</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-600 text-forest-900 font-display mb-5">Overview</h2>
                <p className="text-charcoal-700/80 text-lg leading-relaxed">{service.longDescription}</p>

                <h3 className="mt-10 text-xl font-600 text-forest-900 font-display mb-5">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step.step} className="flex gap-4 p-5 bg-cream-100 rounded-2xl">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-600 text-cream-50 font-600 text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-600 text-forest-900">{step.step}</h4>
                        <p className="text-sm text-charcoal-700/70 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-cream-100 rounded-3xl p-6 border border-cream-200 sticky top-24">
                  <h3 className="font-600 text-forest-900 font-display mb-4">What's Included</h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-charcoal-700">
                        <Check className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-5 border-t border-cream-200">
                    <div className="text-xs font-600 text-charcoal-700/50 uppercase tracking-wide mb-1">Pricing</div>
                    <p className="text-sm text-charcoal-800 font-500">{service.pricing}</p>
                  </div>
                  <Link
                    to="/services/book-orchard"
                    className="mt-6 block w-full text-center py-3.5 bg-forest-600 text-cream-50 rounded-xl font-600 hover:bg-forest-700 transition-colors"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="container-wide">
          <Link
            to={`/services/${nextService.id}`}
            className="group flex items-center justify-between p-6 bg-cream-50 rounded-2xl border border-cream-200 hover:border-forest-200 transition-all"
          >
            <div>
              <div className="text-xs text-charcoal-700/50 font-500 uppercase tracking-wide">Next Service</div>
              <div className="text-lg font-600 text-forest-900 font-display mt-1">{nextService.title}</div>
            </div>
            <ArrowRight className="w-6 h-6 text-forest-600 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
