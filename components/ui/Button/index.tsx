import React from "react";

interface TButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  filled?: boolean;
  className?: string;
}
const Button: React.FC<TButtonProps> = ({ primary, filled, className = "", children, ...rest }) => {
  const filledClass = `${
    primary === true ? `bg-[#d87d4a] hover:bg-[#fbaf85]` : `bg-[#191919] hover:bg-[#4C4C4C]`
  }`;
  const borderedClass =
    "border-[#191919] border-[1px] text-black hover:bg-[#191919] hover:text-white";

  const variant = filled === true ? filledClass : borderedClass;
  return (
    <button
      className={`text-sm uppercase font-bold text-white px-8 py-3 transition-all duration-300 ease-out ${variant} ${className} `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

// To be honest with tailwind I don't even need this
