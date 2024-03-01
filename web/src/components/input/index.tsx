import React from "react";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
};

 function Input(
  { type = "text", name = "", label = "", helperText = "", ...props }: InputProps,
  ref: any
  ) {

  
  
  return (
    <div className="mt-2 flex flex-col justify-center">
      <label htmlFor="email" className="text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        ref={ref}
        {...props}
        className="flex rounded-lg shadow bg-gray-50 p-4"
      />
      <span className="text-red-400">{helperText}</span>
    </div>
  )
}

export default forwardRef(Input)

