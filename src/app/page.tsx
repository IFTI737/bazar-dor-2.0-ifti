import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSkeleton from "@/components/home/HomeSkeleton";

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
