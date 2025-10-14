import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  className?: string;
  handleClick?: () => void;
}

const Button = ({ title, className, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-full cursor-pointer rounded-[.6rem] p-2 hover:opacity-70 transition-all ease-in-out duration-300",
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
