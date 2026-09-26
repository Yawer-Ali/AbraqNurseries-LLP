/**
 * Videos from the Abraq Nurseries LLP YouTube channel (all are vertical Shorts).
 * https://www.youtube.com/@AbraqNurseriesLLP
 *
 * Titles/captions below were written from each video's actual footage and, where
 * speech exists, its YouTube auto-captions. `ytTitle` keeps the original upload
 * title for reference. Speaker names come from auto-captions / on-screen lower
 * thirds — verify spellings with the team before publishing widely.
 *
 * Not listed (exact re-uploads of videos below):
 *   QDaE3eH0gEk ("Flowering")        = PZfOqeoDPZI
 *   h_jHLi9Qtv0 ("Orchard")          = iQ4BR1uiM1w
 *   lMLKG7IUrFQ ("26 August 2026")   = v6ftyeYwcS0
 */

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@AbraqNurseriesLLP";

export type VideoCategory =
  | "Layout & Infrastructure"
  | "Plantation"
  | "Bloom & Growth"
  | "Harvest"
  | "Grower Voices"
  | "Expert Advice";

export interface ChannelVideo {
  id: string;
  ytTitle: string;
  title: string;
  caption: string;
  category: VideoCategory;
  /** seconds */
  duration: number;
  uploaded: string;
  speaker?: string;
  role?: string;
  place?: string;
}

export const videoCategories: VideoCategory[] = [
  "Layout & Infrastructure",
  "Plantation",
  "Bloom & Growth",
  "Harvest",
  "Grower Voices",
  "Expert Advice",
];

export const channelVideos: ChannelVideo[] = [
  // ——— Layout & Infrastructure ———
  {
    id: "BObJ6rr_VcA",
    ytTitle: "layout",
    title: "Orchard Solutions, at a glance",
    caption: "High-density orchard development with advanced drip and trellis systems on pre-stressed concrete and GI poles.",
    category: "Layout & Infrastructure",
    duration: 26,
    uploaded: "2026-08-26",
  },
  {
    id: "267HeSApgXs",
    ytTitle: "layout",
    title: "Marking the diagonal line",
    caption: "Field layout in progress — poles set out and aligned along a diagonal line before planting.",
    category: "Layout & Infrastructure",
    duration: 34,
    uploaded: "2026-08-26",
  },
  {
    id: "aEgfGYaqJzw",
    ytTitle: "work",
    title: "Raising the trellis",
    caption: "Trellis poles and support wires going up across freshly prepared ground.",
    category: "Layout & Infrastructure",
    duration: 15,
    uploaded: "2026-08-26",
  },

  // ——— Plantation ———
  {
    id: "-a2PhaziAik",
    ytTitle: "layout",
    title: "Planting along the drip line",
    caption: "The team plants feathered saplings row by row beside the drip line, each tree set against its support.",
    category: "Plantation",
    duration: 74,
    uploaded: "2026-08-26",
  },
  {
    id: "EftSQMYWu4c",
    ytTitle: "#apple #farming #fruit",
    title: "A new plantation takes shape",
    caption: "Freshly planted rows with drip irrigation laid in and a fertigation drum ready in the field.",
    category: "Plantation",
    duration: 78,
    uploaded: "2026-08-26",
  },

  // ——— Bloom & Growth ———
  {
    id: "LL015R8U28k",
    ytTitle: "sprouting",
    title: "First sprouts of the season",
    caption: "Walking the rows of a young plantation as saplings break bud and the first blossoms open.",
    category: "Bloom & Growth",
    duration: 42,
    uploaded: "2026-08-26",
  },
  {
    id: "iQ4BR1uiM1w",
    ytTitle: "Wahabpora Orchard",
    title: "Wahabpora orchard in bloom",
    caption: "An aerial pass over row after row of high-density apple trees in spring blossom.",
    category: "Bloom & Growth",
    duration: 44,
    uploaded: "2026-08-26",
    place: "Wahabpora",
  },
  {
    id: "90ZcQGoTFe0",
    ytTitle: "26 August 2026",
    title: "Young trees, first fruit",
    caption: "A close walk through young high-density trees already setting fruit on their spurs.",
    category: "Bloom & Growth",
    duration: 98,
    uploaded: "2026-08-26",
  },
  {
    id: "iYQpAF1YaMA",
    ytTitle: "Orchard",
    title: "Under the anti-hail canopy",
    caption: "From the air: orchards covered end to end in anti-hail netting across the terraced valley.",
    category: "Bloom & Growth",
    duration: 45,
    uploaded: "2026-08-30",
  },

  // ——— Harvest ———
  {
    id: "v6ftyeYwcS0",
    ytTitle: "#highdensity #apple",
    title: "Rows heavy with fruit",
    caption: "A walk down the alleys of a high-density orchard, every tree laden with ripening apples.",
    category: "Harvest",
    duration: 42,
    uploaded: "2026-08-21",
  },
  {
    id: "qHmnb8XrIlU",
    ytTitle: "start",
    title: "Colour on the branch",
    caption: "Up close with the crop — full red colour and size on the spindle.",
    category: "Harvest",
    duration: 59,
    uploaded: "2026-08-26",
  },
  {
    id: "r4fQa-Z0wVg",
    ytTitle: "Ready to Harvest",
    title: "Ready to harvest",
    caption: "Trees loaded with red apples beneath the anti-hail net, days before picking.",
    category: "Harvest",
    duration: 11,
    uploaded: "2026-08-21",
  },
  {
    id: "am5HgbtafU8",
    ytTitle: "Harvesting apples 🍎",
    title: "Harvest day",
    caption: "Picking by hand into crates while the crew works its way down the rows.",
    category: "Harvest",
    duration: 50,
    uploaded: "2026-08-26",
  },
  {
    id: "iiQGkx86HfY",
    ytTitle: "Apples 🍏🍎🍎",
    title: "Bookings open for 2026–27",
    caption: "Your vision, our expertise — plantation bookings are open for the 2026–2027 season.",
    category: "Harvest",
    duration: 21,
    uploaded: "2026-08-26",
  },

  // ——— Grower Voices ———
  {
    id: "e36xDNf9LTc",
    ytTitle: "Feedback",
    title: "“Abraq is the best”",
    caption: "Planted on 5 April and flowering by May. He researched before choosing Abraq and credits soil testing and near-complete sprouting.",
    category: "Grower Voices",
    duration: 111,
    uploaded: "2026-08-26",
    speaker: "Adil Nabi",
    role: "Grower",
    place: "District Pulwama",
  },
  {
    id: "F2O31SxSoXA",
    ytTitle: "Stasfied grower",
    title: "Support, season after season",
    caption: "With horticulture specialist Adil Bashir, he talks about timely management, nutrition and fertilizer advice from the Abraq team.",
    category: "Grower Voices",
    duration: 127,
    uploaded: "2026-08-26",
    speaker: "Ghulam Mohammad Sheikh",
    role: "Grower",
  },
  {
    id: "PPfQXxHmju4",
    ytTitle: "Stasfied grower",
    title: "Colour and size, as promised",
    caption: "Growers from the Pulwama block share how their mid-April plantation is fruiting — colour, size and all.",
    category: "Grower Voices",
    duration: 97,
    uploaded: "2026-08-26",
    speaker: "Pulwama growers",
    role: "Growers",
    place: "Pulwama",
  },
  {
    id: "PaBA1SsZ0ic",
    ytTitle: "#highdensity #apple",
    title: "Fruit set, true to variety",
    caption: "In the orchard with Adil Bashir: the grower talks fruit set, the variety supplied as agreed, and the size and colour on his trees.",
    category: "Grower Voices",
    duration: 106,
    uploaded: "2026-08-21",
    speaker: "Orchard owner",
    role: "Grower",
  },
  {
    id: "n3mpeqTXKH4",
    ytTitle: "Feedback",
    title: "Last season’s plantation, reviewed",
    caption: "Our nursery sales team visits Imran Sahab to talk through last season’s plantation, the variety and the service.",
    category: "Grower Voices",
    duration: 82,
    uploaded: "2026-08-26",
    speaker: "Imran Sahab",
    role: "Grower",
  },
  {
    id: "pFLWjZgXSFk",
    ytTitle: "Start whenever Ready",
    title: "Praise for the plant material",
    caption: "Meeting our North Kashmir sales team, a senior grower speaks about the quality of Abraq’s plant material.",
    category: "Grower Voices",
    duration: 160,
    uploaded: "2026-08-26",
    speaker: "Senior grower",
    role: "Grower",
    place: "North Kashmir",
  },
  {
    id: "coKIJZ7xY4U",
    ytTitle: "27 August 2026",
    title: "Fruit on young trees",
    caption: "A grower stands in his fruiting high-density block and speaks about the service he received.",
    category: "Grower Voices",
    duration: 39,
    uploaded: "2026-08-27",
    speaker: "Orchard owner",
    role: "Grower",
  },

  // ——— Expert Advice ———
  {
    id: "PZfOqeoDPZI",
    ytTitle: "Flowers of hope",
    title: "Protecting blossom at pink stage",
    caption: "Adil Bashir explains which fungicide combinations — such as DMI with SDHI — best protect trees from infection at the pink-bud stage.",
    category: "Expert Advice",
    duration: 63,
    uploaded: "2026-08-26",
    speaker: "Adil Bashir",
    role: "Horticulture Specialist, Abraq Nurseries",
  },
];

export const posterFor = (id: string) => `/images/youtube/${id}.webp`;
export const watchUrlFor = (id: string) => `https://www.youtube.com/shorts/${id}`;
export const embedUrlFor = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
export const formatDuration = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
export const videosIn = (...cats: VideoCategory[]) => channelVideos.filter((v) => cats.includes(v.category));
export const videoById = (id: string) => channelVideos.find((v) => v.id === id);
