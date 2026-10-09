const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="card border border-base-300 bg-base-100 p-4"
          aria-hidden
        >
          <div className="flex items-center gap-3">
            <div className="skeleton size-12 rounded-xl" />
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-28" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <div className="skeleton h-3 w-14" />
              <div className="skeleton h-6 w-20" />
            </div>
            <div className="skeleton h-6 w-14 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGridSkeleton;
