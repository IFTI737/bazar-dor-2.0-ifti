import ProductGridSkeleton from "@/components/product/ProductGridSkeleton";

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

export default HomeSkeleton;
