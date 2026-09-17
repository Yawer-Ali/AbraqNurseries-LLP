export interface FAQItem {
  question: string;
  answer: string;
  category: "Saplings" | "Orchard Development" | "Support" | "Orders";
}

export const faqItems: FAQItem[] = [
  {
    question: "What fruit varieties do you supply saplings for?",
    answer:
      "We supply grafted saplings for 25+ varieties including apples (Ambri, Maharaji, Delicious varieties), cherries, pears (Babugosha), plums, apricots, pomegranates, almonds, and walnuts. All saplings are certified disease-free and grafted on appropriate clonal rootstocks.",
    category: "Saplings",
  },
  {
    question: "How many saplings should I plant per acre?",
    answer:
      "For traditional orchards, 200–275 trees per acre (6m x 4m or 5m x 3m spacing). For high-density planting (HDP) with dwarfing rootstocks like M9, you can plant 1,200–1,600 trees per acre (1.5m x 2.5m or 1.2m x 2m). We help you decide based on your land, budget, and goals.",
    category: "Orchard Development",
  },
  {
    question: "Do you provide ongoing support after orchard development?",
    answer:
      "Yes. Our orchard development package includes first-year care and monitoring. After that, we offer annual maintenance contracts (AMC) and on-call support for pruning, pest management, and nutrition planning. Many of our clients have been with us for 5+ years.",
    category: "Support",
  },
  {
    question: "Can you help with government subsidies and schemes?",
    answer:
      "Yes. We assist with documentation for horticulture schemes including the High-Density Plantation scheme, MIDH (Mission for Integrated Development of Horticulture), and PM Kisan Sampada. Our consulting practice handles subsidy paperwork and project reports.",
    category: "Support",
  },
  {
    question: "What is the best time to plant saplings in Kashmir?",
    answer:
      "The optimal planting windows in Kashmir are: Autumn (October–November) after leaf fall, and early Spring (February–March) before bud break. Autumn planting is generally preferred as roots establish before the spring growth flush. We schedule deliveries accordingly.",
    category: "Saplings",
  },
  {
    question: "Do you deliver saplings outside Srinagar?",
    answer:
      "Yes, we deliver across all districts of Jammu & Kashmir. For bulk orders (500+ saplings), we can arrange transport to your site. For smaller orders, pickup from our Wazabagh nursery is recommended to ensure sapling quality during transit.",
    category: "Orders",
  },
  {
    question: "What does a soil test include and why do I need one?",
    answer:
      "Our soil test covers pH, electrical conductivity, organic carbon, nitrogen, phosphorus, potassium, and micronutrients. It's essential before planting to determine if your soil is suitable for your target crop and what amendments are needed. Testing costs ₹1,500 per sample.",
    category: "Orchard Development",
  },
  {
    question: "How long until my orchard produces fruit?",
    answer:
      "It depends on the variety and rootstock. High-density apple orchards on M9 rootstock can produce a small commercial harvest in Year 2–3. Traditional orchards typically take 5–6 years. Cherries and plums bear in 3–4 years, while almonds and walnuts take 4–5 years.",
    category: "Orchard Development",
  },
];
