import PriceMovers from "./PriceMovers";
import SortableProducts from "@/components/product/SortableProducts";
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

export default HomeProducts;
