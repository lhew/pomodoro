import classNames from "classnames";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string[];
}
const Card = ({ children, className = [], ...props }: CardProps) => {
  return (
    <div
      className={classNames(
        "rounded",
        "min-w-[25em]",
        "max-w-[100em]",
        "shadow-md",
        "px-5",
        "pt-3",
        "pb-4",
        "bg-white",
        ...className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
