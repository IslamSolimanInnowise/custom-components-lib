import React from "react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({
  label,
  labelClassName,
  containerClassName,
  ...props
}) => {
  const generatedId = useId();
  const id = generatedId || props.id;

  return (
    <div
      className={twMerge(
        "flex gap-3 items-center justify-between w-fit py-2 px-3",
        containerClassName
      )}
    >
      <input
        {...props}
        type="checkbox"
        id={id}
        className={twMerge(`cursor-pointer w-4 h-4`, props.className)}
        role="checkbox"
      />
      <label htmlFor={id} className={twMerge("font-medium", labelClassName)}>
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
