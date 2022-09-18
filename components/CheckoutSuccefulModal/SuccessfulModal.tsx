import Image from "next/image";
import React, { useState } from "react";
import Done from "../Icons/Done";
import Button from "../ui/Button";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useRouter } from "next/router";
import { useCartItems } from "../../hooks/useCartItems";
const listVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};
const itemVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
function SuccessfulModal({ onClose }: { onClose: () => void }) {
  // const { items, totalQuantity } = useAppSelector((state) => state.cart);
  const { cartItems: items, isLoading, isError } = useCartItems();
  const [showAllItems, setShowAllItems] = useState(false);
  const router = useRouter();
  // const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError || !items) {
    return <div> something went wrong</div>;
  }

  const showItems = showAllItems ? items : [items[0]];
  const totalQuantity = items.reduce((quan, { quantity }) => quan + quantity, 0);
  const clickHandler = (ev: React.MouseEvent) => {
    ev.stopPropagation();
  };
  return (
    <div
      className="bg-white p-6 py-8 max-w-xl mx-auto rounded-md sm:p-8 sm:py-10"
      onClick={clickHandler}
    >
      <div>
        <Done />
      </div>
      <h3 className="font-bold text-3xl text-black mt-6">
        THANK YOU
        <br /> FOR YOUR ORDER
      </h3>
      <p className="mt-6 text-text">You will receive an email confirmation shortly.</p>
      <div className="mt-8 rounded-md overflow-hidden sm:flex">
        {/* Items with quantity */}
        <div className="grow bg-gray p-4">
          <motion.ul
            className=" "
            transition={{
              duration: 0.5,
            }}
            variants={listVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {showItems.map((item) => (
              <AnimatePresence exitBeforeEnter key={item.id}>
                <motion.li variants={itemVariant} className="flex gap-4 py-2">
                  <div className="shrink-0 w-16">
                    <Image
                      width={62}
                      height={62}
                      alt={item.shortName}
                      layout="responsive"
                      src={item.cartImage}
                    />
                  </div>
                  <div className="flex justify-between grow  self-center">
                    <div className="font-bold text-black flex flex-col justify-center">
                      <p className="">{item.shortName}</p>
                      <p className="text-text text-sm mt-1">${item.price}</p>
                    </div>
                    <div className="text-text font-bold">x2</div>
                  </div>
                </motion.li>
              </AnimatePresence>
            ))}
          </motion.ul>

          <button
            className="w-full text-center py-1 hover:underline hover:text-accent"
            type="button"
            onClick={() => setShowAllItems((p) => !p)}
          >
            {!showAllItems ? "Show all items" : "View less"}
          </button>
        </div>
        {/* Grand Total */}
        <div className={`bg-black p-6 grow flex flex-col ${showAllItems ? "justify-end" : ""} `}>
          <p className="text-lightGray uppercase">Grand Total</p>
          <p className="text-white font-bold mt-4">${totalQuantity}</p>
        </div>
      </div>
      <Button primary filled className="w-full mt-8" onClick={() => router.replace("/")}>
        back to home
      </Button>
    </div>
  );
}

export default SuccessfulModal;

// cannonical url
