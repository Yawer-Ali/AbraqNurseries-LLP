export interface Variety {
  id: string;
  name: string;
  scientificName: string;
  category: "Apple" | "Cherry" | "Pear" | "Plum" | "Apricot" | "Pomegranate" | "Almond" | "Walnut";
  season: string;
  origin: string;
  description: string;
  /** Real photograph; empty string renders a botanical illustration instead */
  image: string;
  flavorProfile: string;
  yieldTime: string;
  climate: string;
  temperature: string;
  rainfall: string;
  soilType: string;
  features: string[];
}

export const varieties: Variety[] = [
  {
    id: "kashmiri-ambri",
    name: "Kashmiri Ambri",
    scientificName: "Malus domestica 'Ambri'",
    category: "Apple",
    season: "Oct – Nov",
    origin: "Kashmir Valley",
    description:
      "The crown jewel of Kashmiri apples — a late-harvest variety with crisp, aromatic flesh and a distinctive blush-red skin. Ambri commands premium prices and is prized for its exceptional keeping quality.",
    image: "/images/real/apples-pair-closeup-1600.webp",
    flavorProfile: "Sweet · Aromatic · Crisp",
    yieldTime: "5–6 years after planting",
    climate: "Temperate / Highland",
    temperature: "15–25°C optimal",
    rainfall: "800–1200mm",
    soilType: "Well-drained loamy",
    features: ["Long shelf life", "Premium market value", "Disease-resistant rootstock", "High-altitude adapted"],
  },
  {
    id: "maharaji-apple",
    name: "Maharaji",
    scientificName: "Malus domestica 'Maharaji'",
    category: "Apple",
    season: "Sep – Oct",
    origin: "Kashmir Valley",
    description:
      "A medium-to-large apple with a pale yellow skin and red stripes. Known for its juicy, sub-acid flavor and excellent cooking properties. A reliable bearer suited to mid-altitude orchards.",
    image: "/images/real/apple-cluster-branch-1600.webp",
    flavorProfile: "Juicy · Sub-acid · Versatile",
    yieldTime: "4–5 years after planting",
    climate: "Temperate / Highland",
    temperature: "15–25°C optimal",
    rainfall: "700–1000mm",
    soilType: "Loamy, well-drained",
    features: ["Reliable bearer", "Dual-purpose (table + cooking)", "Good transport tolerance", "Mid-altitude suited"],
  },
  {
    id: "kashmiri-cherry",
    name: "Kashmiri Cherry",
    scientificName: "Prunus avium",
    category: "Cherry",
    season: "May – Jun",
    origin: "Kashmir Valley",
    description:
      "Deep red, heart-shaped cherries with firm, sweet flesh. Kashmir's short cherry season produces some of India's finest fruit, grown at 1,500–2,500m elevation for optimal color and sugar development.",
    image: "",
    flavorProfile: "Sweet · Firm · Rich",
    yieldTime: "3–4 years after planting",
    climate: "Cool temperate",
    temperature: "10–20°C optimal",
    rainfall: "600–900mm",
    soilType: "Sandy loam, well-drained",
    features: ["Early harvest window", "High market demand", "Export quality", "Frost-sensitive — needs protection"],
  },
  {
    id: "babugosha-pear",
    name: "Babugosha Pear",
    scientificName: "Pyrus communis 'Babugosha'",
    category: "Pear",
    season: "Aug – Sep",
    origin: "North India",
    description:
      "A soft, juicy pear with greenish-yellow skin and a buttery texture. Babugosha is the most popular pear variety in Kashmir, loved for its melting flesh and mild sweet flavor.",
    image: "",
    flavorProfile: "Buttery · Mild · Juicy",
    yieldTime: "4–5 years after planting",
    climate: "Temperate",
    temperature: "15–28°C optimal",
    rainfall: "700–1000mm",
    soilType: "Deep loamy",
    features: ["Self-pollinating", "High yield potential", "Soft flesh — handle with care", "Short shelf life"],
  },
  {
    id: "kashmiri-plum",
    name: "Kashmiri Plum",
    scientificName: "Prunus domestica",
    category: "Plum",
    season: "Jul – Aug",
    origin: "Kashmir Valley",
    description:
      "Small to medium plums with deep purple skin and golden-yellow flesh. Tart-sweet with a satisfying bite, excellent for fresh eating, preserves, and drying.",
    image: "",
    flavorProfile: "Tart-sweet · Firm · Versatile",
    yieldTime: "3–4 years after planting",
    climate: "Cool temperate",
    temperature: "12–22°C optimal",
    rainfall: "600–800mm",
    soilType: "Loamy, well-drained",
    features: ["Early bearer", "Good for preserves", "Multiple use (fresh/dry)", "Cold-hardy"],
  },
  {
    id: "kashmiri-apricot",
    name: "Kashmiri Apricot",
    scientificName: "Prunus armeniaca",
    category: "Apricot",
    season: "Jun – Jul",
    origin: "Ladakh & Kashmir",
    description:
      "Golden-orange apricots with a velvety skin and rich, sweet-tart flavor. Grown in the high-altitude regions of Ladakh and Kashmir, these apricots are sun-dried for premium export markets.",
    image: "",
    flavorProfile: "Sweet-tart · Velvety · Rich",
    yieldTime: "3–5 years after planting",
    climate: "Cold dry / Highland",
    temperature: "10–25°C optimal",
    rainfall: "400–600mm",
    soilType: "Sandy loam",
    features: ["Drought-tolerant", "Sun-drying potential", "High altitude adapted", "Early harvest"],
  },
  {
    id: "kashmiri-pomegranate",
    name: "Anar Pomegranate",
    scientificName: "Punica granatum",
    category: "Pomegranate",
    season: "Sep – Nov",
    origin: "Kashmir Valley",
    description:
      "Large pomegranates with ruby-red arils and a sweet-tart juice. Rich in antioxidants and prized for both fresh consumption and juice extraction. A growing segment in Kashmir's horticulture.",
    image: "",
    flavorProfile: "Sweet-tart · Juicy · Antioxidant-rich",
    yieldTime: "3–4 years after planting",
    climate: "Semi-arid / Temperate",
    temperature: "18–30°C optimal",
    rainfall: "500–800mm",
    soilType: "Well-drained, slightly alkaline",
    features: ["High antioxidant content", "Long shelf life", "Drought-tolerant once established", "Juice extraction quality"],
  },
  {
    id: "kashmiri-almond",
    name: "Kashmiri Almond",
    scientificName: "Prunus dulcis",
    category: "Almond",
    season: "Aug – Sep",
    origin: "Kashmir Valley",
    description:
      "Kashmir's almond blossoms herald spring across the valley. The nuts are sweet, rich in oil, and harvested from hard-shelled varieties adapted to the region's cold winters and dry summers.",
    image: "",
    flavorProfile: "Nutty · Sweet · Oil-rich",
    yieldTime: "4–5 years after planting",
    climate: "Cold temperate",
    temperature: "15–30°C optimal",
    rainfall: "400–600mm",
    soilType: "Deep, well-drained",
    features: ["Spring blossom tourism", "High oil content", "Drought-tolerant", "Long-lived trees"],
  },
];
