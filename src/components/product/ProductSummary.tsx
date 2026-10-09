import Link from "next/link";
import { ChangeText } from "./ChangeBadge";
import type { Product } from "@/types/bazardor";
import { formatPrice, unitBn } from "@/lib/utils";

const changeWord = { up: "বেড়েছে", down: "কমেছে", flat: "অপরিবর্তিত" };

const ProductSummary = ({ product }: { product: Product }) => {
  const unit = unitBn(product.unit);
  const diff = Math.abs(product.today - product.yesterday);

  return (
    <div className="card border border-base-300 bg-base-100 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-5xl">
          {product.image}
        </span>
        <div className="flex-1">
          <h1 className="text-2xl leading-9 font-bold sm:text-3xl">
            {product.nameBn}
          </h1>
          <p className="text-sm text-base-content/70">
            প্রতি {unit} · {product.categoryNameBn}
          </p>
          <p className="mt-2 text-sm">
            গতকালের তুলনায় আজ দাম{" "}
            <span className="font-semibold">{changeWord[product.change.dir]}</span>
            {diff > 0 && ` · ${formatPrice(diff)} টাকা`}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href={`/category/${product.category}`}
              className="badge badge-soft badge-primary"
            >
              {product.categoryIcon} {product.categoryNameBn}
            </Link>
            <span className="badge badge-ghost">প্রতি {unit}</span>
          </div>
        </div>
        <div className="rounded-2xl bg-base-200 px-5 py-4 text-center sm:min-w-32">
          <p className="text-sm text-base-content/70">আজকের দাম</p>
          <p className="text-3xl leading-9 font-bold">
            {formatPrice(product.today)}
          </p>
          <p className="text-sm text-base-content/70">টাকা / {unit}</p>
          <p className="mt-1 text-sm">
            <ChangeText change={product.change} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
