import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TCatagoryLink } from "../../types";

interface TCategoryLinkProps extends TCatagoryLink {}
import { motion, Variants } from "framer-motion";

const linkVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const CatagoryLink = ({ text, url, img }: TCategoryLinkProps) => {
  return (
    <motion.li
      variants={linkVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative group uppercase flex grow flex-col items-center py-8"
    >
      <Image
        src={img}
        alt={text}
        layout="intrinsic"
        width={138}
        height={133}
        className="object-cover z-10"
      />
      <p className="z-10 text-black font-bold text-[0.9375rem] tracking-wider mb-3">{text}</p>
      <Link href={url}>
        <a className="z-10 group-hover:text-[#d87d4a] font-semibold text-text text-sm tracking-wide">
          shop
        </a>
      </Link>
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gray z-0 rounded-md"></div>
    </motion.li>
  );
};
