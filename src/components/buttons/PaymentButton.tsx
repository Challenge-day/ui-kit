import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface PaymentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ disabled, children, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx("rounded-[100px] flex justify-center items-center p-[10px_20px] shrink-0", {
        "bg-[linear-gradient(270deg,_#003CF6_0%,_#002AB0_100%)] focus:border-[3px] focus:border-[#fafbfc]": !disabled,
        "bg-[#bcbfc6] border-none": disabled,
      })}
    >
      {children}
    </button>
  );
};

export default PaymentButton;
