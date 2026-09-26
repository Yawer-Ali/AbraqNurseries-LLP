export interface KnowledgeArticle {
  id: string;
  title: string;
  category: "Planting Guide" | "Pest Management" | "Orchard Care" | "Varieties" | "Soil & Nutrition";
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "high-density-apple-planting",
    title: "High-Density Apple Planting in Kashmir: A Complete Guide",
    category: "Planting Guide",
    excerpt:
      "Learn how high-density planting (HDP) with dwarfing rootstocks like M9 can dramatically increase per-acre yield in Kashmir's apple orchards.",
    content:
      "High-density planting (HDP) is revolutionizing Kashmiri apple orchards. By using dwarfing rootstocks like M9 and planting at 1.5m x 4m spacing, growers can fit 1,600+ trees per acre compared to 200 in traditional layouts. The result: earlier bearing (Year 2-3 vs Year 5-6), higher per-acre yield, and easier management due to smaller tree size. Key considerations include trellis support, drip irrigation, and precise pruning. This guide covers site preparation, spacing, rootstock selection, planting technique, and first-year care.",
    readTime: "8 min",
    date: "Jan 2025",
    image: "/images/real/planting-trellis-row-1600.webp",
  },
  {
    id: "spring-pruning-guide",
    title: "Spring Pruning: When and How to Prune Your Fruit Trees",
    category: "Orchard Care",
    excerpt:
      "Pruning is the single most important annual task for orchard health. Here's our step-by-step guide to spring pruning in Kashmir.",
    content:
      "Pruning shapes the tree, removes diseased wood, improves air circulation, and encourages fruiting wood. In Kashmir, late dormancy (February–March) is the ideal window for apples and pears. Start by removing dead, diseased, and crossing branches. Then thin the canopy to allow light penetration — aim for a central leader or open-center shape depending on variety. Never remove more than 25% of live canopy in a single year. Seal large cuts with a protective paste and follow up with a dormant spray.",
    readTime: "6 min",
    date: "Feb 2025",
    image: "/images/real/dormant-young-rows-1600.webp",
  },
  {
    id: "codling-moth-management",
    title: "Managing Codling Moth in Apple Orchards",
    category: "Pest Management",
    excerpt:
      "Codling moth is the most damaging apple pest in Kashmir. Learn integrated pest management strategies that reduce chemical dependence.",
    content:
      "Codling moth larvae tunnel into apples, causing wormy fruit that's unsellable. In Kashmir, two generations typically occur per season. Integrated Pest Management (IPM) combines pheromone traps for monitoring, mating disruption dispensers, targeted sprays (only when threshold is exceeded), and orchard sanitation (removing fallen fruit). Our approach reduces chemical use by 60% while maintaining 95%+ clean fruit rates.",
    readTime: "7 min",
    date: "Mar 2025",
    image: "/images/real/spraying-under-net-1600.webp",
  },
  {
    id: "soil-health-basics",
    title: "Soil Health Basics for New Orchard Owners",
    category: "Soil & Nutrition",
    excerpt:
      "Before you plant a single sapling, understand your soil. This guide covers testing, interpretation, and amendment basics.",
    content:
      "Soil is the foundation of every orchard. Key parameters to test: pH (ideal 6.0–7.0 for most fruits), electrical conductivity (below 1 dS/m), organic carbon (aim for >1%), and NPK levels. Based on results, you may need lime (to raise pH), sulfur (to lower pH), farmyard manure or compost (for organic matter), and specific fertilizers. Always amend before planting — it's much harder to change soil once trees are in the ground.",
    readTime: "5 min",
    date: "Dec 2024",
    image: "/images/real/compost-bag-1600.webp",
  },
  {
    id: "choosing-right-variety",
    title: "Choosing the Right Fruit Variety for Your Land",
    category: "Varieties",
    excerpt:
      "With 25+ varieties available, how do you choose? This guide walks through the factors that should drive your decision.",
    content:
      "Variety selection depends on five factors: altitude (determines frost risk and chill hours), soil type (drainage, pH, depth), water availability (some varieties are drought-tolerant), market demand (what sells in your area), and your goals (table fruit, processing, or export). For example, Ambri apples need higher altitude (1,800m+) and fetch premium prices, while Maharaji is more forgiving and suited to mid-altitude sites. We help you match varieties to your specific conditions.",
    readTime: "6 min",
    date: "Nov 2024",
    image: "/images/real/apples-closeup-1600.webp",
  },
  {
    id: "frost-protection",
    title: "Frost Protection Strategies for Kashmir Orchards",
    category: "Orchard Care",
    excerpt:
      "Spring frost can destroy an entire crop overnight. Learn practical protection strategies used in Kashmir's orchards.",
    content:
      "Kashmir's spring frosts (March–April) coincide with bloom and early fruit set, making them the #1 weather risk for orchardists. Protection strategies include: site selection (avoid frost pockets), overhead sprinkler irrigation (releases heat as water freezes), smudge pots and wind machines (for larger orchards), delayed pruning (pushes bloom later), and growth regulators. We help orchardists design integrated frost protection plans tailored to their site and budget.",
    readTime: "7 min",
    date: "Mar 2025",
    image: "/images/real/blossom-closeup-1600.webp",
  },
];
