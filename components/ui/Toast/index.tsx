import React, { DetailedHTMLProps, OutputHTMLAttributes } from "react";
function Toast({
  text,
  className = "",
}: DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement> & { text: string }) {
  return (
    <output className={`bg-green-500 text-white px-4 py-3 block rounded-md text-lg ${className}`}>
      {text}
    </output>
  );
}

export default Toast;
