"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import React, { useEffect } from "react";
import { ModalProps } from "@/models/types";

function svgIcon({ icon }: { icon: string }) {
  return <Image src={icon} alt="icon" width={24} height={24} />;
}

export const AppModal: React.FC<ModalProps> = (props) => {
  const { title, description, content, buttonText, primaryFn, actions } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return null;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <DialogContent
      onInteractOutside={(e) => {
        e.preventDefault();
      }}
      onEscapeKeyDown={(e) => {
        e.preventDefault();
      }}
      className="max-w-sm sm:max-w-lg "
    >
      {title && (
        <DialogHeader className="sticky m-0 top-0 inset-x-0 flex flex-row justify-between items-center bg-neutral-100 py-5 sm:py-8 px-6 sm:px-[52px] h-[112px]">
          <div className="space-y-1">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
          <DialogClose>
            {svgIcon({ icon: "/assets/icons/close.png" })}
          </DialogClose>
        </DialogHeader>
      )}
      <div className="px-6 sm:px-[60px] py-10 max-h-[60vh] overflow-y-auto scrollbar-thin ">
        {content}
      </div>
      <DialogFooter className="sticky m-0 bottom-0 inset-x-0 bg-[#FFFFFF] flex flex-col-reverse p-8 border-t-[0.5px] border-t-neutral-200 gap-4 sm:flex-row md:h-[120px]">
        {actions ? (
          actions
        ) : (
          <Button
            className="bg-primary-500 p-5 rounded-sm h-14 w-full font-sans font-semibold text-sm/[19.6px] text-[#FFFFFF]"
            onClick={primaryFn}
          >
            {buttonText}
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
};
