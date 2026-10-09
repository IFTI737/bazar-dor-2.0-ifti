import ProductGridSkeleton from "./ProductGridSkeleton";

const CategorySkeleton = () => (
  <div className="flex flex-col gap-6">
    <div className="card flex-row items-center gap-3 border border-base-300 bg-base-100 p-5">
      <div className="skeleton size-10 rounded-lg" />
      <div className="flex flex-col gap-2">
        <div className="skeleton h-6 w-24" />
        <div className="skeleton h-4 w-48" />
      </div>
    </div>
    <div className="skeleton h-16 w-full rounded-box" />
    <ProductGridSkeleton count={3} />
  </div>
);

export default CategorySkeleton;
