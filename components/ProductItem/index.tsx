import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { TProduct } from "../../types";
import { useSession, signIn, signOut } from "next-auth/react";
import axios, { AxiosResponse } from "axios";
import useSwr, { useSWRConfig } from "swr";
import { TCreateCartItem } from "../../schema/create-cart-item";
function ProductItem({ product }: { product: TProduct }) {
  // const dispatch = useAppDispatch();
  const { data, status } = useSession();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantityHandler = () => {
    setQuantity((pState) => pState + 1);
  };
  const { mutate } = useSWRConfig();
  const decreaseQuantityHandler = () => {
    setQuantity((pState) => pState - 1);
  };

  const addToCartHandler = async () => {
    if (status === "loading") {
      return;
    }
    if (status === "unauthenticated") {
      signIn();
    }
    await axios.post<any, AxiosResponse<any, any>, TCreateCartItem>("/api/cart", {
      slug: product.slug,
      name: product.name,
      shortName: product.shortName,
      category: product.category,
      new: product?.new ?? false,
      price: product.price,
      quantity: quantity,
      productId: product.id,
      cartImage: product.cartImage,
    });
    mutate("/api/cart");
  };
  return (
    <div className="md:flex gap-8  md:gap-32">
      <div className="sm:basis-[40%] md:basis-[50%]">
        <div className="md:hidden">
          <Image
            src={product.image.mobile.src}
            alt="xx9 earphone"
            layout="responsive"
            objectFit="cover"
            objectPosition={"center"}
            width={product.image.mobile.width}
            height={product.image.mobile.height}
          />
        </div>
        {/* <div className="hidden sm:block md:hidden">
          <Image
            src={product.image.tablet.src}
            alt="xx9 earphone"
            layout="responsive"
            width={product.image.tablet.width}
            height={product.image.tablet.height}
          />
        </div> */}
        <div className="hidden md:block">
          <Image
            src={product.image.desktop.src}
            alt="xx9 earphone"
            layout="responsive"
            objectFit="cover"
            objectPosition={"center"}
            width={product.image.desktop.width}
            height={product.image.desktop.height}
          />
        </div>
      </div>
      <div className="sm:basis-[60%] md:basis-[50%] mt-8">
        <h2
          className="text-black uppercase text-[1.75rem] font-bold leading-[1.33]
  max-w-[15ch] tracking-wide mb-6 sm:text-[2rem] sm:leading-[1.2]"
        >
          {product.new && (
            <strong
              className=" block text-lg text-[#d87d4a]
    text-[0.875rem] tracking-[0.714em] font-normal mb-6"
            >
              new product
            </strong>
          )}
          {product.name}
        </h2>
        <p className="text-text text-[0.9375rem] leading-[1.66] mb-6">{product.description}</p>
        <p className="font-bold text-[1.125rem] leading-[1.66]">
          $ {product.price.toLocaleString("en")}
        </p>
        <div className="flex flex-wrap sm:flex-nowrap center gap-4 mt-8">
          <div className="flex   bg-gray w-[7.5rem] h-[3rem] text-text">
            <button
              type="button"
              className="border-0 hover:bg-lightGray color-text font-bold text-[0.9375rem] w-[40%] hover:text-accent transition duration-300"
              onClick={decreaseQuantityHandler}
              disabled={quantity === 1 ? true : false}
            >
              -
            </button>
            <p className="px-3 text-[0.8125rem] font-bold flex items-center ">{quantity}</p>
            <button
              type="button"
              className="border-0 hover:bg-lightGray color-text font-bold text-[0.9375rem] w-[40%] hover:text-accent"
              onClick={increaseQuantityHandler}
            >
              +
            </button>
          </div>
          <Button filled primary onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
