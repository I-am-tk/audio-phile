import fs from "fs";
import { TProduct } from "../types";
export const readJsonData = (filePath: string): { products: TProduct[] } => {
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData) as { products: TProduct[] };
  } catch (e) {
    return {
      products: [],
    };
  }
};
