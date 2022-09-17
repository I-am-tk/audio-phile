import React from "react";
import { FooterSocials } from "./FooterSocials";
import Logo from "../Logo/Logo";

import FooterNavigation from "./FooterNavigation";
import Container from "../ui/Container";

export default function index() {
  return (
    <footer className="bg-[#191919] mt-32 pt-16 px-6 pb-20 text-white">
      <Container>
        <div>
          <div className="flex flex-col md:flex-row items-center sm:items-start md:justify-between gap-10 mb-12">
            <Logo />
            <FooterNavigation />
          </div>
          <div
            className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2  gap-y-14
        text-[0.9375rem]
        "
          >
            <p className="sm:col-span-2 md:col-span-1 text-textLight">
              Audiophile is an all in one stop to fulfill your audio needs. We&#39;re a small team
              of music lovers and sound specialists who are devoted to helping you get the most out
              of personal audio. Come and visit our demo facility - we&#39;re open 7 days a week.
            </p>
            <p className="sm:row-start-2  sm:col-span-1 text-textLight">
              Copyright 2021. All Rights Reserved
            </p>
            <FooterSocials />
          </div>
        </div>
      </Container>
    </footer>
  );
}
