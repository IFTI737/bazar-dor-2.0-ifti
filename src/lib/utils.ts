import type { Market } from "@/types/bazardor";

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export const toBn = (value: number | string) =>
  String(value).replace(/[0-9]/g, (d) => bnDigits[Number(d)]);

// Converts Bengali numerals (and commas) back to a number, e.g. "১,৮৫০" -> 1850
export const bnToNumber = (value: string | number) => {
  if (typeof value === "number") return value;
  const latin = value
    .replace(/[০-৯]/g, (d) => String(bnDigits.indexOf(d)))
    .replace(/[^0-9.-]/g, "");
  return Number(latin);
};

// 1850 -> "১,৮৫০", 63.5 -> "৬৩.৫০"
export const formatPrice = (value: number) =>
  toBn(
    value.toLocaleString("en-IN", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 2,
    }),
  );

export const formatPct = (pct: number) => `${toBn(Math.abs(pct).toFixed(1))}%`;

const units: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export const unitBn = (unit: string) => units[unit] ?? unit;

// Adds each market's average price and sorts the markets from cheapest to costliest
export const getMarketPrices = (markets: Market[]) =>
  markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);
