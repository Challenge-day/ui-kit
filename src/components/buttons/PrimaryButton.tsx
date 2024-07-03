import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ disabled, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx("rounded-[100px] flex justify-center items-center p-[10px_20px] shrink-0", {
        "bg-[#001a31] focus:bg-[#012443]": !disabled,
        "bg-[#bcbfc6]": disabled,
      })}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
