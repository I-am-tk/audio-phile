import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

import ZX7Mobile from "../../public/images/home/mobile/image-speaker-zx7.jpg";
import ZX7Tablet from "../../public/images/home/tablet/image-speaker-zx7.jpg";
import ZX7Desktop from "../../public/images/home/desktop/image-speaker-zx7.jpg";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      delayChildren: 0.2,
    },
  },
};

const ZX7Speaker = () => {
  return (
    <motion.article
      variants={slideUp}
      initial="hidden"
      whileInView={"view"}
      viewport={{ once: true, amount: 0.2 }}
      className="relative mt-6 sm:mt-8"
    >
      <div className="flex flex-col items-start gap-4 absolute inset-0 z-10 justify-center pl-6 sm:pl-20 md:gap-8">
        <h2 className="text-black font-bold text-3xl uppercase">ZX7 Speaker</h2>
        <Link href={"/speakers/zx7-speaker"} passHref>
          <Button>See product</Button>
        </Link>
      </div>
      <div className="">
        <div className="sm:hidden">
          <Image src={ZX7Mobile} alt="YX1 earphonoe" className="rounded-md" />
        </div>
        <div className="hidden sm:block md:hidden">
          <Image src={ZX7Tablet} alt="YX1 earphonoe" className="rounded-md" />
        </div>
        <div className="hidden md:block">
          <Image src={ZX7Desktop} alt="YX1 earphonoe" className="rounded-md" />
        </div>
      </div>
    </motion.article>
  );
};

export default ZX7Speaker;
