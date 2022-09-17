import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

import ZX9Mobile from "../../public/images/home/mobile/image-speaker-zx9.png";
import ZX9Tablet from "../../public/images/home/tablet/image-speaker-zx9.png";
import ZX9Desktop from "../../public/images/home/desktop/image-speaker-zx9.png";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const slideUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const popUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ZX9Speaker = () => {
  return (
    <motion.article
      variants={slideUp}
      initial="hidden"
      whileInView={"view"}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#d87d4a] px-6 py-14 md:flex md:pb-0 overflow-hidden rounded-md"
    >
      <div className="flex justify-center md:basis-1/2 md:items-end md:relative md:-bottom-6 mb-8 md:mb-0 md:left-10">
        <motion.div
          variants={popUp}
          whileInView={"view"}
          initial="hidden"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="w-40 sm:w-52 md:w-96"
        >
          <div className="sm:hidden ">
            <Image src={ZX9Mobile} alt="YX1 earphonoe" className="rounded-md" />
          </div>
          <div className="hidden sm:block md:hidden">
            <Image src={ZX9Tablet} alt="YX1 earphonoe" className="rounded-md" />
          </div>
          <div className="hidden md:block">
            <Image src={ZX9Desktop} alt="YX1 earphonoe" className="rounded-md" />
          </div>
        </motion.div>
      </div>
      <div className="flex md:items-start flex-col gap-8 md:gap-0 items-center text-center md:basis-1/2 md:text-left md:pl-28 md:pt-10">
        <h2 className="uppercase text-4xl font-bold w-[10ch] sm:text-6xl tracking-wider md:mb-6">
          ZX9 Speaker
        </h2>
        <p className="text-gray text-[0.9375rem] font-extralight max-w-[30ch] sm:max-w-[44ch] md:max-w-[30ch] mb-16 md:mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <Link href={"/speakers/zx9-speaker"} passHref>
          <Button filled>See Product</Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default ZX9Speaker;
