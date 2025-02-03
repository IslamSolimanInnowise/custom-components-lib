import { twMerge } from "tailwind-merge";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: () => void;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  disabled = false,
  className,
  onChange,
}) => {
  return (
    <div
      className={twMerge(
        "h-5 bg-gray-300 w-10 rounded-2xl relative cursor-pointer transition-all duration-300 ease-in-out before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:bg-white before:rounded-full before:transition-all before:duration-300 before:ease-in-out before:z-0",
        checked &&
          "bg-blue-600 before:translate-x-5 before:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0px_rgba(0,0,0,0.14),0_1px_5px_0px_rgba(0,0,0,0.12)]",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      onClick={onChange}
    ></div>
  );
};
export default Switch;
