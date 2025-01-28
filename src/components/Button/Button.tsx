import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "error";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center box-border border-0 outline-0 m-0 cursor-pointer align-middle no-underline font-medium text-sm leading-[1.75] tracking-[0.02857em] uppercase min-w-16 rounded-sm shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] active:shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]";

  const variantClasses = {
    contained: "py-2 px-4 text-white",
    text: "py-2 px-2",
    outlined: "py-2 px-4 border border-current",
  };

  const colorClasses = {
    primary: {
      contained: "bg-blue-600 hover:bg-blue-700",
      text: "text-blue-600 hover:bg-blue-100",
      outlined: "text-blue-600 hover:bg-blue-100",
    },
    secondary: {
      contained: "bg-purple-600 hover:bg-purple-700",
      text: "text-purple-600 hover:bg-purple-100",
      outlined: "text-purple-600 hover:bg-purple-100",
    },
    error: {
      contained: "bg-red-600 hover:bg-red-700",
      text: "text-red-600 hover:bg-red-100",
      outlined: "text-red-600 hover:bg-red-100",
    },
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        clsx(variantClasses[variant], colorClasses[color][variant], className)
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default Button;
