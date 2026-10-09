import type { Product } from "@/types/bazardor";
import { formatPrice, getMarketPrices, unitBn } from "@/lib/utils";

const PriceSummary = ({ product }: { product: Product }) => {
  const unit = unitBn(product.unit);
  const markets = getMarketPrices(product.markets);
  const cheapest = markets.reduce((a, b) => (b.min < a.min ? b : a));
  const costliest = markets.reduce((a, b) => (b.max > a.max ? b : a));
  const average = Math.round(
    markets.reduce((sum, m) => sum + m.avg, 0) / markets.length,
  );

  const summary = [
    {
      label: "সর্বনিম্ন দাম",
      value: cheapest.min,
      color: "text-success",
      note: `সবচেয়ে কম দামের বাজার · ${cheapest.market}`,
    },
    {
      label: "সর্বাধিক দাম",
      value: costliest.max,
      color: "text-error",
      note: `সবচেয়ে বেশি দামের বাজার · ${costliest.market}`,
    },
    {
      label: "গড় দাম",
      value: average,
      color: "text-base-content",
      note: `প্রতি ${unit}-এর হিসাবে`,
    },
  ];

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">দামের সারসংক্ষেপ</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {summary.map((s) => (
          <div
            key={s.label}
            className="rounded-box border border-base-300 bg-base-100 px-6 py-4"
          >
            <p className="text-xs text-base-content/70">{s.label}</p>
            <p className={`leading-8 ${s.color}`}>
              <span className="text-2xl font-bold">{formatPrice(s.value)}</span>{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="text-xs text-base-content/70">{s.note}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-base-content/60">
        গতকাল {formatPrice(product.yesterday)} টাকা · গত সপ্তাহে{" "}
        {formatPrice(product.lastWeek)} টাকা · গত মাসে{" "}
        {formatPrice(product.lastMonth)} টাকা
      </p>
    </section>
  );
};

export default PriceSummary;
