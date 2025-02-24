import Image from "next/image";
import React from "react";

const MiniProfileCard = ({
  src,
  name,
  content,
}: {
  src: string;
  name: string;
  content: string;
}) => {
  return (
    <div className="flex items-center gap-3 mr-11">
      <Image
        src={src}
        width="40"
        height="40"
        alt="profile-img"
        className="rounded-[8px]"
      />
      <p className="capitalize">
        <span className="block font-medium text-sm/[19.6px] text-neutral-900">
          {name}
        </span>
        <span className="block font-normal text-sm/[19.6px] text-neutral-500">
          {content}
        </span>
      </p>
    </div>
  );
};

export default MiniProfileCard;
