import React from "react";
import Image from "next/image";
import { TGallery } from "types";

function ProductItemGallery({ gallery }: { gallery: TGallery }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-itemGallery gap-4 mt-24">
      <div className="rounded-md  overflow-hidden">
        <div className="sm:hidden">
          <Image
            src={gallery.first.mobile.src}
            width={gallery.first.mobile.width}
            height={gallery.first.mobile.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={gallery.first.desktop.src}
            width={gallery.first.desktop.width}
            height={gallery.first.desktop.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="rounded-md sm:row-start-2 overflow-hidden">
        <div className="sm:hidden">
          <Image
            src={gallery.second.mobile.src}
            width={gallery.second.mobile.width}
            height={gallery.second.mobile.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={gallery.second.desktop.src}
            width={gallery.second.desktop.width}
            height={gallery.second.desktop.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="rounded-md sm:row-start-1 sm:col-start-2 sm:row-span-2  overflow-hidden">
        <div className="sm:hidden">
          <Image
            src={gallery.third.mobile.src}
            width={gallery.third.mobile.width}
            height={gallery.third.mobile.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={gallery.third.desktop.src}
            width={gallery.third.desktop.width}
            height={gallery.third.desktop.height}
            alt={"an alternate image"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItemGallery;
