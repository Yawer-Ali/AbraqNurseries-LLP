import { useState } from "react";
import { Clock, ArrowRight, ArrowLeft, X } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import { knowledgeArticles } from "../data/knowledge";

const categories = ["All", "Planting Guide", "Pest Management", "Orchard Care", "Varieties", "Soil & Nutrition"];

export default function KnowledgePage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof knowledgeArticles[0] | null>(null);

  const filtered = filter === "All" ? knowledgeArticles : knowledgeArticles.filter((a) => a.category === filter);

  return (
    <div className="pt-20">
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7509487/pexels-photo-7509487.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Farmer trimming tree branches in an orchard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 to-charcoal-900/30" />
        </div>
        <div className="relative container-wide pb-16 pt-32">
          <div className="max-w-2xl">
            <span className="text-honey-200 text-sm font-600 tracking-wide uppercase">Knowledge Hub</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-600 text-cream-50 leading-tight font-display text-balance">
              Guides for<br /><span className="italic font-400 text-honey-200">better orchards</span>
            </h1>
            <p className="mt-5 text-cream-100/80 text-lg max-w-xl">
              Practical articles on planting, pruning, pest management, and
              soil health — written by our team for Kashmir's growers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-500 transition-all duration-300 ${
                    filter === cat ? "bg-forest-600 text-cream-50" : "bg-cream-100 text-charcoal-700 hover:bg-cream-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelected(article)}
                  className="group text-left bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 hover:border-forest-200 hover:shadow-xl transition-all duration-400"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-forest-600/90 backdrop-blur-sm text-cream-50 rounded-full text-xs font-600">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-charcoal-700/50 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg font-600 text-forest-900 font-display leading-tight mb-2">{article.title}</h3>
                    <p className="text-sm text-charcoal-700/70 leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-forest-600 font-600 text-sm group-hover:text-forest-800 transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal-900/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-cream-50 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-cream-50/90 backdrop-blur-sm p-2 rounded-full text-charcoal-700 hover:bg-cream-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-sm text-charcoal-700/50 mb-4">
                <span className="px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-600">{selected.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selected.readTime}</span>
                <span>· {selected.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-600 text-forest-900 font-display mb-4">{selected.title}</h2>
              <p className="text-charcoal-700/80 leading-relaxed text-lg">{selected.content}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 inline-flex items-center gap-2 text-forest-600 font-600 hover:text-forest-800 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to articles
              </button>
            </div>
          </div>
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
