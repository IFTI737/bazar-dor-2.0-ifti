"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";
import { bnToNumber, toBn } from "@/lib/utils";

type SortOrder = "default" | "asc" | "desc";

const SortableProducts = ({ products }: { products: Product[] }) => {
  const [sort, setSort] = useState<SortOrder>("default");

  const sorted =
    sort === "default"
      ? products
      : [...products].sort((a, b) => {
          // prices may arrive as Bengali numerals, so compare numeric values
          const diff = bnToNumber(a.today) - bnToNumber(b.today);
          return sort === "asc" ? diff : -diff;
        });

  return (
    <div className="flex flex-col gap-4">
      <div className="card flex-row items-center justify-end gap-2 border border-base-300 bg-base-100 p-4">
        <label htmlFor="sort" className="text-sm">
          সাজান
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOrder)}
          className="select select-sm w-auto border-base-content"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="text-sm text-base-content/70">
        মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default SortableProducts;
