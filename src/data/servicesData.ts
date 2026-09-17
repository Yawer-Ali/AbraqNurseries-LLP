export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  benefits: string[];
  idealFor: string;
  subsidyEligible: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "high-density-orchard",
    title: "High-Density Orchard Setup",
    badge: "Flagship Service",
    tagline: "Turn your land into a high-yielding, modern apple orchard",
    description: "End-to-end turnkey establishment of high-density apple orchards using European certified rootstocks (M9, MM106, MM111), precision tree training, and galvanized trellis architecture engineered for Kashmir's terrain.",
    iconName: "Trees",
    image: "/images/hero/kashmir-orchard-aerial-2.webp",
    features: [
      "Custom layout design based on sunlight & elevation",
      "Certified viral-free European rootstock plants",
      "Galvanized iron (GI) / pre-stressed concrete trellis support",
      "2nd year commercial fruiting vs. 8-10 years traditionally",
      "3.5x to 5x higher yield per kanal compared to traditional orchards"
    ],
    benefits: [
      "Early Return on Investment (ROI in 3-4 years)",
      "Uniform A-Grade color & fruit size",
      "Effortless harvesting and pesticide spray efficiency"
    ],
    idealFor: "Farmers converting old traditional orchards or developing new commercial land.",
    subsidyEligible: true
  },
  {
    id: "micro-drip-irrigation",
    title: "Micro & Drip Irrigation Systems",
    badge: "Water & Nutrient Precision",
    tagline: "Save up to 60% water while boosting root nutrition",
    description: "Automated drip irrigation and fertigation setups designed specifically for Kashmir's topography and sloping orchards. Direct root-zone delivery of water and soluble fertilizers.",
    iconName: "Droplets",
    image: "/images/trellis/dsc08911.webp",
    features: [
      "Pressure-compensating drip emitters for uniform flow",
      "Integrated Venturi fertigation injectors for plant nutrition",
      "Solar or electric pump compatible filtration units",
      "Frost and UV-resistant piping with 10+ year lifespan",
      "Automated timer valves for scheduled irrigation cycles"
    ],
    benefits: [
      "60% reduction in water consumption",
      "Zero fertilizer wastage via root-targeted feeding",
      "No weed growth in inter-row pathways"
    ],
    idealFor: "Orchards with limited water sources or high-density trellis setups.",
    subsidyEligible: true
  },
  {
    id: "soil-testing-lab",
    title: "Scientific Soil Health & Lab Testing",
    badge: "In-House Laboratory",
    tagline: "Know your soil composition before investing a single rupee",
    description: "State-of-the-art laboratory testing in Chadoora analyzing NPK, soil pH, organic carbon, micronutrients (Zinc, Boron, Calcium), and heavy metals with customized dosage charts.",
    iconName: "FlaskConical",
    image: "/images/nursery/dsc03589.webp",
    features: [
      "14-parameter comprehensive chemical & biological analysis",
      "On-site farm sample collection service across J&K",
      "Digital soil health card with exact NPK & lime requirements",
      "Soil moisture and electrical conductivity (EC) assessment",
      "Direct recommendation for AASH™ and ZIRAAT™ nutrition products"
    ],
    benefits: [
      "Prevent expensive fertilizer overdosing",
      "Correct acidic or alkaline soil imbalances early",
      "Optimize rootstock survival rate from Day 1"
    ],
    idealFor: "All growers planning new plantations or troubleshooting leaf deficiency symptoms.",
    subsidyEligible: false
  },
  {
    id: "hail-safety-netting",
    title: "Hail Protection & Netting Systems",
    badge: "Climate Resilience",
    tagline: "Shield your bumper harvest from unpredictable hailstorms",
    description: "High-tensile, UV-stabilized anti-hail safety netting and canopy structures. Protects blossoms and maturing fruit from hail devastation, excessive sun scald, and bird damage.",
    iconName: "ShieldCheck",
    image: "/images/trellis/dsc08851.webp",
    features: [
      "UV-treated high-density polyethylene (HDPE) netting (10+ year warranty)",
      "Retractable / easy-fold mechanism for winter snow season",
      "Engineered anchor cables withstanding up to 90 km/h wind gusts",
      "Diffuses harsh midday sunlight to prevent apple skin burning",
      "Prevents 100% of seasonal hail-induced crop loss"
    ],
    benefits: [
      "Guaranteed crop security regardless of sudden weather shocks",
      "Preserves fruit surface finish for premium Mandi rates",
      "Qualifies for government horticulture support schemes"
    ],
    idealFor: "High-density growers looking to protect high-value crop investments.",
    subsidyEligible: true
  },
  {
    id: "ground-water-survey",
    title: "Groundwater & Borewell Detection",
    badge: "Geological Survey",
    tagline: "Locate water points with precision before drilling",
    description: "Advanced geophysical hydro-geological sounding and water vein mapping. Identifies water yield potential, fracture zones, and optimal drilling depth across Kashmir valley.",
    iconName: "Compass",
    image: "/images/hero/kashmir-orchard-aerial-4.webp",
    features: [
      "Electromagnetic resistivity and seismic scanning tools",
      "Depth-wise water layer prediction (up to 300+ meters)",
      "Detailed geological strata & yield capacity report",
      "Avoids costly dry borewell drilling failures",
      "Assistance with borewell motor and casing specs"
    ],
    benefits: [
      "Saves up to ₹1.5 Lakhs by avoiding dry drilling attempts",
      "Pinpoint exact GPS coordinate for maximum discharge",
      "Completed in under 3 hours per site"
    ],
    idealFor: "Growers in Karewa and upland plateau belts planning deep borewells.",
    subsidyEligible: false
  },
  {
    id: "orchard-consulting",
    title: "Expert Agri-Consulting & Pruning",
    badge: "Year-Round Advisory",
    tagline: "Guidance from Kashmir's seasoned horticulture specialists",
    description: "Personalized seasonal agronomy support covering winter spur pruning, canopy training, pollinator distribution, spray scheduling against Scab/Mites, and harvest grading.",
    iconName: "UserCheck",
    image: "/images/nursery/dsc03616.webp",
    features: [
      "On-field physical inspections by certified horticulturists",
      "Custom seasonal spray calendars aligned with SKUAST standards",
      "Spindle bush and tall-spindle training workshops for orchard staff",
      "Nutrient deficiency troubleshooting via leaf tissue analysis",
      "Direct phone & WhatsApp hotline with senior agronomists"
    ],
    benefits: [
      "Eliminates guesswork in pest and fungal control",
      "Maximizes percentage of Grade-A export quality apples",
      "Peace of mind with seasoned experts backing your farm"
    ],
    idealFor: "Both new high-density orchard owners and established growers.",
    subsidyEligible: false
  }
];
