export interface AppleVariety {
  name: string;
  category: string;
  origin: string;
  color: string;
  harvestSeason: string;
  flavor: string;
  marketRateGradeA: string;
  chillingHours: string;
  image: string;
  highlights: string[];
}

export interface RootstockInfo {
  name: string;
  vigor: string;
  treeDensityPerKanal: number;
  fruitingStartYear: number;
  fullProductionYear: number;
  averageYieldPerTreeKg: number;
  bestSuitedFor: string;
}

export const appleVarieties: AppleVariety[] = [
  {
    name: "Gala Schniga® SchniCo Red",
    category: "High-Density Commercial",
    origin: "Italy / South Tyrol",
    color: "Deep Ruby Crimson Striated",
    harvestSeason: "Early (Mid-August to Early September)",
    flavor: "Extra sweet, crisp, juicy with honey aromatics",
    marketRateGradeA: "₹140 - ₹190 / kg",
    chillingHours: "700 - 800 hours",
    image: "/images/varieties/gala-schniga.webp",
    highlights: ["Early Mandi entry fetching highest premium prices", "Uniform 100% full-color skin development", "High consumer demand in Tier-1 metro markets"]
  },
  {
    name: "King Roat® Red Delicious",
    category: "High-Density Commercial",
    origin: "Italy",
    color: "Intense Luminous Dark Red",
    harvestSeason: "Mid-Season (Mid-September)",
    flavor: "Sweet, mildly aromatic, firm flesh",
    marketRateGradeA: "₹130 - ₹170 / kg",
    chillingHours: "800 - 900 hours",
    image: "/images/varieties/king-roat.webp",
    highlights: ["Exceptional shelf-life in cold storage (CA store)", "Classic conical 5-crowned fruit shape", "Rapid color development even on lower branches"]
  },
  {
    name: "Jeromine",
    category: "Super-Color Red Delicious Mutation",
    origin: "France",
    color: "100% Solid Glossy Burgundy Red",
    harvestSeason: "Early-Mid (Early September)",
    flavor: "Very sweet, crunch with fine texture",
    marketRateGradeA: "₹135 - ₹175 / kg",
    chillingHours: "800 - 900 hours",
    image: "/images/varieties/jeromine.webp",
    highlights: ["Earliest coloring red clone in Kashmir", "High percentage of Grade-A pack-out (90%+)", "Superb storage resilience"]
  },
  {
    name: "Red Jonaprince",
    category: "High-Density Triploid Specialist",
    origin: "Netherlands",
    color: "Intense Deep Glowing Red",
    harvestSeason: "Mid-to-Late September",
    flavor: "Harmonious sweet-tart balance, high brix",
    marketRateGradeA: "₹135 - ₹180 / kg",
    chillingHours: "750 - 850 hours",
    image: "/images/varieties/red-jonaprince.webp",
    highlights: ["Heavy regular yield with early color break", "Excellent firm texture for long transit", "Superb processing and fresh table market value"]
  },
  {
    name: "Fuji (Zhen Aztec / Kiku)",
    category: "Late Harvest Sweet Specialist",
    origin: "Japan / Europe",
    color: "Blushed Carmine Pinkish Red",
    harvestSeason: "Late (October to November)",
    flavor: "Extremely high sugar brix, crisp and dense",
    marketRateGradeA: "₹150 - ₹200 / kg",
    chillingHours: "800 - 900 hours",
    image: "/images/varieties/fuji.webp",
    highlights: ["Longest natural storage life among commercial apples", "Superior eating quality loved by consumers", "Premium festive and winter market prices"]
  },
  {
    name: "Golden Delicious (Reinders®)",
    category: "Universal Pollinator & Market Staple",
    origin: "Netherlands / USA",
    color: "Smooth Golden Yellow Russet-Free",
    harvestSeason: "Mid-Season (Late September)",
    flavor: "Mildly honeyed, sweet and aromatic",
    marketRateGradeA: "₹110 - ₹150 / kg",
    chillingHours: "700 hours",
    image: "/images/varieties/golden-delicious.webp",
    highlights: ["Crucial high-efficiency pollinizer for Red & Gala blocks", "Smooth russet-free clone selected for Kashmir", "Reliable annual heavy cropper"]
  },
  {
    name: "Memma Master",
    category: "High-Altitude Ultra Color Gala",
    origin: "Europe",
    color: "Full Solid Crimson Red",
    harvestSeason: "Mid-August",
    flavor: "Crisp, aromatic and refreshing",
    marketRateGradeA: "₹140 - ₹185 / kg",
    chillingHours: "700 hours",
    image: "/images/varieties/memma-master.webp",
    highlights: ["Complete early coloration even in valley bottoms", "Superior packout grade with uniform sizing", "High tolerance to sunburn"]
  }
];

export const rootstockDetails: Record<string, RootstockInfo> = {
  "M9-T337": {
    name: "M9-T337 (Dwarf)",
    vigor: "Dwarfing (30-35% of seedling tree size)",
    treeDensityPerKanal: 330, // ~2640 trees/acre
    fruitingStartYear: 2,
    fullProductionYear: 4,
    averageYieldPerTreeKg: 12,
    bestSuitedFor: "High-density trellis with flat/gentle fertile soils and reliable drip irrigation."
  },
  "MM106": {
    name: "MM106 (Semi-Dwarf)",
    vigor: "Semi-Dwarfing (60-70% of seedling tree size)",
    treeDensityPerKanal: 180,
    fruitingStartYear: 3,
    fullProductionYear: 5,
    averageYieldPerTreeKg: 22,
    bestSuitedFor: "Medium soil fertility, sloping slopes, requiring moderate support."
  },
  "MM111": {
    name: "MM111 (Semi-Standard)",
    vigor: "Semi-Standard (75-85% of seedling tree size)",
    treeDensityPerKanal: 110,
    fruitingStartYear: 4,
    fullProductionYear: 6,
    averageYieldPerTreeKg: 35,
    bestSuitedFor: "Drought-prone Karewa soils, heavier soils, or orchards with limited water supply."
  }
};
