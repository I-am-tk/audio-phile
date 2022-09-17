import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import CartItems from "./CartItems";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import data from "../../data/products.json";
import { TCartItem } from "../../types";
import { useSession } from "next-auth/react";
import { CartItem as CartItemType } from "@prisma/client";
import { useCartItems } from "../../hooks/useCartItems";
import { useSWRConfig } from "swr";
import axios from "axios";
export default function Cart({ onClose }: { onClose: () => void }) {
  const { data: session, status } = useSession();
  const { cartItems, isLoading, isError } = useCartItems();
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const clearCartHandler = async () => {
    const clearCart = async () => {
      await axios.delete("/api/cart/clear");
      return [];
    };
    mutate("/api/cart", clearCart, {
      optimisticData: [],
      rollbackOnError: true,
    });
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError || !cartItems) {
    return <div>Something went wrong</div>;
  }

  const totalAmount = cartItems.reduce((total, { quantity, price }) => total + quantity * price, 0);
  const totalQuantity = cartItems.reduce((total, { quantity }) => total + quantity, 0);
  return (
    <React.Fragment>
      <div className="flex flex-wrap  justify-between gap-y-4 mb-8">
        <h2 className="text-[1.125rem]  font-bold uppercase tracking-widest">
          Cart <span>({totalQuantity})</span>
        </h2>
        <button
          type="button"
          className="text-text underline hover:text-accent text-[0.9375rem]"
          onClick={clearCartHandler}
        >
          Remove All
        </button>
      </div>
      <div className="mb-4 max-h-[300px] rounded-sm overflow-y-auto scroll-bar pr-4">
        <CartItems items={cartItems} />
      </div>
      <div className="flex text-[0.9375rem] text-text justify-between mb-6">
        <p className="uppercase">total</p>
        <p className="text-black">$ {totalAmount.toLocaleString("en-US")}</p>
      </div>

      <Button
        filled
        primary
        className="w-[100%]"
        onClick={(e) => {
          router.push("/checkout");
          onClose();
        }}
      >
        checkout
      </Button>
    </React.Fragment>
  );
}
