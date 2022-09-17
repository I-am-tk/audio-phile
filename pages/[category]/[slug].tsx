import React from "react";
import { getProductBySlug, getProducts } from "../../utils/products";

import Features from "../../components/Features";
import Container from "../../components/ui/Container";
import ProductItem from "../../components/ProductItem";
import ProductItemGallery from "../../components/ProductItemGallery";
import { TProduct } from "../../types";

function ProductDetailPage({ product }: { product: TProduct }) {
  return (
    <div className="mt-16">
      <Container className={"px-6"}>
        <ProductItem product={product} />
        <Features features={product.features} includedItems={product.includedItems} />
        <ProductItemGallery gallery={product.gallery} />
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const products = getProducts();
  const paths = products.map((product) => ({
    params: { category: product.category, slug: product.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const {
    params: { slug },
  } = context;
  const product = getProductBySlug(slug);
  return {
    props: {
      product,
    },
  };
}

export default ProductDetailPage;
