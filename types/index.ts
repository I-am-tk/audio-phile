import { CartItem } from "@prisma/client";

interface TImage {
  src: string;
  width: number;
  height: number;
}

interface TIncludeItem {
  quantity: string;
  item: string;
}

export interface TProduct {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    mobile: TImage;
    tablet: TImage;
    desktop: TImage;
  };
  cartImage: string;
  category: string;
  categoryImage: {
    mobile: TImage;
    tablet: TImage;
    desktop: TImage;
  };
  new?: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: TIncludeItem[];
  gallery: {
    first: {
      mobile: TImage;
      tablet: TImage;
      desktop: TImage;
    };
    second: {
      mobile: TImage;
      tablet: TImage;
      desktop: TImage;
    };
    third: {
      mobile: TImage;
      tablet: TImage;
      desktop: TImage;
    };
  };
}

export interface TCatagoryLink {
  text: string;
  url: string;
  img: string;
}

export type TCartItem = CartItem;
export type TRequestMethod = "GET" | "POST" | "PUT" | "DELETE";
