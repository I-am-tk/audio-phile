import React from "react";
import Product from "components/Products";
import { getProductsByCategory, getCategories } from "utils/products";
import { useRouter } from "next/router";
import Container from "components/ui/Container";
import { TProduct } from "types";

function CatagoryPage({ products }: { products: TProduct[] }) {
  const {
    query: { category },
  } = useRouter();
  return (
    <>
      <h1 className="bg-[#191919] tracking-widest text-white uppercase text-[1.75rem] sm:text-[2.5rem] sm:tracking-wide font-bold py-7 sm:py-24 text-center">
        {category}
      </h1>
      <Container>
        <Product products={products} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map((category) => ({ params: { category: category } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { category: string } }) {
  const { category } = context.params;
  const products = getProductsByCategory(category);
  return {
    props: {
      products,
    },
  };
}

export default CatagoryPage;
