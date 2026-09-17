export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "General" | "Cost & Subsidy" | "Orchard Setup" | "Irrigation & Soil";
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is High-Density Apple Plantation and how is it different from traditional orchards?",
    answer: "Traditional apple orchards in Kashmir plant seedling trees spaced 20–22 feet apart, accommodating only 25–30 trees per kanal, which take 8 to 12 years to reach commercial fruiting. High-Density Orchards utilize dwarfing rootstocks (like M9) supported by trellis structures, allowing 300–350 trees per kanal. These modern trees produce commercial crop in Year 2 and full peak yield by Year 4–5, yielding 4 to 5 times higher output of export-grade A-quality apples.",
    category: "General"
  },
  {
    id: 2,
    question: "Are government subsidies available for High-Density Orchards in Jammu & Kashmir?",
    answer: "Yes. Under the Mission for Integrated Development of Horticulture (MIDH) and the UT Government's Modified High-Density Plantation Scheme, eligible farmers in J&K can receive up to 50% to 80% subsidy on plant material, trellis infrastructure, micro-irrigation systems, and anti-hail safety netting. Our team provides complete documentation and technical paperwork to help you claim these subsidies smoothly.",
    category: "Cost & Subsidy"
  },
  {
    id: 3,
    question: "How much does it cost to set up 1 Kanal of high-density orchard?",
    answer: "A complete turnkey installation (including certified M9 plants, bamboo/concrete/GI trellis system, automated drip irrigation, and initial soil prep) typically ranges between ₹1.4 Lakhs to ₹2.2 Lakhs per kanal before government subsidy deductions. With the subsidy schemes, the net farmer contribution is significantly lower. Use our interactive Orchard Estimator below for an exact breakdown.",
    category: "Cost & Subsidy"
  },
  {
    id: 4,
    question: "Is Drip Irrigation mandatory for High-Density Orchards?",
    answer: "Yes, dwarf rootstocks (such as M9) have compact, shallow root systems that cannot search deep underground for moisture. Consistent, measured moisture and soluble fertigation are essential for vigorous tree growth, fruit sizing, and flower bud formation. Drip irrigation prevents water stress and reduces water consumption by 60% compared to flood irrigation.",
    category: "Irrigation & Soil"
  },
  {
    id: 5,
    question: "Why is Soil Testing necessary before planting?",
    answer: "Apple rootstocks perform best in well-drained loam to clay-loam soils with a pH between 6.0 and 7.2. Our Chadoora laboratory testing identifies soil acidity, NPK deficiencies, organic matter levels, and root-damaging nematodes beforehand. This allows us to apply precise corrective treatments (such as agricultural lime or organic compost) before planting, guaranteeing 98%+ plant survival.",
    category: "Irrigation & Soil"
  },
  {
    id: 6,
    question: "Which apple varieties fetch the best market price in Delhi, Mumbai, and South India?",
    answer: "Currently, early colored clones like Gala Schniga® SchniCo Red, King Roat® Red Delicious, Jeromine, and Red Velox® command the highest premiums (₹140–₹190/kg at farm gate) because they develop 100% intense crimson color early in the season, enter the market before traditional Himachal and Kashmiri delicious crops, and offer superior cold storage longevity.",
    category: "Orchard Setup"
  },
  {
    id: 7,
    question: "How do you protect high-density trees from winter snow and strong winds?",
    answer: "We engineer heavy-duty galvanized iron (GI) wire trellis systems with angled end-post anchors, concrete tensioners, and reinforced intermediate posts calculated for Kashmiri snowfall loads. During winter, tree leaders are trained vertically and anti-hail netting is safely gathered into protective sleeves to avoid snow buildup.",
    category: "Orchard Setup"
  },
  {
    id: 8,
    question: "How can I book an on-site inspection or consultation?",
    answer: "You can click 'Book Free Site Inspection', call our toll-free office desk at 0194-796-1490, or message us directly on WhatsApp with your land location and area. Our field agronomist will visit your orchard site within 48 to 72 hours.",
    category: "General"
  }
];
