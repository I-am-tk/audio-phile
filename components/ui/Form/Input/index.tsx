import React from "react";
import { UseFormRegister, FieldValues, FieldError, Path } from "react-hook-form";
interface TInput<TType extends FieldValues>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  validation: any;
  register: UseFormRegister<TType>;
  error?: FieldError | undefined;
  name: Path<TType>;
}
function Input<T extends FieldValues>({
  className = "",
  name,
  validation = {},
  register,
  error,
  ...rest
}: TInput<T>) {
  const hasError = !!error;

  return (
    <div>
      <input
        {...rest}
        {...register(name, validation)}
        className={`border-[1px] border-inputBorder  block w-full p-4 pr-0 text-sm rounded-md focus:outline-accent focus:outline-2 outline-offset-0 focus:border-transparent font-bold outline-none ${className} ${
          hasError ? "border-inputError focus:outline-inputError" : ""
        }`}
      />
    </div>
  );
}

export default Input;
