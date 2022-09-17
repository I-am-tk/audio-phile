import Image from "next/image";
import React from "react";

import Button from "../ui/Button";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import { TProduct } from "../../types";

function ProductItem({ item, showLeft = true }: { item: TProduct; showLeft?: boolean }) {
  const {
    query: { category },
  } = useRouter();
  return (
    <div className="text-black flex flex-col md:flex-row gap-8 md:gap-x-32">
      <div className={`md:basis-[55%] relative ${showLeft ? "" : "order-1"}`}>
        <div className="sm:hidden">
          <Image
            src={item.categoryImage.mobile.src}
            alt="xx9 mark2 headpohone"
            layout="responsive"
            width={item.categoryImage.mobile.width}
            height={item.categoryImage.mobile.height}
          />
        </div>
        <div className="hidden sm:block md:hidden">
          <Image
            src={item.categoryImage.tablet.src}
            alt="xx9 mark2 headpohone"
            layout="responsive"
            width={item.categoryImage.tablet.width}
            height={item.categoryImage.tablet.height}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={item.categoryImage.desktop.src}
            alt="xx9 mark2 headpohone"
            layout="responsive"
            width={item.categoryImage.desktop.width}
            height={item.categoryImage.desktop.height}
          />
        </div>
      </div>
      <div className="flex flex-col md:basis-[45%] md:text-left md:items-start md:justify-center gap-3  text-center items-center">
        <h2 className="text-[1.75rem] font-bold uppercase leading-[1.33] tracking-[0.0625em] mb-6 max-w-[15ch] sm:text-4xl">
          {item.new && (
            <strong className="block  mb-6 text-accent font-normal text-[0.875rem] tracking-[0.714em]">
              new product
            </strong>
          )}
          {item.name}
        </h2>
        <p className="text-text text-[0.9375rem] mb-6 max-w-[40ch] sm:max-w-[65ch]">
          {item.description}
        </p>
        <NavLink href={`/${category}/${item.slug}`}>
          <Button filled primary>
            See Product
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductItem;
