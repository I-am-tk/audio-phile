import React from "react";

const Navigation: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <nav>
      <ul className={`flex gap-8 ${className}`}>{children}</ul>
    </nav>
  );
};
export default Navigation;
