import SearchBar from "./SearchBar";
import { getProducts } from "@/lib/api";

const ProductSearch = async () => {
  const products = await getProducts();
  return <SearchBar products={products} />;
};

export default ProductSearch;
