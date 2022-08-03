import classNames from "classnames";
import React from "react";

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  className?: string[];
  field?: any;
}
const Select = ({
  children,
  className = [],
  field = {},
  ...props
}: SelectProps) => {
  return (
    <select
      className={classNames(
        "border",
        "border-slate-400",
        "focus:border-1",
        "active:border-1",
        "hover:border-1",
        "rounded-sm",
        "p-2",
        { "bg-gray-100": props.disabled },
        { "border-gray-100": props.disabled },
        { "cursor-not-allowed": props.disabled },
        ...className
      )}
      {...props}
      {...field}
    >
      {children}
    </select>
  );
};

export default Select;
