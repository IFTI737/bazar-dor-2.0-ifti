import { cacheLife } from "next/cache";
import type { Category, Product } from "@/types/bazardor";


// Tried in order: main API first, then BASE_URL_2, then BASE_URL_1 (set in .env.local)
const API_URLS = [
  process.env.MAIN_API_URL,
  process.env.BASE_URL_2,
  process.env.BASE_URL_1,
].filter(Boolean) as string[];

const getData = async <T>(path: string): Promise<T> => {
  for (const baseUrl of API_URLS) {
    try {
      const res = await fetch(`${baseUrl}${path}`, {
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return await res.json();
      console.warn(`API failed for ${path} (${res.status}), trying next API`);
    } catch {
      console.warn(`API failed for ${path}, trying next API`);
    }
  }
  // Every API failed; error.tsx asks the user to refresh, which starts again from the main API
  throw new Error(`All APIs failed for ${path}`);
};

export const getProducts = async () => {
  "use cache";
  cacheLife("hours");
  return getData<Product[]>("/products");
};

export const getCategories = async () => {
  "use cache";
  cacheLife("hours");
  return getData<Category[]>("/categories");
};

export const getProductsByCategory = async (category: string) => {
  "use cache";
  cacheLife("hours");
  return getData<Product[]>(`/products?category=${encodeURIComponent(category)}`);
};

export const getCategory = async (slug: string) => {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug);
};

// The API looks single products up by id, so find the product by slug in the full list
export const getProductBySlug = async (slug: string) => {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
};
