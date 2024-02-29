import React from "react";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
};

export default function Input(
  { type = "text", name = "", label = "", helperText = "", ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
  ) {

  const hasError = helperText.length < 5
  
  return (
    <div className="mt-2 w-full">
      <label htmlFor="email" className="text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        ref={ref}
        {...props}
        className="w-full flex rounded-lg shadow bg-gray-50 sm:max-w-md p-4"
      />
      {hasError && <span className="text-red-400">{helperText}</span>}
    </div>
  )
}

