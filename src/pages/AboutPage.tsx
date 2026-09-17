import { Leaf, Target, Eye, Users } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import PolaroidDeck from "../components/PolaroidDeck";
import LocationMapSection from "../components/LocationMapSection";
import CTASection from "../components/CTASection";
import { impactStats } from "../data/company";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/23710615/pexels-photo-23710615.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Aerial view of Srinagar with surrounding mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">About Us</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display text-balance">
              Rooted in Kashmir,<br /><span className="italic font-400 text-honey-200">growing for tomorrow</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-4 h-4 text-forest-500" />
                  <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-600 text-forest-900 leading-tight text-balance font-display">
                  From a single nursery to Kashmir's orchard partner
                </h2>
                <p className="mt-6 text-charcoal-700 text-lg leading-relaxed">
                  Abraq Nurseries LLP was founded with a mission to modernize
                  horticulture in Jammu & Kashmir. Based at Wazabagh on the
                  Hyderpora Bypass in Srinagar, we began as a nursery supplying
                  grafted saplings to local growers.
                </p>
                <p className="mt-4 text-charcoal-700/80 leading-relaxed">
                  Today, we are a full-service orchard developer — offering
                  turnkey plantation, scientific support, soil testing, and consulting
                  across 12 districts of J&K. Our team combines traditional Kashmiri
                  horticultural knowledge with modern scientific practices to help
                  growers achieve better yields and higher quality fruit.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Certified saplings", "Scientific methods", "Local expertise", "Full-cycle support"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-forest-50 text-forest-700 rounded-full text-sm font-500 border border-forest-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/15879648/pexels-photo-15879648.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                    alt="Srinagar valley at twilight"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream-50 hidden sm:block animate-float-slow">
                  <img
                    src="https://images.pexels.com/photos/3127146/pexels-photo-3127146.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                    alt="Saplings in nursery trays"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 bg-forest-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To empower Kashmir's growers with certified planting material, scientific knowledge, and end-to-end orchard support — increasing productivity and income across the region.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  text: "A Kashmir where every orchard is productive, sustainable, and profitable — where modern horticulture coexists with the valley's natural beauty and heritage.",
                },
                {
                  icon: Users,
                  title: "Our Values",
                  text: "Quality over quantity. Science in service of tradition. Honest advice over easy sales. We build relationships that last beyond the first harvest.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-cream-50 rounded-3xl p-8 border border-cream-200 hover-lift transition-all">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-100 text-forest-600 mb-5">
                    <item.icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-xl font-600 text-forest-900 font-display mb-3">{item.title}</h3>
                  <p className="text-charcoal-700/70 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-700 font-display text-forest-700">{stat.number}</div>
                  <div className="text-sm text-charcoal-700/60 mt-2 font-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 bg-forest-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="text-center mb-10">
              <span className="text-forest-600 text-sm font-600 tracking-wide uppercase">Transformation</span>
              <h2 className="mt-4 text-2xl md:text-4xl font-600 text-forest-900 font-display">
                Before & after: orchard development
              </h2>
              <p className="mt-3 text-charcoal-700/60 max-w-xl mx-auto">
                Drag the slider to see how we transform raw land into productive orchards.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage="https://images.pexels.com/photos/7656731/pexels-photo-7656731.jpeg?auto=compress&cs=tinysrgb&w=1600"
                afterImage="https://images.pexels.com/photos/18607500/pexels-photo-18607500.jpeg?auto=compress&cs=tinysrgb&w=1600"
                beforeLabel="Before · Raw land"
                afterLabel="After · Productive orchard"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <PolaroidDeck />

      <LocationMapSection />

      <CTASection />
    </div>
  );
}
