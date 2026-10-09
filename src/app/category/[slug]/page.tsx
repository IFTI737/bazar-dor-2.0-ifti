import { Suspense } from "react";
import { notFound } from "next/navigation";
import SortableProducts from "@/components/product/SortableProducts";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategorySkeleton from "@/components/category/CategorySkeleton";
import NotFoundMessage from "@/components/ui/NotFoundMessage";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/api";

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
      <CategoryHeader category={category} count={products.length} />

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
