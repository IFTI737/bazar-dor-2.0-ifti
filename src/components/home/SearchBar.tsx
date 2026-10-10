"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/types/bazardor";
import { formatPrice, unitBn } from "@/lib/utils";

const SearchBar = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  const results = search
    ? products.filter(
        (p) =>
          p.nameBn.includes(search) ||
          p.slug.includes(search) ||
          p.categoryNameBn.includes(search),
      )
    : [];

  return (
    <section className="flex flex-col gap-3">
      <label className="input input-lg w-full rounded-box border-base-300 bg-base-100">
        <span className="text-base-content/50">🔍</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="পণ্য খুঁজুন, যেমন: চাল, পেঁয়াজ, ইলিশ"
          className="grow"
        />
      </label>

      {search && (
        <div className="card border border-base-300 bg-base-100 p-2">
          {results.length > 0 ? (
            <ul className="flex flex-col">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/product/${p.slug}`}
                    className="flex items-center gap-3 rounded-field px-3 py-2 hover:bg-base-200"
                  >
                    <span className="text-2xl">{p.image}</span>
                    <span className="flex-1">
                      <span className="font-medium">{p.nameBn}</span>
                      <span className="block text-xs text-base-content/60">
                        {p.categoryNameBn}
                      </span>
                    </span>
                    <span className="text-sm">
                      {formatPrice(p.today)} টাকা/{unitBn(p.unit)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-4 text-center text-sm text-base-content/70">
              &quot;{query}&quot; নামে কোনো পণ্য পাওয়া যায়নি
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
