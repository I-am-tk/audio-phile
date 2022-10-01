import Image from "next/image";
import React, { useEffect } from "react";

import BestProductMobile from "../../public/images/shared/mobile/image-best-gear.jpg";
import BestProductTablet from "../../public/images/shared/tablet/image-best-gear.jpg";
import BestProductDesktop from "../../public/images/shared/desktop/image-best-gear.jpg";
import { motion, type Variants } from "framer-motion";

// let rendered = false;

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

function BestGear() {
  useEffect(() => {
    // rendered = true;
  }, []);
  return (
    <motion.section
      variants={slideUp}
      initial="hidden"
      whileInView={"view"}
      viewport={{ once: true, amount: 0.2 }}
      className="text-black flex flex-col md:flex-row md:gap-8 mt-32 justify-between"
    >
      <div className="md:basis-1/3 md:order-1">
        <div className="sm:hidden">
          <Image src={BestProductMobile} alt="best gear" />
        </div>
        <div className="hidden sm:block md:hidden">
          <Image src={BestProductTablet} alt="best gear" />
        </div>
        <div className="hidden md:block">
          <Image src={BestProductDesktop} alt="best gear" />
        </div>
      </div>
      <div className="text-center md:text-left md:basis-1/2 flex flex-col items-center md:items-start justify-center">
        <h2 className="mt-10 uppercase font-bold text-3xl mb-8 sm:text-[2.5rem] sm:leading-[1.33] max-w-[15ch] sm:max-w-[20ch]">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio gear
        </h2>
        <p className="text-text text-[0.9375rem] sm:px-8 md:px-0 max-w-[42ch] sm:max-w-[60ch]">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </motion.section>
  );
}

export default BestGear;
