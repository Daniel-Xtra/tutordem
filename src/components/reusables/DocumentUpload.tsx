import React from "react";
import { Button } from "../ui/button";
import Icon from "./AppIcon";

const DocumentUpload = ({
  document_name,
  note,
}: {
  document_name: string;
  note?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 font-sans">
      <div className="py-5 px-4 border border-dashed border-neutral-300 rounded-sm flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Icon icon="cloud-upload" width={20} height={20} />
          <p>
            <span className="block text-sm/[19.6px] font-medium font-sans text-neutral-950">
              Upload {document_name}
            </span>
            <span className="block text-[11px]/[15.4px] font-normal font-sans text-neutral-400">
              PDF, Word | 10MB max.
            </span>
          </p>
        </div>
        <Button
          type="button"
          aria-label="Upload Document"
          className="bg-primary-50 p-5 rounded-sm  font-normal text-sm/[19.6px] text-primary-500"
        >
          Upload
        </Button>
      </div>
      {note && (
        <p className="font-sans font-normal flex gap-2 items-center text-[11px]/[15.4px]  text-black-500">
          <Icon icon="guide" height={12} width={12} />
          {note}
        </p>
      )}
    </div>
  );
};

export default DocumentUpload;
