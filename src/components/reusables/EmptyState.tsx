import React from "react";
import Icon from "./AppIcon";

interface EmptyStateProps {
  title?: string;
  icon?: string;
  width: number;
  height: number;
  message?: string;
  className?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  icon = "empty-state",
  message,
  action,
  width,
  height,
  className,
}) => {
  return (
    <div className={`${className} space-y-11 my-20 text-center`}>
      <div className="justify-self-center flex flex-col items-center gap-y-4 justify-center">
        <Icon icon={icon} height={height} width={width} />
        <p className="text-center">
          <span className="font-semibold text-base/[22.4px] text-neutral-950 block">
            {title || "No records"}
          </span>
          <span className="font-normal text-neutral-500 text-xs/[16.8px] block">
            {message || "You have no records at the moment"}
          </span>
        </p>
      </div>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;
