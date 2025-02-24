import React from "react";

const ColumnBox = ({
  children,
  className,
  clickFn,
}: {
  children: React.ReactNode;
  className: string;
  clickFn?: () => void;
}) => {
  return (
    <div
      className={`${className} py-6 px-8 border-[2px] font-sans border-neutral-100 bg-[#FFFFFF] rounded`}
      onClick={clickFn}
    >
      {children}
    </div>
  );
};

export default ColumnBox;
