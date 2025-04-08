import { cn } from "@/lib/utils";
import React from "react";

interface TableStateProps {
  title?: string;
  children: React.ReactNode;
  border?: boolean;
}

const AppTable: React.FC<TableStateProps> = ({
  title,
  children,
  border = false,
}) => {
  const titleSection = title && (
    <div
      className={cn(
        "h-[68px] py-5 px-6",
        border && "border-b border-b-neutral-200"
      )}
    >
      <span className="capitalize font-semibold text-base/[22.4px] md:text-lg/[25.2px] text-neutral-900">
        {title}
      </span>
    </div>
  );

  return (
    <div className="mx-5 xl:mx-[136px] border-[0.5px] font-sans border-neutral-200 bg-white rounded-xl">
      {titleSection}
      {children}
    </div>
  );
};

export default AppTable;
