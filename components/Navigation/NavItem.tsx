import React from "react";

const NavItem: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <li className={`uppercase font-bold text-white hover:text-[#D87D4A] ${className}`}>
      {children}
    </li>
  );
};

export default NavItem;
