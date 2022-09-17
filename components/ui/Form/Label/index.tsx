import React from "react";
import { FieldError } from "react-hook-form";

interface TLabelProps
  extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}

const Label: React.FC<TLabelProps & { error: FieldError | undefined }> = ({
  children,
  htmlFor,
  className = "",
  error,
}) => {
  const message = error ? error.message : null;
  return (
    <label
      htmlFor={htmlFor}
      className={`flex pb-2 justify-between capitalize text-[0.75rem] font-bold text-black ${className} ${
        message ? "text-inputError" : ""
      }`}
    >
      <span>{children}</span>
      {message && <span className="text-xs font-normal text-inputError p-1">{message}</span>}
    </label>
  );
};

export default Label;
