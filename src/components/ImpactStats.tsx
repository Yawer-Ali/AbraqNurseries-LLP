import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import { impactStats } from "../data/company";

export function ImpactStats() {
  return (
    <section className="py-16 md:py-20 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(68,122,73,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(232,150,31,0.2) 0%, transparent 50%)",
      }} />
      <ScrollReveal>
        <div className="container-wide relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className="group text-center p-6 md:p-8 rounded-2xl bg-forest-50 border border-forest-100 hover:border-forest-300 hover-lift hover-glow transition-all duration-400"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl font-700 font-display text-forest-700 group-hover:text-forest-600 transition-colors">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-sm text-charcoal-700/60 mt-2 font-500 group-hover:text-charcoal-700/80 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ImpactStats;
