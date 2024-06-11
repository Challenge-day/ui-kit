import React from "react";

interface BlueCardProps {
  children?: React.ReactNode;
}

const BlueCard: React.FC<BlueCardProps> = ({ children }) => {
  return <div className="w-full bg-[#2054f4] rounded-[25px]">{children}</div>;
};

export default BlueCard;
