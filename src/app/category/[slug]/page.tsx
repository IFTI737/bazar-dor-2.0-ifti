import { Suspense } from "react";
import { notFound } from "next/navigation";
import SortableProducts from "@/components/SortableProducts";
import CategorySkeleton from "@/components/CategorySkeleton";
import NotFoundMessage from "@/components/NotFoundMessage";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/utils";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = await getCategory(slug);
  return { title: category ? `${category.nameBn} — বাজার দর` : "বাজার দর" };
}

const CategoryProducts = async ({
  params,
}: {
  params: PageProps<"/category/[slug]">["params"];
}) => {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.slug);

  return (
    <div className="flex flex-col gap-6">
      <div className="card flex-row items-center gap-3 border border-base-300 bg-base-100 p-5">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h1 className="text-2xl leading-8 font-bold">{category.nameBn}</h1>
          <p className="text-sm text-base-content/70">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {products.length ? (
        <SortableProducts products={products} />
      ) : (
        <NotFoundMessage
          title="এই ক্যাটাগরিতে কোনো পণ্য নেই"
          message="অন্য কোনো ক্যাটাগরি দেখুন অথবা হোম পেজে ফিরে যান।"
        />
      )}
    </div>
  );
};

const CategoryPage = ({ params }: PageProps<"/category/[slug]">) => {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryProducts params={params} />
    </Suspense>
  );
};

export default CategoryPage;
