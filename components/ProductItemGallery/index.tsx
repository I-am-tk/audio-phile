import React from "react";
import Image from "next/future/image";
import { TGallery } from "types";

function ProductItemGallery({ gallery }: { gallery: TGallery }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-itemGallery gap-4 mt-24">
      <Image
        className="rounded-md sm:hidden w-full h-full obeject-cover object-center"
        src={gallery.first.mobile.src}
        width={gallery.first.mobile.width}
        height={gallery.first.mobile.height}
        alt={"an alternate image"}
      />
      <Image
        className="rounded-md hidden sm:block w-full h-full obeject-cover object-center"
        src={gallery.first.desktop.src}
        width={gallery.first.desktop.width}
        height={gallery.first.desktop.height}
        alt={"an alternate image"}
      />

      <Image
        className="rounded-md sm:hidden w-full h-full obeject-cover object-center"
        src={gallery.second.mobile.src}
        width={gallery.second.mobile.width}
        height={gallery.second.mobile.height}
        alt={"an alternate image"}
      />

      <Image
        className="row-start-2 rounded-md hidden sm:block w-full h-full obeject-cover object-center"
        src={gallery.second.desktop.src}
        width={gallery.second.desktop.width}
        height={gallery.second.desktop.height}
        alt={"an alternate image"}
      />
      <Image
        className="sm:hidden w-full h-full obeject-cover object-center"
        src={gallery.third.mobile.src}
        width={gallery.third.mobile.width}
        height={gallery.third.mobile.height}
        alt={"an alternate image"}
      />
      <Image
        className="row-span-2 hidden sm:block w-full h-full obeject-cover object-center"
        src={gallery.third.desktop.src}
        width={gallery.third.desktop.width}
        height={gallery.third.desktop.height}
        alt={"an alternate image"}
      />
    </div>
  );
}

export default ProductItemGallery;
