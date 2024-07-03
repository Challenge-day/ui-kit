import React, { InputHTMLAttributes, useState } from "react";
import clsx from "clsx";
import { FiLink } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  /**
   * Whether this input has errors.
   */
  hasErrors?: boolean;
  /**
   * Whether this input should be treated as containing links
   */
  isLinkField?: boolean;
}

const Input: React.FC<InputProps> = ({ style, children, hasErrors, isLinkField, ...props }) => {
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <div
      style={style}
      className={clsx("flex justify-center items-center rounded-[100px] border gap-2 p-[10px_20px] bg-[#fafbfc]", {
        "border-[#676565]": !hasFocus && !hasErrors,
        "border-[#b65001]": hasFocus && !hasErrors,
        "border-[#f7341a]": hasErrors,
      })}
    >
      <input
        {...props}
        onBlur={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        className={clsx(
          "border-none border-0 text-xs font-[400] outline-none h-full min-h-full inline-flex flex-column",
          {
            "w-full min-w-full": !isLinkField,
            "w-[95%] min-w-[90%]": isLinkField,
            "text-[#676565]": !hasFocus && !hasErrors,
            "text-[#050505]": hasFocus && !hasErrors,
            "text-[#f7341a]": hasErrors,
          }
        )}
      />
      {isLinkField && (
        <div className="w-[10%] min-w-[10%]">
          <FiLink color="#003cf6" />
        </div>
      )}
    </div>
  );
};

export default Input;
