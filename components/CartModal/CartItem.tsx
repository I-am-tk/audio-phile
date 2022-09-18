import { CartItem as CartItemType } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSWRConfig } from "swr";
import axios from "axios";
import { useDebounce, useUpdateEffect } from "usehooks-ts";
function CartItem({ item }: { item: CartItemType }) {
  // It would be better it I maintain a state
  const [product, setProduct] = useState(item);
  // const debouncedProduct()
  const deboundedProduct = useDebounce<CartItemType>(product, 500);

  const { mutate } = useSWRConfig();
  const incrementProdcutQuantity = () => {
    setProduct((p) => ({
      ...p,
      quantity: p.quantity + 1,
    }));
  };

  const decrementProdcutQuantity = () => {
    setProduct((p) => ({
      ...p,
      quantity: Math.max(p.quantity - 1, 0),
    }));
  };

  useUpdateEffect(() => {
    const updateQuantityHandler = async () => {
      // TUpdateCartItem
      mutate<CartItemType[]>(
        "/api/cart",
        async (data) => {
          await axios.post("/api/cart", {
            id: deboundedProduct.id,
            cartImage: deboundedProduct.cartImage,
            category: deboundedProduct.category,
            name: deboundedProduct.name,
            new: deboundedProduct.new === null ? false : true,
            price: deboundedProduct.price,
            productId: deboundedProduct.productId,
            quantity: deboundedProduct.quantity,
            shortName: deboundedProduct.shortName,
            slug: deboundedProduct.slug,
          });
          if (!data) return data;
          return data
            .map((dataItem) => {
              if (dataItem.id === deboundedProduct.id) {
                return {
                  ...dataItem,
                  quantity: deboundedProduct.quantity,
                };
              }
              return dataItem;
            })
            .filter((dataItem) => dataItem.quantity !== 0);
        },
        { revalidate: false }
      );
    };
    updateQuantityHandler();
  }, [deboundedProduct, mutate]);

  return (
    <li className="flex flex-col xs:flex-row gap-4 xs:items-center justify-between">
      <div className="flex items-center gap-4  sm:gap-3">
        <div className="w-[100px] h-[100px] sm:w-[62px] sm:h-[62px]">
          <Image
            width={62}
            height={62}
            alt={item.shortName}
            layout="responsive"
            src={item.cartImage}
          />
        </div>
        <div className="">
          <p className="text-[0.9375rem] font-bold">{item.shortName}</p>
          <p className="text-text text-[0.875rem] font-bold">
            $ {item.price.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className="flex ">
        <button
          type="button"
          className="text-black px-2 bg-gray hover:bg-lightGray h-10 w-10 "
          onClick={decrementProdcutQuantity}
        >
          -
        </button>
        <p className="flex items-center text-black text-[0.8125rem] font-bold px-2 bg-gray">
          {product.quantity}
        </p>
        <button
          type="button"
          className="text-black px-2 bg-gray hover:bg-lightGray h-10 w-10"
          onClick={incrementProdcutQuantity}
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
