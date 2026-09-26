import { ChinarLeaf } from "./motifs/KashmirMotifs";

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

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 animate-marquee items-center" aria-hidden={hidden || undefined}>
      {logos.map((logo, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 md:px-12 font-display text-2xl md:text-3xl font-500 italic text-forest-900/65 hover:text-forest-900 transition-colors duration-500 whitespace-nowrap">
            {logo}
          </span>
          <ChinarLeaf className="w-5 h-5 text-honey-500/80" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative py-10 md:py-12 bg-cream-100 paper-grain overflow-hidden border-b border-cream-200">
      <div className="container-wide mb-6 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-honey-500/50" />
        <p className="text-center text-[10px] font-700 text-charcoal-700/70 uppercase tracking-[0.32em]">
          Trusted by growers, institutions, and government bodies across J&K
        </p>
        <span className="h-px w-10 bg-honey-500/50" />
      </div>
      <div className="relative flex overflow-hidden group [&:hover_.animate-marquee]:[animation-play-state:paused]">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none" />
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

export default TrustMarquee;
