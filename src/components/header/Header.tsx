import React, { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, ...props }) => (
  <div {...props} className="rounded-[25px_25px_0px_0px] bg-[#001a31] flex justify-between items-center p-[10px_20px]">
    {children}
  </div>
);

export default Header;
