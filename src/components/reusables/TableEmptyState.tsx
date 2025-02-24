import React from "react";

const TableEmptyState = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-5 xl:mx-[136px] border-[0.5px] font-sans border-neutral-200 bg-[#FFFFFF] rounded-xl">
      <div className="h-[68px] py-5 px-6 border-b border-b-neutral-200">
        <span className="capitalize font-semibold text-lg/[25.2px] text-neutral-900 ">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
};

export default TableEmptyState;
