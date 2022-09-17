import React from "react";
import { motion, type Variants } from "framer-motion";
import CartEmpty from "./CartEmpty";
import Container from "../ui/Container";
import Cart from "./Cart";
import { useCartItems } from "../../hooks/useCartItems";

const modal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function CartModal({ onClose }: { onClose: () => void }) {
  const { cartItems, isLoading, isError } = useCartItems();

  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const totalQuantity = cartItems
    ? cartItems.reduce((total, { quantity }) => total + quantity, 0)
    : 0;
  const isCartEmpty = totalQuantity === 0;

  return (
    <Container className="w-full flex justify-center sm:justify-end">
      <motion.div
        className="bg-white self-start mt-12 rounded-md p-4 xs:p-8 w-full max-w-md"
        onClick={clickHandler}
        variants={modal}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-sm uppercase px-3 py-2 mb-4 border-0 hover:bg-transparent hover:text-accent"
          >
            close
          </button>
        </div>
        {!isCartEmpty && <Cart onClose={onClose} />}
        {isCartEmpty && <CartEmpty onClose={onClose} />}
      </motion.div>
    </Container>
  );
}

export default CartModal;
