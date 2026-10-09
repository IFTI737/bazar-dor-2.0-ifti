import type { Market } from "@/types/bazardor";
import { formatPrice, getMarketPrices, toBn } from "@/lib/utils";

const MarketPriceTable = ({ markets: list }: { markets: Market[] }) => {
  const markets = getMarketPrices(list);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
      <div className="overflow-x-auto rounded-box border border-base-300">
        <table className="table">
          <thead>
            <tr className="text-sm text-base-content/60">
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th className="text-right">সর্বনিম্ন</th>
              <th className="text-right">সর্বাধিক</th>
              <th className="text-right">গড়</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((m) => (
              <tr key={m.market} className="even:bg-base-200">
                <td className="font-medium whitespace-nowrap">{m.market}</td>
                <td className="whitespace-nowrap">{m.division}</td>
                <td className="text-right whitespace-nowrap">
                  {formatPrice(m.min)} টাকা
                </td>
                <td className="text-right whitespace-nowrap">
                  {formatPrice(m.max)} টাকা
                </td>
                <td className="text-right font-semibold whitespace-nowrap">
                  {formatPrice(m.avg)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-base-content/60">
        মোট {toBn(markets.length)}টি বাজারের তথ্য
      </p>
    </section>
  );
};

export default MarketPriceTable;
