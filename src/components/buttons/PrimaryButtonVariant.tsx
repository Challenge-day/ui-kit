import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const PrimaryButtonVariant: React.FC<PrimaryButtonProps> = ({ disabled, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx("rounded-[100px] flex justify-center items-center p-[10px_20px] shrink-0", {
        "border border-[#003cf6] focus:border-[3px] bg-[#fafbfc]": !disabled,
        "bg-[#bcbfc6] border-none": disabled,
      })}
    >
      {children}
    </button>
  );
};

export default PrimaryButtonVariant;
