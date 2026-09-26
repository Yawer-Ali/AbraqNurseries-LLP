export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  process: { step: string; description: string }[];
  pricing: string;
}

export const services: Service[] = [
  {
    id: "orchard-development",
    title: "Orchard Development",
    shortTitle: "Orchard Development",
    tagline: "Turnkey orchard establishment",
    description:
      "End-to-end orchard development — from land assessment and soil testing to planting, irrigation, and first-harvest support.",
    longDescription:
      "We transform raw land into productive orchards. Our team handles site assessment, soil analysis, variety selection based on micro-climate, layout planning, planting, drip irrigation installation, and full first-year care. We've developed over 200 orchards across 12 districts of J&K.",
    icon: "sprout",
    image: "/images/real/young-orchard-block-1600.webp",
    features: [
      "Land & soil suitability assessment",
      "Variety selection by micro-climate",
      "Layout & planting design",
      "Drip irrigation setup",
      "First-year care & monitoring",
      "Yield projection reports",
    ],
    process: [
      { step: "Site Survey", description: "We visit your land, assess soil, slope, water access, and micro-climate conditions." },
      { step: "Soil Testing", description: "Lab analysis of pH, nutrients, and organic matter to determine amendment needs." },
      { step: "Design & Planning", description: "Variety selection, planting layout, irrigation design, and 5-year yield projection." },
      { step: "Planting", description: "Grafted saplings planted with proper spacing, staking, and initial care protocols." },
      { step: "Establishment Care", description: "First-year monitoring — pruning, fertilization, pest management, and growth tracking." },
    ],
    pricing: "From ₹2.5 lakh / acre (includes saplings, planting, and first-year support)",
  },
  {
    id: "nursery-saplings",
    title: "Nursery Plants & Saplings",
    shortTitle: "Nursery & Saplings",
    tagline: "Certified, grafted, disease-free",
    description:
      "Grafted and certified disease-free saplings from our nursery — 25+ fruit varieties adapted to Kashmir's climate.",
    longDescription:
      "Our nursery at Wazabagh produces grafted saplings on certified rootstocks for apples, cherries, pears, plums, apricots, pomegranates, almonds, and walnuts. Every sapling is disease-free, climate-matched, and comes with planting guidance. Bulk orders for orchard developers are our specialty.",
    icon: "leaf",
    image: "/images/real/planting-sapling-father-son-1600.webp",
    features: [
      "25+ fruit varieties",
      "Certified disease-free stock",
      "Grafted on clonal rootstocks",
      "Climate-zone matching",
      "Bulk & retail orders",
      "Planting guidance included",
    ],
    process: [
      { step: "Variety Selection", description: "Choose from our catalog or get recommendations based on your location and goals." },
      { step: "Order & Scheduling", description: "We confirm availability and schedule delivery for the optimal planting window." },
      { step: "Quality Check", description: "Each sapling is inspected for graft union, root health, and disease-free status." },
      { step: "Delivery", description: "Carefully packed and transported to your site, ready for planting." },
    ],
    pricing: "From ₹120 / sapling (varies by variety and rootstock)",
  },
  {
    id: "scientific-plantation",
    title: "Scientific Plantation Support",
    shortTitle: "Scientific Plantation",
    tagline: "Modern horticulture practices",
    description:
      "Technical support for existing orchards — pruning, fertilization, pest management, and modern training systems.",
    longDescription:
      "We bring scientific horticulture to your existing orchard. Our experts provide seasonal pruning, nutrient management plans, integrated pest and disease management, high-density planting systems (HDP), and canopy management. We help you maximize yield and fruit quality using modern, sustainable practices.",
    icon: "scissors",
    image: "/images/real/tractor-spraying-bloom-1600.webp",
    features: [
      "Seasonal pruning & training",
      "Soil & nutrient management",
      "Integrated pest management (IPM)",
      "High-density planting (HDP) systems",
      "Canopy management",
      "Drought & frost protection",
    ],
    process: [
      { step: "Orchard Assessment", description: "We evaluate tree health, soil condition, pest pressure, and current practices." },
      { step: "Action Plan", description: "A seasonal calendar of interventions — pruning, spraying, fertilization, irrigation." },
      { step: "Implementation", description: "Our team executes the plan on-site, training your staff as we go." },
      { step: "Monitoring", description: "Regular visits to track progress and adjust the plan based on results." },
    ],
    pricing: "Custom quotes based on acreage and scope — contact for assessment",
  },
  {
    id: "soil-testing",
    title: "Soil & Water Testing",
    shortTitle: "Soil & Water Testing",
    tagline: "Lab-grade analysis",
    description:
      "Comprehensive soil and water analysis to determine suitability for orchard establishment and nutrient management.",
    longDescription:
      "Before you plant, know your soil. Our lab partners provide detailed analysis of pH, electrical conductivity, organic carbon, macro and micronutrients, and water quality. Results include amendment recommendations tailored to your target crop. Essential for new orchard sites and diagnosing problems in existing ones.",
    icon: "flask",
    image: "/images/real/soil-probe-drip-1600.webp",
    features: [
      "pH & EC analysis",
      "Macro & micronutrient profiling",
      "Organic carbon assessment",
      "Water quality testing",
      "Crop-specific recommendations",
      "Amendment calculation",
    ],
    process: [
      { step: "Sample Collection", description: "We collect representative soil and water samples from your site." },
      { step: "Lab Analysis", description: "Samples processed at our partner laboratory for comprehensive parameter testing." },
      { step: "Report", description: "Detailed report with results, interpretation, and amendment recommendations." },
      { step: "Consultation", description: "One-on-one session to discuss findings and next steps for your orchard." },
    ],
    pricing: "₹1,500 / sample (soil or water) — bulk discounts available",
  },
  {
    id: "consulting",
    title: "Horticulture Consulting",
    shortTitle: "Consulting",
    tagline: "Expert guidance",
    description:
      "Advisory services for growers, investors, and institutions — orchard planning, feasibility studies, and training.",
    longDescription:
      "Our consulting practice serves everyone from smallholders to large investors and government programs. We provide feasibility studies, orchard business plans, subsidy documentation, technical training for field staff, and ongoing advisory retainer arrangements. We also work with institutions on research and extension projects.",
    icon: "compass",
    image: "/images/real/field-demonstration-1600.webp",
    features: [
      "Feasibility studies",
      "Orchard business plans",
      "Subsidy & scheme documentation",
      "Staff training programs",
      "Research collaboration",
      "Retainer advisory",
    ],
    process: [
      { step: "Needs Assessment", description: "We discuss your goals, land, budget, and timeline to scope the engagement." },
      { step: "Proposal", description: "A detailed proposal with deliverables, timeline, and fee structure." },
      { step: "Execution", description: "On-site visits, reports, training sessions, and ongoing communication." },
      { step: "Follow-up", description: "Post-engagement support and access to our network of suppliers and buyers." },
    ],
    pricing: "Custom quotes — contact for consultation",
  },
];
