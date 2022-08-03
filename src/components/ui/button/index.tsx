import classNames from "classnames";
import React, { ReactNode } from "react";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  disabled?: boolean;
  secondary?: boolean;
  className?: string[];
}
const Button = ({
  children,
  secondary,
  className = [],
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        `bg-red-700`,
        "bold",
        "text-white",
        "border-2",
        `border-red-700`,
        "p-2",
        "pl-3",
        "pr-3",
        "rounded-sm",
        { "bg-gray-400": props.disabled },
        { "border-gray-400": props.disabled },
        { "bg-gray-700": secondary },
        { "border-gray-700": secondary },
        { "cursor-not-allowed": props.disabled },
        ...className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
