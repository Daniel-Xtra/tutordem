import React from "react";
import Icon from "./AppIcon";

const MiniProfileCard = ({
  src,
  name,
  content,
  width = 40,
  height = 40,
}: {
  src: string;
  name: string;
  content: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="flex items-center gap-2 mr-11">
      <Icon
        icon={src}
        type="images"
        width={width}
        height={height}
        className="rounded"
      />
      <p className="capitalize">
        <span className="block font-medium text-xs md:text-sm text-neutral-900">
          {name}
        </span>
        <span className="block font-normal text-xs md:text-sm text-neutral-500">
          {content}
        </span>
      </p>
    </div>
  );
};

export default MiniProfileCard;
