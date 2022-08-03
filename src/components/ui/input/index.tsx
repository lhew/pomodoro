import classNames from "classnames";
import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string[];
  field?: any;
}
const Input = ({ className = [], field = {}, ...props }: InputProps) => {
  return (
    <input
      className={classNames(
        "border",
        "border-slate-400",
        "focus:outline-1",
        "active:outline-1",
        "rounded-sm",
        "p-2",
        { "bg-gray-400": props.disabled },
        { "border-gray-400": props.disabled },
        { "cursor-not-allowed": props.disabled },
        ...className
      )}
      {...props}
      {...field}
    />
  );
};

export default Input;
