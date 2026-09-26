/**
 * The Kashmir high-density apple year, shared by the Season Dial and the
 * site-wide seasonal accent colour. Timings shift with altitude and weather.
 */
export interface Stage {
  name: string;
  months: number[]; // 0 = Jan
  summary: string;
  tasks: string[];
  film: string;
  /** Seasonal accent used across the site while this stage is current */
  color: string;
}

/** A typical high-density apple year in the Kashmir valley (timings shift with altitude and weather). */
export const stages: Stage[] = [
  {
    name: "Dormancy & layout",
    months: [11, 0, 1],
    summary: "Trees rest under snow. It is the season for pruning, training and laying out new blocks before spring.",
    tasks: ["Winter pruning & training", "Trellis checks after snowfall", "Site survey & row layout for new orchards"],
    film: "267HeSApgXs",
    color: "#b9c6c8",
  },
  {
    name: "Planting",
    months: [2],
    summary: "As the ground opens, feathered saplings go in along the drip line and are tied to their support.",
    tasks: ["Planting feathered saplings", "Drip lines & fertigation set-up", "Tying trees to the trellis"],
    film: "-a2PhaziAik",
    color: "#9fbf7e",
  },
  {
    name: "Bud break & bloom",
    months: [3],
    summary: "Buds swell to pink and the orchard flowers — the most sensitive weeks for disease protection.",
    tasks: ["Pink-bud disease protection", "Watching frost & rain", "Supporting pollination"],
    film: "PZfOqeoDPZI",
    color: "#e7b3bd",
  },
  {
    name: "Fruit set",
    months: [4],
    summary: "Petals fall and fruitlets set. Crop load is judged and nutrition tuned for even sizing.",
    tasks: ["Assessing fruit set", "Crop-load management", "Foliar & fertigation nutrition"],
    film: "PaBA1SsZ0ic",
    color: "#a9c47a",
  },
  {
    name: "Growth & hail watch",
    months: [5, 6],
    summary: "Fruit sizes up through early summer while anti-hail netting guards the crop against sudden storms.",
    tasks: ["Anti-hail net deployment", "Irrigation scheduling", "Canopy & pest monitoring"],
    film: "iYQpAF1YaMA",
    color: "#dcc085",
  },
  {
    name: "Harvest",
    months: [7, 8, 9],
    summary: "Colour comes in and picking begins — early varieties from August, later ones into October.",
    tasks: ["Maturity & colour checks", "Hand-picking into crates", "Grading for market"],
    film: "am5HgbtafU8",
    color: "#d0634a",
  },
  {
    name: "Rest & renew",
    months: [10],
    summary: "After harvest, trees are fed for next year while growers test soil and book the coming season.",
    tasks: ["Post-harvest nutrition", "Soil testing", "Bookings for next season"],
    film: "iiQGkx86HfY",
    color: "#c98a4b",
  },
];

export const stageOfMonth = (m: number) => stages.findIndex((s) => s.months.includes(m));
export const currentStage = (date = new Date()) => stages[stageOfMonth(date.getMonth())];
