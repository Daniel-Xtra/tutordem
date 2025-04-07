/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { CircleX } from "lucide-react";

interface ModalProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  content: React.ReactNode;
  buttonText?: string;
  className?: string;
  primaryFn?: () => void;
  actions?: React.ReactNode;
}

function svgIcon({ icon }: { icon: string }) {
  return <Image src={icon} alt="icon" width={24} height={24} />;
}

export const ReusableDialog: React.FC<ModalProps> = (props) => {
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
    <>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
        className="max-w-sm sm:max-w-lg lg:max-w-[616px]"
      >
        {title && (
          <DialogHeader className="sticky bg-neutral-25 m-0 top-0 inset-x-0 flex flex-row justify-between items-center px-[24px] lg:px-[48px] py-[20px] lg:py-[60px]  h-[112px] border-b border-neutral-100">
            <div className="space-y-1 font-sans">
              <DialogTitle className="text-[28px] lg:text-[32px] font-semibold tracking-[-2px]">
                {title}
              </DialogTitle>
              <DialogDescription className="text-start text-sm">
                {description}
              </DialogDescription>
            </div>
            <DialogClose>
              <CircleX color="#0C111D" />
            </DialogClose>
          </DialogHeader>
        )}
        <div className="px-6 sm:px-[60px] py-16 flex flex-col justify-center max-h-[60vh] overflow-y-auto bg-white">
          {content}
        </div>
        <DialogFooter className="px-6 sm:px-[60px] py-10">
          {actions && actions}
        </DialogFooter>
      </DialogContent>
    </>
  );
};
