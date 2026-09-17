import { jsPDF } from "jspdf";
import type { EstimateInput, EstimateResult } from "./calculations";
import { formatINR } from "./calculations";

export function generateOrchardQuotePDF(
  input: EstimateInput,
  result: EstimateResult,
  farmerName = "Valued Grower",
  phone = "Not provided",
  location = "Kashmir Valley, J&K"
): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // Header Banner
  doc.setFillColor(15, 61, 46); // dark green
  doc.rect(0, 0, 210, 38, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("ABRAQ NURSERIES LLP", 15, 18);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Srinagar, Jammu & Kashmir · Nursery Plants, Saplings & Orchard Development", 15, 26);
  doc.text("Srinagar · Pulwama · Chadoora Soil Lab | Tel: 0194-796-1490 | info@abraqnurseries.com", 15, 32);

  // Document Title & Reference
  doc.setTextColor(21, 128, 61); // Primary green
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("OFFICIAL ORCHARD PROJECT ESTIMATE", 15, 50);

  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const quoteRef = `AGR-${Math.floor(100000 + Math.random() * 900000)}`;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text(`Date: ${dateStr} | Reference ID: ${quoteRef}`, 15, 56);

  // Farmer & Land Details Box
  doc.setFillColor(248, 250, 248);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(15, 62, 180, 28, 3, 3, "FD");

  doc.setTextColor(30, 41, 59);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Customer & Site Details:", 20, 70);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`Farmer Name: ${farmerName}`, 20, 77);
  doc.text(`Contact: ${phone}`, 20, 83);
  doc.text(`Location: ${location}`, 110, 77);
  doc.text(`Total Land Area: ${input.kanals} Kanal(s) (${Math.round(input.kanals * 5440)} sq. ft)`, 110, 83);

  // Specifications
  let y = 98;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 61, 46);
  doc.text("Selected Specifications & Bill of Quantities", 15, y);

  y += 6;
  // Table Header
  doc.setFillColor(241, 245, 249);
  doc.rect(15, y, 180, 8, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(71, 85, 105);
  doc.text("Component / Scope of Work", 20, y + 5.5);
  doc.text("Qty / Type", 110, y + 5.5);
  doc.text("Amount (INR)", 160, y + 5.5);

  y += 8;

  const items = [
    {
      name: `Certified Rootstock Plants (${input.rootstockKey})`,
      spec: `${result.totalPlants} Plants`,
      amount: formatINR(result.plantCost)
    },
    {
      name: `Engineered Trellis System (${input.trellisType.toUpperCase()})`,
      spec: `${input.kanals} Kanals coverage`,
      amount: formatINR(result.trellisCost)
    },
    {
      name: "Micro-Drip Fertigation System",
      spec: input.includeDrip ? "Inline PC Emitters + Venturi" : "Not Included",
      amount: input.includeDrip ? formatINR(result.dripCost) : "₹0"
    },
    {
      name: "Anti-Hail UV Safety Netting",
      spec: input.includeHailNet ? "Retractable Canopy" : "Not Included",
      amount: input.includeHailNet ? formatINR(result.hailNetCost) : "₹0"
    },
    {
      name: "14-Parameter Soil Lab Test (Chadoora)",
      spec: input.includeSoilTest ? "Comprehensive NPK & pH" : "Not Included",
      amount: input.includeSoilTest ? formatINR(result.soilTestCost) : "₹0"
    }
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);

  items.forEach((item, idx) => {
    if (idx % 2 === 1) {
      doc.setFillColor(248, 250, 252);
      doc.rect(15, y, 180, 7.5, "F");
    }
    doc.setTextColor(30, 41, 59);
    doc.text(item.name, 20, y + 5);
    doc.setTextColor(100, 116, 139);
    doc.text(item.spec, 110, y + 5);
    doc.setTextColor(30, 41, 59);
    doc.text(item.amount, 160, y + 5);
    y += 7.5;
  });

  // Totals Box
  y += 5;
  doc.setDrawColor(203, 213, 225);
  doc.line(15, y, 195, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  doc.text("Gross Project Cost:", 120, y);
  doc.text(formatINR(result.subtotal), 160, y);

  y += 6;
  doc.setTextColor(21, 128, 61);
  doc.text("Estimated Govt Subsidy (MIDH / J&K Scheme):", 80, y);
  doc.text(`- ${formatINR(result.estimatedSubsidy)}`, 160, y);

  y += 7;
  doc.setFillColor(240, 253, 244);
  doc.rect(15, y - 4, 180, 10, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 61, 46);
  doc.text("Estimated Net Farmer Investment:", 20, y + 2.5);
  doc.text(formatINR(result.netFarmerCost), 160, y + 2.5);

  // 5-Year Harvest Yield Projection
  y += 18;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 61, 46);
  doc.text("Estimated Harvest Yield & Revenue Projection", 15, y);

  y += 5;
  doc.setFillColor(241, 245, 249);
  doc.rect(15, y, 180, 7, "F");
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text("Orchard Age", 20, y + 4.5);
  doc.text("Expected Fruit Yield", 80, y + 4.5);
  doc.text("Projected Revenue (₹)", 150, y + 4.5);

  y += 7;
  doc.setFont("helvetica", "normal");
  result.annualProjections.forEach((p) => {
    doc.setTextColor(30, 41, 59);
    doc.text(`Year ${p.year} (${p.year === 2 ? "First Commercial Crop" : p.year === 5 ? "Full Maturity" : "Growing Phase"})`, 20, y + 4.5);
    doc.text(`${p.yieldKg.toLocaleString("en-IN")} Kg`, 80, y + 4.5);
    doc.text(formatINR(p.estimatedRevenue), 150, y + 4.5);
    y += 6;
  });

  // Footer Note
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text(
    "Notes: 1. This estimate is indicative and subject to on-site soil and elevation survey. 2. Subsidies are subject to UT horticulture department approvals. 3. Valid for 30 days.",
    15,
    280
  );

  doc.save(`Abraq_Nurseries_LLP_Orchard_Quote_${input.kanals}_Kanals.pdf`);
}
