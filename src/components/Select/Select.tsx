import React from "react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import SelectIcon from "./SelectIcon";

type AttributesWithoutOnChange = Omit<
  React.HTMLAttributes<HTMLSelectElement>,
  "onChange"
>;

interface SelectProps extends AttributesWithoutOnChange {
  label?: string;
  options: { id: string; title: string }[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options = [],
  value = "",
  onClick,
  onChange,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const generatedID = useId();
  const id = props.id || generatedID;

  function handleClick(e: React.MouseEvent<HTMLSelectElement, MouseEvent>) {
    setIsOpen(!isOpen);
    onClick?.(e);
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="min-h-14 min-w-30 relative">
      <label htmlFor={id} className="block mb-1 px-1 pt-0.5">
        {label}
      </label>
      <div
        className={twMerge(
          "absolute -inset-x-0  flex justify-end items-center px-2  pointer-events-none h-10  text-2xl transition-all duration-300",
          !isOpen && "-rotate-x-180"
        )}
        role="presentation"
      >
        <SelectIcon />
      </div>
      <select
        {...props}
        className={twMerge(
          "h-10 w-full appearance-none p-2 cursor-pointer border-1 rounded-xs hover:bg-amber-100 transition-all duration-200 ease-in-out hover:font-bold",
          props.className
        )}
        id={id}
        onClick={handleClick}
        onChange={handleChange}
        role="combobox"
        value={value}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
