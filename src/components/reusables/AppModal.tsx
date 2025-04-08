"use client";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import React from "react";
import { ModalProps } from "@/models/types";
import Icon from "./AppIcon";
import { cn } from "@/lib/utils";

export const AppModal: React.FC<ModalProps> = ({
  title,
  description,
  content,
  buttonText,
  primaryFn,
  actions,
  className = "max-w-sm sm:max-w-lg",
  hideHeader = false,
  hideFooter = false,
}) => {
  return (
    <DialogContent
      onInteractOutside={(e) => {
        if (!document.contains(e.target as Node)) {
          return;
        }
        e.preventDefault();
      }}
      onEscapeKeyDown={(e) => e.preventDefault()}
      onPointerDown={(e) => e.stopPropagation()}
      // onKeyDown={(e) => {
      //   if ([" ", "Escape", "Enter"].includes(e.key)) {
      //     e.preventDefault();
      //     e.stopPropagation();
      //   }
      // }}
      className={`${className}  dialog`}
    >
      <div className={hideHeader ? "hidden" : "block"}>
        <DialogHeader className="sticky top-0 inset-x-0 flex justify-between items-center bg-neutral-100 sm:p-8 px-8 py-10 h-[112px]">
          <div className="space-y-1">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>

          <DialogClose aria-label="Close Modal">
            <Icon icon="close" width={24} height={24} />
          </DialogClose>
        </DialogHeader>
      </div>

      <div
        className={cn(
          "p-6 sm:p-10 max-h-[53vh] md:max-h-[60vh] lg:max-h-[55vh] xl:max-h-[60vh] overflow-y-auto scrollbar-thin font-sans",
          hideFooter && "xl:max-h-[80vh]"
        )}
      >
        {content}
      </div>

      <div className={hideFooter ? "hidden" : "block"}>
        <DialogFooter className="sticky m-0 bottom-0 inset-x-0 bg-white flex flex-col-reverse p-8 border-t-[0.5px] border-t-neutral-200 gap-4 sm:flex-row ">
          {actions ?? (
            <Button
              type="button"
              className="bg-primary-500 p-5 rounded-sm h-14 w-full font-sans font-semibold text-sm text-white"
              onClick={primaryFn}
            >
              {buttonText}
            </Button>
          )}
        </DialogFooter>
      </div>
    </DialogContent>
  );
};
