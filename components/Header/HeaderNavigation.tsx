import React from "react";
import Navigation from "components/Navigation";
import NavItem from "components/Navigation/NavItem";
const navItems = ["home", "headphone", "speakers", "earphones"];
export const HeaderNavigation = () => {
  return (
    <Navigation className="hidden md:flex">
      {navItems.map((navItem) => (
        <NavItem key={navItem}>{navItem}</NavItem>
      ))}
    </Navigation>
  );
};
