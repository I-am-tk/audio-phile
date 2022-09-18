import React from "react";
import { navLinks } from "data/nav-links";
import Navigation from "components/Navigation";
import NavLink from "components/NavLink";
function FooterNavigation() {
  return (
    <Navigation className={"flex-col sm:flex-row justify-start gap-[0.75rem] sm:gap-6"}>
      {navLinks.map((navItem) => (
        <NavLink
          key={navItem.id}
          href={navItem.url}
          className="uppercase font-bold text-sm tracking-wider flex justify-center hover:text-accentLight "
        >
          {navItem.text}
        </NavLink>
      ))}
    </Navigation>
  );
}

export default FooterNavigation;
