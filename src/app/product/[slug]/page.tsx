import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ChangeText } from "@/components/ChangeBadge";
import { getProductBySlug, getProducts } from "@/lib/api";
import { formatPrice, toBn, unitBn } from "@/lib/utils";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return { title: product ? `${product.nameBn} — বাজার দর` : "বাজার দর" };
}

const changeWord = { up: "বেড়েছে", down: "কমেছে", flat: "অপরিবর্তিত" };

const ProductDetails = async ({
  params,
}: {
  params: PageProps<"/product/[slug]">["params"];
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const unit = unitBn(product.unit);
  const diff = Math.abs(product.today - product.yesterday);

  const markets = product.markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);
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
    <div className="flex flex-col gap-6">
      <div className="breadcrumbs py-2 text-sm text-base-content/70">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href={`/category/${product.category}`}>
              {product.categoryNameBn}
            </Link>
          </li>
          <li>{product.nameBn}</li>
        </ul>
      </div>

      {/* summary */}
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

      <div className="card gap-6 border border-base-300 bg-base-100 p-5">
        {/* price summary */}
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

        {/* market wise prices */}
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
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/" className="btn btn-ghost btn-sm sm:btn-md">
          ← হোম পেজে ফিরে যান
        </Link>
        <Link
          href={`/category/${product.category}`}
          className="btn btn-outline btn-sm sm:btn-md"
        >
          {product.categoryIcon} {product.categoryNameBn}-এর সব পণ্য
        </Link>
      </div>
    </div>
  );
};

const ProductSkeleton = () => (
  <div className="flex flex-col gap-6">
    <div className="skeleton h-5 w-56" />
    <div className="skeleton h-40 w-full rounded-box" />
    <div className="skeleton h-96 w-full rounded-box" />
  </div>
);

const ProductPage = ({ params }: PageProps<"/product/[slug]">) => {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails params={params} />
    </Suspense>
  );
};

export default ProductPage;
