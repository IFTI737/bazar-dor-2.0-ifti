import Link from "next/link";
import ChangeBadge from "./ChangeBadge";
import type { Product } from "@/types/bazardor";
import { formatPrice, unitBn } from "@/lib/utils";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="card border border-base-300 bg-base-100 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div className="card-body gap-3 p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl">
            {product.image}
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-base leading-6 font-semibold">
              {product.nameBn}
            </h3>
            <p className="text-xs leading-4 text-base-content/60">
              প্রতি {unitBn(product.unit)}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-xs leading-4 text-base-content/60">আজকের দাম</p>
            <p className="leading-7">
              <span className="text-xl font-bold">{formatPrice(product.today)}</span>{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
          </div>
          <ChangeBadge change={product.change} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
