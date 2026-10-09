import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductSummary from "@/components/product/ProductSummary";
import PriceSummary from "@/components/product/PriceSummary";
import MarketPriceTable from "@/components/product/MarketPriceTable";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import { getProductBySlug, getProducts } from "@/lib/api";

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

      <ProductSummary product={product} />

      <div className="card gap-6 border border-base-300 bg-base-100 p-5">
        <PriceSummary product={product} />
        <MarketPriceTable markets={product.markets} />
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

const ProductPage = ({ params }: PageProps<"/product/[slug]">) => {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails params={params} />
    </Suspense>
  );
};

export default ProductPage;
