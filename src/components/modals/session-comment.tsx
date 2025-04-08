import React from "react";
import Icon from "../reusables/AppIcon";

const SessionComment = () => {
  return (
    <div className="rounded border border-neutral-300 divide-y divide-neutral-300 overflow-hidden">
      <div className="py-6 px-7 flex flex-wrap gap-5 md:gap-[35px] items-center justify-between bg-neutral-25">
        <div className="flex items-center gap-1.5">
          <Icon icon="document-text-outline-coloured" width={20} height={20} />
          <span className="font-normal text-xs normal-case text-neutral-950">
            Note by
          </span>
          <span className="font-medium text-xs capitalize text-neutral-950">
            Jerry Sani
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Icon icon="calendar-outline-coloured" width={20} height={20} />
            <span className="font-normal text-xs text-neutral-950">
              23rd Sept. 2024
            </span>
          </div>
          <div className="h-3 bg-neutral-500 w-[0.5px] border-neutral-300"></div>
          <div className="flex items-center gap-[2px]">
            <span className="font-medium text-xs text-neutral-950">
              {(4).toFixed(1)}
            </span>
            <Icon icon="star" width={12} height={12} />
          </div>
        </div>
      </div>
      <div className="bg-white py-5 px-7">
        <p className="font-normal text-xs text-neutral-500">
          Thank you for uploading the document. The content is clear and
          well-structured, making it easier to understand the concepts.
        </p>
      </div>
    </div>
  );
};

export default SessionComment;
