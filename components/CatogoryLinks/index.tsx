import React from "react";
import { categoryLinks } from "../../data/nav-links";
import { TCatagoryLink } from "../../types";
import { CatagoryLink } from "./CatagoryLink";
import { motion, type Variants } from "framer-motion";

const listVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.8,
    transition: { staggerChildren: 0.2 },
  },
};

function CatagoryLinks() {
  return (
    <motion.ul
      variants={listVariant}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 pt-10 md:mt-14"
    >
      {categoryLinks.map((catagory) => (
        <CatagoryLink key={catagory.text} {...catagory} />
      ))}
    </motion.ul>
  );
}

export default CatagoryLinks;
