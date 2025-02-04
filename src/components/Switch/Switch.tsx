import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  switchClassName?: string;
  sliderClassName?: string;
  id?: string;
  onChange?: () => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  disabled = false,
  switchClassName,
  sliderClassName,
  id,
  onChange,
}) => {
  const generatedID = useId();
  const componentId = generatedID || id;

  function handleChange() {
    if (onChange !== undefined) {
      onChange();
    }
  }

  return (
    <label
      htmlFor={componentId}
      className={twMerge(
        "relative inline-block w-15 h-8.5 m-0.5 cursor-pointer",
        disabled && "pointer-events-none opacity-50",
        switchClassName
      )}
      data-testid="switch"
    >
      <input
        type="checkbox"
        id={componentId}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="opacity-0 w-0 h-0"
        data-testid="input"
      />
      <span
        className={twMerge(
          "absolute inset-0 bg-gray-400 transition-all duration-400 rounded-3xl before:absolute before:content-[''] before:h-6.5 before:w-6.5 before:left-1 before:bottom-1 before:bg-white  before:transition-all before:duration-400 before:rounded-full",
          checked &&
            "bg-blue-400 shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0px_rgba(0,0,0,0.14),0_1px_5px_0px_rgba(0,0,0,0.12)] before:translate-x-6.5",
          sliderClassName
        )}
        data-testid="slider"
      ></span>
    </label>
  );
};
export default Switch;
