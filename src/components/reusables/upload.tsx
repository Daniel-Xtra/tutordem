"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Icon from "./AppIcon";

const Upload = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 font-sans",
        reverse && "flex-col-reverse"
      )}
    >
      <div>
        <div className="py-5 px-4 border border-dashed border-neutral-300 rounded-sm flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Icon icon="cloud-upload" height={20} width={20} />
            <p>
              <span className="block text-sm/[19.6px] font-medium font-sans text-neutral-950">
                Upload Profile Picture
              </span>
              <span className="block text-[11px]/[15.4px] font-normal font-sans text-neutral-400">
                PNG, JPG, GIF | 10MB max.
              </span>
            </p>
          </div>
          <Button
            type="button"
            className="bg-primary-50 p-5 rounded-sm  font-normal text-sm/[19.6px] text-primary-500"
          >
            Upload
          </Button>
        </div>

        <p className="font-sans font-normal flex gap-2 items-center text-[11px]/[15.4px] py-3 text-black-500">
          <Icon icon="guide" width={12} height={12} />
          No Glasses, Clear Portrait Image, Colored Image
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-white text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
            E
          </div>
          <div>
            <span className="block f font-normal text-xs md:text-base/[22.4px] capitalize">
              <b className="font-bold"> Ebenezer</b> Akin
            </span>
            <span className="block font-normal text-left text-xs md:text-sm/[19.6px] capitalize">
              parent
            </span>
          </div>
        </div>
        <p className="font-normal text-sm/[19.6px] text-neutral-950">Preview</p>
      </div>
    </div>
  );
};

export default Upload;
