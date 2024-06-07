import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ disabled, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx("rounded-[100px] flex justify-center items-center p-[10px_20px] shrink-0 border", {
        "border-[#edeeef] focus:border-[#fafbfc]": !disabled,
        "border-[#d9d9d9]": disabled,
      })}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
