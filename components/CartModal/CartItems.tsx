import { CartItem as CartItemType } from "@prisma/client";
import React from "react";
import { TCartItem } from "../../types";
import CartItem from "./CartItem";

function CartItems({ items }: { items: CartItemType[] }) {
  return (
    <ul className="mb-8 space-y-6">
      {items.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </ul>
  );
}

export default CartItems;
