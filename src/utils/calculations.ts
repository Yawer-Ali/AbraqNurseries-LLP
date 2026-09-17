export interface EstimateInput {
  kanals: number;
  rootstockKey: "M9-T337" | "MM106" | "MM111";
  trellisType: "concrete" | "gi-steel" | "bamboo-hybrid";
  includeDrip: boolean;
  includeHailNet: boolean;
  includeSoilTest: boolean;
  primaryVariety: string;
}

export interface EstimateResult {
  kanals: number;
  totalPlants: number;
  plantCost: number;
  trellisCost: number;
  dripCost: number;
  hailNetCost: number;
  soilTestCost: number;
  subtotal: number;
  estimatedSubsidy: number;
  netFarmerCost: number;
  annualProjections: {
    year: number;
    yieldKg: number;
    estimatedRevenue: number;
  }[];
  breakEvenYear: number;
}

export function calculateOrchardEstimate(input: EstimateInput): EstimateResult {
  const { kanals, rootstockKey, trellisType, includeDrip, includeHailNet, includeSoilTest } = input;

  // Plant density & unit cost based on rootstock
  let plantsPerKanal = 330;
  let plantUnitCost = 420; // certified feathered plant in ₹
  let avgPricePerKg = 120; // conservative Mandi price ₹/kg

  if (rootstockKey === "MM106") {
    plantsPerKanal = 180;
    plantUnitCost = 350;
    avgPricePerKg = 100;
  } else if (rootstockKey === "MM111") {
    plantsPerKanal = 110;
    plantUnitCost = 300;
    avgPricePerKg = 90;
  }

  const totalPlants = Math.round(kanals * plantsPerKanal);
  const plantCost = totalPlants * plantUnitCost;

  // Trellis Cost per Kanal
  let trellisCostPerKanal = 65000;
  if (trellisType === "gi-steel") {
    trellisCostPerKanal = 80000;
  } else if (trellisType === "bamboo-hybrid") {
    trellisCostPerKanal = 45000;
  }
  const trellisCost = Math.round(kanals * trellisCostPerKanal);

  // Drip Irrigation per Kanal
  const dripCost = includeDrip ? Math.round(kanals * 22000) : 0;

  // Anti-hail netting per Kanal
  const hailNetCost = includeHailNet ? Math.round(kanals * 48000) : 0;

  // Soil testing flat charge
  const soilTestCost = includeSoilTest ? Math.min(6500, Math.max(2500, Math.round(kanals * 1200))) : 0;

  const subtotal = plantCost + trellisCost + dripCost + hailNetCost + soilTestCost;

  // MIDH / J&K Govt Estimated Subsidy (~50% on eligible components)
  const subsidyEligibleAmount = (plantCost * 0.5) + (trellisCost * 0.45) + (dripCost * 0.55) + (hailNetCost * 0.5);
  const estimatedSubsidy = Math.round(subsidyEligibleAmount);
  const netFarmerCost = Math.max(0, subtotal - estimatedSubsidy);

  // 5-Year Production Projections
  const annualProjections = [
    {
      year: 2,
      yieldKg: Math.round(totalPlants * (rootstockKey === "M9-T337" ? 3.5 : 1.5)),
      estimatedRevenue: 0
    },
    {
      year: 3,
      yieldKg: Math.round(totalPlants * (rootstockKey === "M9-T337" ? 7.5 : 5.0)),
      estimatedRevenue: 0
    },
    {
      year: 4,
      yieldKg: Math.round(totalPlants * (rootstockKey === "M9-T337" ? 12.0 : 10.0)),
      estimatedRevenue: 0
    },
    {
      year: 5,
      yieldKg: Math.round(totalPlants * (rootstockKey === "M9-T337" ? 16.0 : 15.0)),
      estimatedRevenue: 0
    }
  ].map(p => ({
    ...p,
    estimatedRevenue: Math.round(p.yieldKg * avgPricePerKg)
  }));

  // Calculate Break-Even Year
  let cumulativeRevenue = 0;
  let breakEvenYear = 4;
  for (const proj of annualProjections) {
    cumulativeRevenue += proj.estimatedRevenue;
    if (cumulativeRevenue >= netFarmerCost) {
      breakEvenYear = proj.year;
      break;
    }
  }

  return {
    kanals,
    totalPlants,
    plantCost,
    trellisCost,
    dripCost,
    hailNetCost,
    soilTestCost,
    subtotal,
    estimatedSubsidy,
    netFarmerCost,
    annualProjections,
    breakEvenYear
  };
}

export function formatINR(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(val);
}
