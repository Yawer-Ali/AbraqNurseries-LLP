export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  district: string;
  area: string;
  variety: string;
  rootstock: string;
  yearEstablished: number;
  year2Yield: string;
  fullYield: string;
  highlights: string[];
  image: string;
  testimonial: {
    quote: string;
    author: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "shopian-commercial-orchard",
    title: "8-Kanal High-Density Model Orchard",
    client: "Bashir Ahmad Mir & Sons",
    district: "Shopian (Kashmir)",
    area: "8 Kanals (~1 Acre)",
    variety: "Gala Schniga® & King Roat®",
    rootstock: "M9-T337",
    yearEstablished: 2023,
    year2Yield: "8.5 Metric Tonnes",
    fullYield: "28 Metric Tonnes (Projected Yr 4)",
    highlights: [
      "2,640 certified knip-boom trees on 4-wire concrete trellis",
      "Automated solar-powered drip fertigation system",
      "Retractable hail netting withstanding 80km/h wind resistance",
      "94% Grade-A crimson pack-out fetching ₹175/kg farm gate"
    ],
    image: "/images/hero/kashmir-orchard-aerial-1.webp",
    testimonial: {
      quote: "Abraq Nurseries LLP handled everything from certified plant supply to trellis erection. We harvested our first commercial crop in Year 2, which was unimaginable with our traditional trees.",
      author: "Bashir Ahmad Mir, Shopian"
    }
  },
  {
    id: "pulwama-karewa-transformation",
    title: "16-Kanal Karewa Plateau Turnkey Setup",
    client: "Gulmarg Agro Ventures",
    district: "Pulwama (Kashmir)",
    area: "16 Kanals (2 Acres)",
    variety: "Jeromine & Red Velox®",
    rootstock: "M9-T337 + MM106 hybrid",
    yearEstablished: 2022,
    year2Yield: "18 Metric Tonnes",
    fullYield: "55 Metric Tonnes",
    highlights: [
      "Prior borehole water sounding identified deep aquifer at 140m",
      "Soil acidity neutralization using custom agricultural gypsum protocol",
      "Complete MIDH subsidy documentation approved in 45 days",
      "Full export shipment to Bengaluru & Delhi premium retail"
    ],
    image: "/images/harvest/dsc07836.webp",
    testimonial: {
      quote: "Our Karewa land was lying fallow due to water scarcity. Abraq Nurseries detected groundwater with electromagnetic sounding and installed precision drip. Today it's our most profitable asset.",
      author: "Mushtaq Ahmad Lone, Pulwama"
    }
  },
  {
    id: "baramulla-super-density-block",
    title: "12-Kanal Apple Orchard Modernization",
    client: "Rafiabad Orchardists Cooperative",
    district: "Baramulla (Kashmir)",
    area: "12 Kanals (1.5 Acres)",
    variety: "King Roat® Red Delicious & Granny Smith",
    rootstock: "M9-T337",
    yearEstablished: 2023,
    year2Yield: "14 Metric Tonnes",
    fullYield: "42 Metric Tonnes",
    highlights: [
      "Replaced 60-year-old declining traditional seedling trees",
      "GI galvanized steel trellis with snow load reinforcement",
      "14-test soil mapping correcting severe potassium deficiency",
      "Year-round physical pruning workshops conducted for farm workers"
    ],
    image: "/images/trellis/dsc08851.webp",
    testimonial: {
      quote: "The yield per kanal is 4 times higher than our ancestral orchard. The fruit size and color uniformity made grading and sorting effortless.",
      author: "Mohammad Shafi Bhat, Baramulla"
    }
  },
  {
    id: "anantnag-high-altitude-estate",
    title: "6-Kanal High-Altitude Apple Project",
    client: "Pahalgam Valley Orchards",
    district: "Anantnag (Kashmir)",
    area: "6 Kanals",
    variety: "Gala Schniga & Jeromine",
    rootstock: "M9-T337",
    yearEstablished: 2024,
    year2Yield: "Early Vigorous Growth Stage",
    fullYield: "21 Metric Tonnes (Projected)",
    highlights: [
      "Elevated terrain (1,850m MSL) with high chilling hours",
      "UV-treated heavy canopy anti-hail net installation",
      "Custom fertigation dosage aligned with colder root temperature"
    ],
    image: "/images/hero/kashmir-orchard-aerial-3.webp",
    testimonial: {
      quote: "The quality of European plants and the strength of the trellis posts gave us confidence to invest at higher altitude.",
      author: "Adil Hussain, Anantnag"
    }
  }
];
