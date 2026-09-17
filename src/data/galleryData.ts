export interface GalleryItem {
  id: number;
  title: string;
  category: "Trellis & Setup" | "Drip Irrigation" | "Harvest & Fruit" | "Field Operations" | "Nursery & Soil";
  location: string;
  image: string;
  description: string;
  rotation: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "High-Density Trellis Orchard Aerial",
    category: "Trellis & Setup",
    location: "Shopian, Kashmir",
    image: "/images/hero/kashmir-orchard-aerial-1.webp",
    description: "Commercial high-density installation with pre-stressed concrete trellis & 4-tier galvanized wire support.",
    rotation: "-rotate-2"
  },
  {
    id: 2,
    title: "Gala Schniga Harvest & Canopy Load",
    category: "Harvest & Fruit",
    location: "Pulwama, Kashmir",
    image: "/images/harvest/dsc07836.webp",
    description: "2nd season fruiting exhibiting 100% crimson color grading and uniform 75-80mm fruit size.",
    rotation: "rotate-3"
  },
  {
    id: 3,
    title: "Trellis Rigging & Wire Tensioning",
    category: "Trellis & Setup",
    location: "Baramulla, Kashmir",
    image: "/images/trellis/dsc08851.webp",
    description: "Precision post-driving and galvanized cable rigging engineered for heavy Kashmir winter snow loads.",
    rotation: "-rotate-1"
  },
  {
    id: 4,
    title: "Mother Stool Bed Propagation",
    category: "Nursery & Soil",
    location: "Abraq Stool Nursery Facility",
    image: "/images/nursery/dsc03589.webp",
    description: "Certified virus-indexed layering stool beds producing vigorous M9-T337 clonal rootstocks.",
    rotation: "rotate-2"
  },
  {
    id: 5,
    title: "Precision Chip-Budding & Omega Grafting",
    category: "Nursery & Soil",
    location: "Grafting Propagation Tunnel",
    image: "/images/nursery/dsc03608.webp",
    description: "99% graft union success rate fusing high-coloring Italian clones with dwarfing M9 rootstocks.",
    rotation: "-rotate-3"
  },
  {
    id: 6,
    title: "2-Year Feathered Knip-Boom Saplings",
    category: "Nursery & Soil",
    location: "Acclimatization Polyhouse",
    image: "/images/nursery/dsc03616.webp",
    description: "Quarantine-inspected, viral-free knip boom apple trees with 5-8 productive lateral feathers.",
    rotation: "rotate-1"
  },
  {
    id: 7,
    title: "High-Altitude Trellis Line Alignment",
    category: "Trellis & Setup",
    location: "Budgam, Kashmir",
    image: "/images/trellis/dsc08866.webp",
    description: "Laser-aligned tree rows and reinforced end-anchors ensuring 15+ year structural stability.",
    rotation: "-rotate-2"
  },
  {
    id: 8,
    title: "King Roat® Color Development Peak",
    category: "Harvest & Fruit",
    location: "Kulgam, Kashmir",
    image: "/images/harvest/dsc07851.webp",
    description: "Remarkable fruit density and spur formation under strict scientific pruning protocols.",
    rotation: "rotate-2"
  },
  {
    id: 9,
    title: "Kashmir High-Density Panorama",
    category: "Field Operations",
    location: "Anantnag, Kashmir",
    image: "/images/hero/kashmir-orchard-aerial-2.webp",
    description: "Panoramic drone survey of turnkey 10-kanal high-density orchard in full bloom.",
    rotation: "-rotate-1"
  },
  {
    id: 10,
    title: "Rootstock Lateral Feather Development",
    category: "Nursery & Soil",
    location: "Central Nursery Hub",
    image: "/images/nursery/dsc03638.webp",
    description: "Well-developed lateral branches on certified clonal rootstocks ready for winter field planting.",
    rotation: "rotate-1"
  },
  {
    id: 11,
    title: "Bumper Harvest Packout on Tree",
    category: "Harvest & Fruit",
    location: "Shopian, Kashmir",
    image: "/images/harvest/dsc07860-2.webp",
    description: "Heavy commercial packout commanding premium prices at Azadpur & Mumbai wholesale.",
    rotation: "-rotate-2"
  },
  {
    id: 12,
    title: "Field Support Staking & Drip Lines",
    category: "Drip Irrigation",
    location: "Pulwama, Kashmir",
    image: "/images/trellis/dsc08911.webp",
    description: "Integrated inline pressure-compensating drip tubes delivering precise nutrition directly to root zones.",
    rotation: "rotate-2"
  }
];
