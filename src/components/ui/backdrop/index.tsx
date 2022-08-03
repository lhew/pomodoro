import classNames from "classnames";
import React from "react";

interface BackDropProps {
  className?: string[];
  onClick?: () => void;
}
const BackDrop = ({ className = [], ...props }: BackDropProps) => {
  return (
    <div
      className={classNames(
        "fixed",
        "w-screen",
        "h-screen",
        "opacity-50",
        "bg-black",
        ...className
      )}
      {...props}
    />
  );
};

export default BackDrop;
