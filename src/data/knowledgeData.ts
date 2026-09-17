export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: "Orchard Management" | "Soil Science" | "Pest & Disease" | "Irrigation & Subsidy";
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export const knowledgeArticles: ArticleItem[] = [
  {
    id: "1",
    slug: "winter-pruning-tall-spindle-m9",
    title: "Scientific Winter Pruning for Tall Spindle M9 High-Density Orchards in Kashmir",
    category: "Orchard Management",
    readTime: "6 min read",
    publishDate: "January 15, 2026",
    author: "Dr. Farooq Ahmad Lone",
    authorRole: "Chief Horticultural Scientist",
    excerpt: "Learn how precise branch renewal, bevel cuts, and vertical leader management maintain sunlight penetration and guarantee 90%+ Grade-A crimson coloring.",
    content: [
      "In traditional Kashmiri apple cultivation, heavy heading cuts were standard practice. However, with modern M9-T337 tall spindle architecture, heavy heading stimulates excessive vegetative shoot growth, which shades lower fruit buds and delays spur initiation.",
      "The golden rule of tall spindle pruning is 'Branch Renewal'. Never allow any lateral scaffold branch to exceed one-third of the central trunk diameter at the point of origin. Use Dutch bevel cuts (Dutch cut) to encourage flat, horizontal feather regrowth.",
      "Ensure the top third of the canopy is shaped into a strict pyramid cone. Sunlight must reach the lowest fruit spurs 365 days a year to trigger the anthocyanin pigment synthesis responsible for deep crimson skin color in Gala and King Roat clones."
    ],
    coverImage: "/images/nursery/dsc03616.webp",
    tags: ["Pruning", "Tall Spindle", "M9 Rootstock", "Canopy Management"],
    featured: true
  },
  {
    id: "2",
    slug: "soil-ph-correction-kashmiri-karewas",
    title: "Managing Acidic & Alkaline Soil Discrepancies Across Kashmiri Karewas",
    category: "Soil Science",
    readTime: "5 min read",
    publishDate: "February 2, 2026",
    author: "Er. Mudasir Mir",
    authorRole: "Head of Soil Chemistry, Chadoora Lab",
    excerpt: "Why high iron and phosphorus lock-up occurs in Karewa plateaus, and how scientific soil testing prevents chlorosis before planting M9 knip trees.",
    content: [
      "Kashmiri Karewas (upland plateau soils) frequently exhibit high calcareous lime layers interspersed with acidic topsoils. When soil pH strays outside the ideal 6.2 - 6.8 range, micronutrients like Zinc, Boron, and Iron become insoluble and unavailable to apple roots.",
      "At Abraq Nurseries' Chadoora Soil Lab, atomic absorption testing revealed that over 65% of orchards suffering from leaf yellowing (chlorosis) had adequate iron in the soil, but a high pH (>7.8) prevented root absorption.",
      "Applying elemental sulfur or organic compost 4 to 6 months prior to winter dormancy planting normalizes the root-zone pH, ensuring instant root anchorage and vigorous spring shoot extension."
    ],
    coverImage: "/images/nursery/dsc03589.webp",
    tags: ["Soil Health", "pH Testing", "NPK", "Chadoora Lab"],
    featured: false
  },
  {
    id: "3",
    slug: "drip-fertigation-vs-flood-irrigation",
    title: "Drip Fertigation: How Precision Moisture Boosts Fruit Sizing & Prevents Bitter Pit",
    category: "Irrigation & Subsidy",
    readTime: "4 min read",
    publishDate: "February 20, 2026",
    author: "Er. Sameer Wani",
    authorRole: "Irrigation & Automation Engineer",
    excerpt: "Calcium uptake is directly linked to uninterrupted transpiration stream. Why drip irrigation prevents calcium-related physiological disorders.",
    content: [
      "Flood irrigation causes extreme cycles of soil saturation followed by drought stress. During dry spells, calcium mobility ceases, resulting in Bitter Pit and corking on fruit skin.",
      "Drip irrigation delivers micro-doses of water and water-soluble calcium nitrate directly to the feeder roots every 48 hours. This maintains uniform soil tension (-25 kPa) and ensures smooth, unblemished fruit skin.",
      "Automated Venturi fertigation systems also reduce chemical fertilizer expenses by 40%, because nutrients are not washed away into subsoil drainage channels."
    ],
    coverImage: "/images/trellis/dsc08911.webp",
    tags: ["Drip Irrigation", "Fertigation", "Water Conservation", "Bitter Pit"],
    featured: true
  },
  {
    id: "4",
    slug: "how-to-claim-midh-orchard-subsidy",
    title: "Complete Step-by-Step Guide to J&K High-Density Apple Plantation Subsidy (MIDH Scheme)",
    category: "Irrigation & Subsidy",
    readTime: "7 min read",
    publishDate: "March 1, 2026",
    author: "Adv. Tariq Sheikh",
    authorRole: "Horticulture Policy & Subsidy Advisor",
    excerpt: "Everything you need to know about eligibility, required revenue documents (Khasra/Girdawari), and getting up to 50%-80% reimbursement on trellis & plants.",
    content: [
      "The Government of Jammu & Kashmir under the Modified High-Density Plantation Scheme provides financial assistance to private landholders converting traditional orchards or planting fallow land.",
      "Key eligible components include: European certified rootstock material (50% subsidy), GI / Concrete trellis framing (50% subsidy), drip irrigation infrastructure (55% subsidy), and anti-hail safety netting (50% subsidy).",
      "Alilals Agrico assists growers with complete DPR (Detailed Project Report) generation, soil feasibility certificates, and technical vetting required for department approvals."
    ],
    coverImage: "/images/hero/kashmir-orchard-aerial-1.webp",
    tags: ["Govt Subsidy", "MIDH Scheme", "Farmer Support", "Documentation"],
    featured: false
  },
  {
    id: "5",
    slug: "apple-scab-and-mite-management-2026",
    title: "Integrated Apple Scab (Venturia inaequalis) & Red Spider Mite Spray Protocols",
    category: "Pest & Disease",
    readTime: "5 min read",
    publishDate: "March 10, 2026",
    author: "Dr. Farooq Ahmad Lone",
    authorRole: "Chief Horticultural Scientist",
    excerpt: "Preventative fungicide timing from Green Tip to Petal Fall, avoiding chemical resistance and maximizing export grade pack-outs.",
    content: [
      "Apple scab infections occur during spring rains when primary ascospores release from overwintered leaf litter. The critical infection window is from Silver Tip through Pink Bud stage.",
      "A preventative copper-based spray at dormant green-tip followed by systemic protectants (Dodine / Difenoconazole) during high-humidity spells guarantees 99% scab-free fruit.",
      "For European Red Mite control, a Horticultural Mineral Oil (HMO) spray at tight cluster stage suffocates overwintering eggs without harming beneficial predatory mites."
    ],
    coverImage: "/images/harvest/dsc07836.webp",
    tags: ["Apple Scab", "Pest Management", "Spray Calendar", "Mite Control"],
    featured: false
  },
  {
    id: "6",
    slug: "pollinizer-selection-gala-king-roat",
    title: "Pollinator Placement & Bloom Synchronization for High-Density Clones",
    category: "Orchard Management",
    readTime: "4 min read",
    publishDate: "March 18, 2026",
    author: "Er. Mudasir Mir",
    authorRole: "Head of Soil Chemistry, Chadoora Lab",
    excerpt: "Why planting 12%-15% Granny Smith and Manchurian Crabapple pollinators is essential for uniform fruit setting and seed count.",
    content: [
      "Modern high-density apple cultivars (like Gala Schniga and King Roat) are self-incompatible. They require foreign pollen transferred by bees to trigger high fruit set.",
      "We recommend inter-planting certified Granny Smith or Crabapple pollinators every 8th to 10th tree in the row, ensuring seamless overlapping bloom windows.",
      "Adequate cross-pollination ensures a full seed complement (8-10 seeds per apple), which prevents premature fruit drop and produces symmetrical, beautifully shaped fruit."
    ],
    coverImage: "/images/varieties/golden-delicious.webp",
    tags: ["Pollinators", "Granny Smith", "Bloom Season", "Fruit Setting"],
    featured: false
  }
];
