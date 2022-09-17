import path from "path";
import { TProduct } from "../types";
import { readJsonData } from "./file";

const root = path.join();
const productJsonFilePath = path.join(root, "data", "products.json");

const sortByNewest = <TType extends { new: boolean }>(a: TType, b: TType) =>
  Number(b.new) - Number(a.new);

export const getProducts = () => {
  const products = readJsonData(productJsonFilePath).products;
  return products;
};

export const getProductsByCategory = (category: string): TProduct[] => {
  const products = getProducts();
  const filteredProducts = products.filter((product) => product.category === category);
  const sortedFilteredProducts = filteredProducts.sort(sortByNewest);
  return sortedFilteredProducts;
};

export const getProductBySlug = (slug: string) => {
  const products = getProducts();
  return products.find((product) => product.slug === slug);
};

export const getCategories = () => {
  const categories = getProducts().map((product) => product.category);
  return Array.from(new Set(categories));
};
