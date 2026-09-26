import { Target, Eye, Users } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import PolaroidDeck from "../components/PolaroidDeck";
import LocationMapSection from "../components/LocationMapSection";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedCounter from "../components/AnimatedCounter";
import { impactStats } from "../data/company";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        image="/images/real/drone-bloom-alley-1600.webp"
        alt="A blossoming alley in an Abraq high-density orchard, seen from a low drone pass"
        eyebrow="About Us"
        title="Rooted in Kashmir,"
        accent="growing for tomorrow"
      />

      {/* Story */}
      <section className="py-24 md:py-36 bg-cream-50 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ScrollReveal variant="fade">
                <span className="eyebrow">Our Story</span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="display-md mt-6 text-forest-900 text-balance">
                  From a single nursery to <span className="serif-italic text-honey-600">Kashmir's orchard partner</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="mt-8 text-forest-900/85 text-lg md:text-xl leading-relaxed font-display first-letter:float-left first-letter:text-7xl first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1 first-letter:text-honey-600">
                  Abraq Nurseries LLP was founded with a mission to modernize
                  horticulture in Jammu & Kashmir. Based at Wazabagh on the
                  Hyderpora Bypass in Srinagar, we began as a nursery supplying
                  grafted saplings to local growers.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <p className="mt-6 text-charcoal-700/75 leading-relaxed">
                  Today, we are a full-service orchard developer — offering
                  turnkey plantation, scientific support, soil testing, and consulting
                  across 12 districts of J&K. Our team combines traditional Kashmiri
                  horticultural knowledge with modern scientific practices to help
                  growers achieve better yields and higher quality fruit.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={280}>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  {["Certified saplings", "Scientific methods", "Local expertise", "Full-cycle support"].map((tag) => (
                    <span key={tag} className="chip !text-forest-800 !border-forest-900/20">
                      <span className="w-1 h-1 rounded-full bg-honey-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <ScrollReveal variant="mask">
                <div className="arch overflow-hidden aspect-[4/5] max-w-md ml-auto">
                  <img
                    src="/images/nursery/dsc03589.webp"
                    alt="High-density apple tree laden with fruit in an Abraq orchard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300} className="absolute -bottom-10 left-0 sm:left-6 w-40 sm:w-56">
                <div className="rounded-[1.25rem] overflow-hidden aspect-square border-[6px] border-cream-50 shadow-luxe">
                  <img
                    src="/images/harvest/dsc07836.webp"
                    alt="Ripe red apples ready for harvest"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <div className="hidden sm:flex absolute top-10 left-0 w-28 h-28 rounded-full bg-forest-900 text-cream-50 flex-col items-center justify-center text-center shadow-luxe">
                <span className="numeral text-3xl text-honey-200 leading-none">12</span>
                <span className="text-[9px] tracking-[0.2em] uppercase mt-1 text-cream-200/70">Districts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 md:py-36 bg-pine-gradient text-cream-50">
        <div className="container-wide">
          <SectionHeading tone="dark" eyebrow="What guides us" title="Principles that" accent="outlast a season" />
          <div className="grid md:grid-cols-3 border-t border-cream-50/15">
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
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="group h-full pt-10 pb-4 md:px-10 md:first:pl-0 md:[&:not(:first-child)]:border-l border-cream-50/15">
                  <div className="flex items-center justify-between">
                    <span className="numeral italic text-honey-300/80">0{i + 1}</span>
                    <span className="w-12 h-12 rounded-full border border-honey-400/40 flex items-center justify-center text-honey-200 group-hover:bg-honey-400 group-hover:text-forest-950 transition-all duration-500">
                      <item.icon className="w-5 h-5" strokeWidth={1.6} />
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl md:text-4xl">{item.title}</h3>
                  <p className="mt-4 text-cream-100/65 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-cream-100 paper-grain">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
            {impactStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center md:border-l first:border-l-0 border-cream-300 px-4">
                  <div className="numeral text-5xl md:text-7xl text-forest-900 leading-none">
                    <AnimatedCounter value={stat.number} />
                  </div>
                  <div className="mt-4 text-[11px] tracking-[0.22em] uppercase text-charcoal-700/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-24 md:py-36 bg-cream-50">
        <div className="container-wide">
          <SectionHeading
            align="center"
            eyebrow="Transformation"
            title="Before & after:"
            accent="orchard development"
            description="Drag the slider to see how we transform raw land into productive orchards."
          />
          <ScrollReveal variant="scale" className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/real/raw-land-before-1600.webp"
              afterImage="/images/real/high-density-rows-laden-1600.webp"
              beforeLabel="Before · Raw land"
              afterLabel="After · Productive orchard"
            />
          </ScrollReveal>
        </div>
      </section>

      <PolaroidDeck />

      <LocationMapSection />

      <CTASection />
    </div>
  );
}
