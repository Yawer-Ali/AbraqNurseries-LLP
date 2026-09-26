import { useEffect, useState } from "react";
import { Clock, ArrowUpRight, ArrowLeft, X } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import FieldFilms from "../components/FieldFilms";
import { knowledgeArticles } from "../data/knowledge";

const categories = ["All", "Planting Guide", "Pest Management", "Orchard Care", "Varieties", "Soil & Nutrition"];

export default function KnowledgePage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof knowledgeArticles[0] | null>(null);

  const filtered = filter === "All" ? knowledgeArticles : knowledgeArticles.filter((a) => a.category === filter);
  const [lead, ...rest] = filtered;

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      <PageHero
        image="/images/real/field-demonstration-1600.webp"
        imagePosition="60% 8%"
        alt="An Abraq specialist giving a field demonstration to growers"
        eyebrow="Knowledge Hub"
        title="Guides for"
        accent="better orchards"
        description="Practical articles on planting, pruning, pest management, and soil health — written by our team for Kashmir's growers."
      />

      <FieldFilms
        layout="feature"
        ids={["PZfOqeoDPZI"]}
        eyebrow="Expert advisory · Video"
        title="Protecting blossom"
        accent="at pink stage"
        ctaLabel="Watch the advisory"
      />

      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-wide">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`chip shrink-0 ${filter === cat ? "chip-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Lead article */}
          {lead && (
            <ScrollReveal key={`lead-${filter}`}>
              <button onClick={() => setSelected(lead)} className="group w-full text-left grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 mb-16 border-b border-cream-300">
                <div className="lg:col-span-7 relative aspect-[16/10] rounded-[1.75rem] overflow-hidden img-zoom">
                  <img src={lead.image} alt={lead.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.2em] uppercase">
                    Featured · {lead.category}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <ArticleMeta readTime={lead.readTime} date={lead.date} />
                  <h3 className="mt-4 font-display text-4xl md:text-5xl text-forest-900 leading-[1.02] group-hover:text-honey-700 transition-colors duration-500">{lead.title}</h3>
                  <p className="mt-5 text-charcoal-700/70 leading-relaxed line-clamp-4">{lead.excerpt}</p>
                  <ReadMore />
                </div>
              </button>
            </ScrollReveal>
          )}

          <div key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 reveal-stagger">
            {rest.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelected(article)}
                className="group text-left"
              >
                <div className="relative aspect-[16/11] rounded-[1.25rem] overflow-hidden img-zoom">
                  <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-cream-50 text-[10px] font-700 tracking-[0.18em] uppercase">
                    {article.category}
                  </span>
                </div>
                <div className="mt-5">
                  <ArticleMeta readTime={article.readTime} date={article.date} />
                  <h3 className="mt-3 font-display text-2xl md:text-[1.75rem] text-forest-900 leading-tight group-hover:text-honey-700 transition-colors duration-500">{article.title}</h3>
                  <p className="mt-3 text-sm text-charcoal-700/70 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <ReadMore />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-forest-950/85 backdrop-blur-md flex items-end md:items-center justify-center md:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <article
            className="bg-cream-50 rounded-t-[1.75rem] md:rounded-[1.75rem] max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/8] overflow-hidden">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-11 h-11 bg-cream-50/90 backdrop-blur-sm rounded-full text-forest-900 flex items-center justify-center hover:bg-forest-900 hover:text-cream-50 transition-all duration-500"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-7 md:px-14 pb-12 -mt-6 relative">
              <div className="flex flex-wrap items-center gap-4">
                <span className="eyebrow">{selected.category}</span>
                <ArticleMeta readTime={selected.readTime} date={selected.date} />
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-forest-900 leading-[1.05]">{selected.title}</h2>
              <p className="mt-8 text-charcoal-700/85 leading-[1.85] text-lg first-letter:float-left first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1 first-letter:text-honey-600">
                {selected.content}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-10 btn-lux btn-ghost-dark"
              >
                <ArrowLeft className="w-4 h-4" /> Back to articles
              </button>
            </div>
          </article>
        </div>
      )}

      <CTASection
        title="Have a question about your orchard?"
        subtitle="Our team is happy to share knowledge. Reach out with your questions."
        buttonText="Ask Our Experts"
      />
    </div>
  );
}

function ArticleMeta({ readTime, date }: { readTime: string; date: string }) {
  return (
    <div className="flex items-center gap-3 text-xs text-charcoal-700/70">
      <span className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-honey-600" />
        {readTime}
      </span>
      <span className="w-1 h-1 rounded-full bg-cream-300" />
      <span>{date}</span>
    </div>
  );
}

function ReadMore() {
  return (
    <span className="mt-5 inline-flex items-center gap-2 link-underline text-sm font-700 text-forest-900">
      Read more <ArrowUpRight className="w-4 h-4" />
    </span>
  );
}
