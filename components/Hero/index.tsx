import Image from "next/image";
import React from "react";
import Button from "components/ui/Button";
import { motion } from "framer-motion";
import HeroImgMobile from "public/images/home/mobile/image-hero-1.jpg";
import HeroImgTablet from "public/images/home/tablet/image-hero-1.jpg";
import HeroImgDesktop from "public/images/home/desktop/image-hero.jpg";

import Container from "../ui/Container";
import Link from "next/link";

function Hero() {
  return (
    <div className="overflow-hidden  bg-[#191919]">
      <Container className="relative">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="mx-auto max-w-[370px] sm:max-w-[675px] md:max-w-none"
        >
          <div className="sm:hidden">
            <Image src={HeroImgMobile} alt="hero image" layout="responsive" />
          </div>
          <div className="hidden sm:block md:hidden">
            <Image src={HeroImgTablet} alt="hero image" />
          </div>
          <div className="hidden md:block">
            <Image src={HeroImgDesktop} alt="hero image" />
          </div>
        </motion.div>
        <div className="absolute inset-0 -top-4 sm:-top-8 z-10 flex flex-col justify-center items-center md:items-start text-center gap-3 md:text-left md:top-0 px-6">
          <h1 className="text-4xl font-bold uppercase sm:max-w-[20ch] tracking-wider mb-6 sm:text-[3.5rem] sm:leading-[1.2] md:mb-2">
            <strong className="block text-sm tracking-[0.65em] text-textLight font-bold mb-4">
              New Product{" "}
            </strong>
            XX99 Mark II Heaphones
          </h1>
          <p className="max-w-[35ch] sm:max-w-[40ch] mb-10 text-textLight md:mb-6">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones" passHref>
            <Button filled primary>
              See Product
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

// Just need to make few thing one of which is to make a form and learn few more things
