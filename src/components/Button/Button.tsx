import React from "react";
import classes from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "error";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${classes.btn} ${classes[variant]} ${classes[color]} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};
export default Button;
