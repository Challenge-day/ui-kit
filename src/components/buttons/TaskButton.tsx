import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface TaskButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /**
   * Is pending task?
   */
  isPending?: boolean;
}

const TaskButton: React.FC<TaskButtonProps> = ({ disabled, children, isPending, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx("rounded-[100px] flex justify-center items-center p-[10px_20px] shrink-0 gap-3", {
        "bg-[linear-gradient(270deg,_#B65001_0%,_#FCBE22_100%)] focus:border-[solid_2px_#fafbfc]":
          !disabled && !isPending,
        "bg-[#bcbfc6]": disabled && !isPending,
        "bg-[linear-gradient(180deg,_#051E22_-72.83%,_#5A944E_100%)]": isPending,
      })}
    >
      {children}
    </button>
  );
};

export default TaskButton;
