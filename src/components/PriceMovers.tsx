import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

const PriceMovers = ({
  products,
  dir,
}: {
  products: Product[];
  dir: "up" | "down";
}) => {
  const movers = products
    .filter((p) => p.change.dir === dir)
    .sort((a, b) =>
      dir === "up" ? b.change.pct - a.change.pct : a.change.pct - b.change.pct,
    )
    .slice(0, 6);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        {dir === "up" ? (
          <span className="text-base font-normal text-error">▲</span>
        ) : (
          <span className="text-base font-normal text-success">▼</span>
        )}
        {dir === "up" ? "আজ দাম বেড়েছে" : "আজ দাম কমেছে"}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default PriceMovers;
