export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  year: string;
  category: "Orchard Development" | "Nursery Supply" | "Consulting" | "Plantation Support";
  description: string;
  image: string;
  results: string[];
}

export const projects: Project[] = [
  {
    id: "shopian-apple-orchard",
    title: "Shopian High-Density Apple Orchard",
    location: "Shopian, South Kashmir",
    area: "15 acres",
    year: "2024",
    category: "Orchard Development",
    description:
      "Turnkey development of a 15-acre high-density apple orchard using Ambri and Maharaji varieties on M9 rootstock. Complete with drip irrigation and trellis support system.",
    image: "/images/real/high-density-rows-laden-1600.webp",
    results: ["98% sapling survival rate", "First commercial harvest expected Year 3", "Drip irrigation saving 40% water"],
  },
  {
    id: "baramulla-cherry-project",
    title: "Baramulla Cherry Orchard Revival",
    location: "Baramulla, North Kashmir",
    area: "8 acres",
    year: "2023",
    category: "Plantation Support",
    description:
      "Revitalized an aging cherry orchard with scientific pruning, new variety grafting, and integrated pest management. Production doubled within two seasons.",
    image: "/images/real/adding-manure-1600.webp",
    results: ["100% yield increase in 2 years", "Export-grade fruit quality achieved", "Pest incidence reduced by 70%"],
  },
  {
    id: "kupwara-nursery-supply",
    title: "Kupwara Cooperative Nursery Supply",
    location: "Kupwara, North Kashmir",
    area: "12,000 saplings",
    year: "2024",
    category: "Nursery Supply",
    description:
      "Supplied 12,000 grafted apple and pear saplings to a farmer cooperative across 6 villages. Included planting training and first-year monitoring.",
    image: "/images/real/planting-team-1600.webp",
    results: ["12,000 saplings delivered", "6 villages covered", "96% establishment success rate"],
  },
  {
    id: "anantnag-consulting",
    title: "Anantnag Orchard Feasibility Study",
    location: "Anantnag, South Kashmir",
    area: "25 acres",
    year: "2023",
    category: "Consulting",
    description:
      "Conducted a comprehensive feasibility study for a 25-acre mixed-fruit orchard — soil testing, water analysis, variety selection, and a 10-year financial projection.",
    image: "/images/real/survey-total-station-1600.webp",
    results: ["Full feasibility report delivered", "3 varieties recommended for site", "Subsidy documentation prepared"],
  },
  {
    id: "budgam-almond-plantation",
    title: "Budgam Almond Plantation",
    location: "Budgam, Central Kashmir",
    area: "6 acres",
    year: "2024",
    category: "Orchard Development",
    description:
      "Established a 6-acre almond orchard with Kashmiri sweet kernel varieties. The spring blossom also supports local bee-keeping and agro-tourism potential.",
    image: "/images/real/digging-planting-pits-1600.webp",
    results: ["6 acres planted", "Bee-keeping integration planned", "Tourism pathway designed"],
  },
  {
    id: "srinagar-soil-mapping",
    title: "Srinagar District Soil Mapping",
    location: "Srinagar, Kashmir",
    area: "40+ sites",
    year: "2023",
    category: "Consulting",
    description:
      "Comprehensive soil testing and mapping across 40+ sites in Srinagar district to guide horticulture expansion plans for the region.",
    image: "/images/real/field-layout-measuring-1600.webp",
    results: ["40+ sites analyzed", "Soil suitability map created", "Recommended crop zones identified"],
  },
];
