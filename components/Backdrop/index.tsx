import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, type Variants, AnimatePresence } from "framer-motion";
const backdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Backdrop: React.FC<{ onClose?: () => void; children: React.ReactNode }> = ({
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.height = "initial";
      document.body.style.overflowY = "initial";
    };
  }, []);
  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };
  // flex justify-center sm:justify-end
  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed z-20 p-10  h-screen  left-0 right-0 top-0 bg-black/60  w-[100vw] overflow-x-hidden"
        onClick={clickHandler}
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit={"hidden"}
        key="backdrop"
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.getElementById("overlay")!
  );
};

export default Backdrop;
