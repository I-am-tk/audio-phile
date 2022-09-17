import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import YX1Mobile from "../../public/images/home/mobile/image-earphones-yx1.jpg";
import YX1Tablet from "../../public/images/home/tablet/image-earphones-yx1.jpg";
import YX1Desktop from "../../public/images/home/desktop/image-earphones-yx1.jpg";
import Link from "next/link";
import { motion,type Variants } from "framer-motion";
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

const YX1Earphones = () => {
  return (
    <motion.article
      variants={slideUp}
      initial="hidden"
      whileInView={"view"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col mt-4 sm:mt-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
        <div className="sm:grow sm:basis-1/2">
          <div className="sm:hidden">
            <Image src={YX1Mobile} alt="YX1 earphonoe" className="rounded-md" />
          </div>
          <div className="hidden sm:block md:hidden">
            <Image
              src={YX1Tablet}
              alt="YX1 earphonoe"
              className="rounded-md"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={YX1Desktop}
              alt="YX1 earphonoe"
              className="rounded-md"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="bg-gray py-8 pr-3 pl-6 flex flex-col gap-8 items-start rounded-md sm:grow sm:basis-1/2 sm:justify-center sm:pl-8 md:pl-24">
          <h2 className="text-black font-bold text-3xl uppercase">YX1 Earphones</h2>
          <Link href={"/earphones/yx1-earphones"} passHref>
            <Button>See Product </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default YX1Earphones;
