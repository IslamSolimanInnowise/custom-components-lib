import React from "react";
import classes from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "error";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "",
  children,
}) => {
  return (
    <button className={`${classes.btn} ${classes[variant]} ${classes[color]}`}>
      {children}
    </button>
  );
};
export default Button;
