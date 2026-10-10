import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSkeleton from "@/components/home/HomeSkeleton";
import ProductSearch from "@/components/home/ProductSearch";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Suspense
        fallback={<div className="skeleton h-12 w-full rounded-box" />}
      >
        <ProductSearch />
      </Suspense>
      <Suspense fallback={<HomeSkeleton />}>
        <HomeProducts />
      </Suspense>
    </div>
  );
}
