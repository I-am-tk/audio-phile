import React from "react";
import { Facebook, Instagram, Twitter } from "../Icons/Social";
export const FooterSocials = ({ className = "" }) => {
  return (
    <div
      className={`flex gap-4 justify-center items-center w-full sm:row-start-2 sm:self-end sm:justify-end md:row-start-1 md:col-start-2 ${className}`}
    >
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  );
};
