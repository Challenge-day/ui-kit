import React from "react";

interface BlockCardProps {
  children?: React.ReactNode;
}

const BlockCard: React.FC<BlockCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-start gap-3 w-full p-[20px_15px] rounded-[25px] bg-[#fafbfc] shadow-[0px_8px_15px_0px_rgba(0,_0,_0,_0.10)] px-5 py-5">
      {children}
    </div>
  );
};

export default BlockCard;
