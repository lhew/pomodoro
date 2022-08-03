import classNames from "classnames";
import React, { RefObject } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string[];
  name: string;
  ref?: RefObject<HTMLInputElement> | undefined;
  field?: any;
}
const Input = ({
  children,
  className = [],
  name,
  ref,
  field = {},
  ...props
}: InputProps) => {
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
      ref={ref}
      {...props}
      {...field}
    />
  );
};

export default Input;
