import React from "react";

function Legend({
  className = "",
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>) {
  return (
    <legend
      className={`text-accent uppercase text-[0.8125rem] mb-4 font-bold tracking-widest ${className}`}
    >
      {children}
    </legend>
  );
}

export default Legend;
