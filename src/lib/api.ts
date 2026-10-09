import { cacheLife } from "next/cache";
import type { Category, Product } from "@/types/bazardor";


const BASE_URL =
  process.env.BAZARDOR_API_URL ?? "https://api.abcz.workers.dev/api/bazardor";

const getData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path} (${res.status})`);
  }
  return res.json();
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
