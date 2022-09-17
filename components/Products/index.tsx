import React from "react";
import { TProduct } from "../../types";
import BestGear from "../BestGear";
import CatagoryLinks from "../CatogoryLinks";

import ProductItem from "./ProductItem";
const Product = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="px-6 mt-16 space-y-32">
      {products.map((product, idx) => (
        <ProductItem key={product.id} item={product} showLeft={idx % 2 === 0} />
      ))}
      <CatagoryLinks />
      <BestGear />
    </div>
  );
};

export default Product;
