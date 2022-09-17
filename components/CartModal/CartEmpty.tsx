import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
function CartEmpty({ onClose }: { onClose: () => void }) {
  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8" onClick={clickHandler}>
      <p>Your Cart is Empty</p>
      <div className="w-32">
        <Image
          src={"/images/cart/empty-cart.png"}
          width={980}
          height={884}
          alt="empty cart"
          layout="responsive"
        />
      </div>
      <Button onClick={onClose}>Add Items to Cart</Button>
    </div>
  );
}

export default CartEmpty;
