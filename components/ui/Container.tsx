import React from "react";

const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = "",
  children,
}) => {
  return <div className={`max-w-[72rem] mx-auto ${className}`}>{children}</div>;
};

export default Container;
