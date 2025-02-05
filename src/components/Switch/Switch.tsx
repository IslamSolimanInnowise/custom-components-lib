import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  switchClassName?: string;
  sliderClassName?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  disabled,
  switchClassName,
  sliderClassName,
  readOnly,
  className,
  id,
  ...props
}) => {
  const generatedID = useId();
  const componentId = generatedID || id;

  return (
    <label
      htmlFor={componentId}
      className={twMerge(
        "relative inline-block w-15 h-8.5 m-0.5 cursor-pointer",
        readOnly && "pointer-events-none",
        disabled && "pointer-events-none opacity-50",
        switchClassName,
      )}
      data-testid="switch"
    >
      <input
        {...props}
        type="checkbox"
        id={componentId}
        disabled={disabled}
        className={twMerge("opacity-0 w-0 h-0", className)}
        defaultChecked
        data-testid="switch-input"
      />
      <span
        className={twMerge(
          "absolute inset-0 bg-gray-400 transition-all duration-400 rounded-3xl before:absolute before:content-[''] before:h-6.5 before:w-6.5 before:left-1 before:bottom-1 before:bg-white  before:transition-all before:duration-400 before:rounded-full",
          checked &&
            "bg-blue-400 shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0px_rgba(0,0,0,0.14),0_1px_5px_0px_rgba(0,0,0,0.12)] before:translate-x-6.5",
          sliderClassName,
        )}
        data-testid="slider"
      ></span>
    </label>
  );
};
export default Switch;
