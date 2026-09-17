export function TrustMarquee() {
  const logos = [
    "SKUAST-Kashmir",
    "Horticulture Dept. JK",
    "JK Agriculture University",
    "Kashmir Horticulture Board",
    "NAFED",
    "APMC Srinagar",
    "DIRK Farm Services",
    "Krishi Vigyan Kendra",
  ];

  return (
    <div className="py-8 bg-cream-100 border-y border-cream-200 overflow-hidden relative">
      <div className="container-wide mb-4">
        <p className="text-center text-xs font-600 text-charcoal-700/40 uppercase tracking-widest">
          Trusted by growers, institutions, and government bodies across J&K
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none" />
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="text-lg font-display font-500 text-charcoal-700/30 hover:text-forest-600/50 transition-colors whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-12 pr-12" aria-hidden="true">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="text-lg font-display font-500 text-charcoal-700/30 hover:text-forest-600/50 transition-colors whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustMarquee;
