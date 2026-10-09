import { Suspense } from "react";
import Hero from "@/components/Hero";
import PriceMovers from "@/components/PriceMovers";
import SortableProducts from "@/components/SortableProducts";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import { getProducts } from "@/lib/api";

const HomeProducts = async () => {
  const products = await getProducts();

  return (
    <>
      <PriceMovers products={products} dir="up" />
      <PriceMovers products={products} dir="down" />

      <section id="সব-পণ্য" className="flex scroll-mt-32 flex-col gap-3">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <SortableProducts products={products} />
      </section>
    </>
  );
};

const HomeSkeleton = () => (
  <>
    {[0, 1].map((i) => (
      <div key={i} className="flex flex-col gap-3">
        <div className="skeleton h-7 w-40" />
        <ProductGridSkeleton />
      </div>
    ))}
  </>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Suspense fallback={<HomeSkeleton />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
