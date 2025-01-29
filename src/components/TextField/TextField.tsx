import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  variant?: "filled" | "outlined" | "standard";
  error?: boolean;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  variant = "standard",
  error = false,
  disabled = false,
  className,
  ...props
}) => {
  const baseClasses =
    "p-2 border-b-1 rounded-xs text-md placeholder-gray-600 outline-0";
  const errorClasses = "text-red-700 placeholder-red-500 border-red-700";
  const disabledClasses = "bg-gray-200 pointer-events-none";

  const variantClasses = {
    standard: "focus:border-b-2",
    filled: "focus:border-b-2 bg-gray-300",
    outlined: "focus:border-2",
  };

  return (
    <input
      type={type}
      className={twMerge(
        baseClasses,
        variantClasses[variant],
        error && errorClasses,
        disabled && disabledClasses,
        className
      )}
      {...props}
    />
  );
};
export default TextField;
