import type { Category } from "@/types/bazardor";
import { toBn } from "@/lib/utils";

const CategoryHeader = ({
  category,
  count,
}: {
  category: Category;
  count: number;
}) => {
  return (
    <div className="card flex-row items-center gap-3 border border-base-300 bg-base-100 p-5">
      <span className="text-4xl">{category.icon}</span>
      <div>
        <h1 className="text-2xl leading-8 font-bold">{category.nameBn}</h1>
        <p className="text-sm text-base-content/70">
          {toBn(count)}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </div>
  );
};

export default CategoryHeader;
