"use client";

import { Button } from "@/components/ui/button";
import UseClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import { useState, useRef } from "react";

import CompleteProfile from "@/components/reusables/CompleteProfileDropdown";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import BookAClass from "@/components/modals/book-a-class";
import TableEmptyState from "@/components/reusables/TableEmptyState";
import StudentProfile from "@/components/profile/student-profile";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return (
    <Image
      src={`/assets/icons/${icon}.png`}
      alt="icon"
      width={size}
      height={size}
    />
  );
}

const OverviewFeature = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement | null>(null);
  UseClickOutside(menu, () => setIsMenuOpen(false));
  return (
    <>
      <StudentProfile />
      <div className="relative" ref={menu}>
        <Button
          className="h-[57px] px-6 w-full bg-warning-25 rounded-none font-medium text-xs/[16.8px] text-warning-700 md:hidden flex justify-between items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span> Complete profile</span>
          <span>{svgIcon({ icon: "arrow-right", size: 24 })}</span>
        </Button>
        <div className={isMenuOpen ? `absolute w-full px-5 ` : "hidden"}>
          <CompleteProfile closePop={() => setIsMenuOpen(false)} />
        </div>
      </div>

      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div>
          <h2 className="font-semibold text-lg/[25.2px] capitalize text-neutral-950">
            overview
          </h2>
          <p className="font-normal text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="cursor-pointer" asChild>
              <Button className="rounded-sm p-5 w-full font-normal text-xs/[16.8px] bg-primary-500 text-[#FFFFFF]">
                Book a Class
              </Button>
            </DialogTrigger>
            <BookAClass name={"Jessica"} closeModal={() => setOpen(false)} />
          </Dialog>
        </div>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 font-sans px-5 xl:px-[136px]">
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-neutral-400 capitalize flex justify-between">
            completed session
            <span className="">
              {svgIcon({ icon: "info-circle", size: 18 })}
            </span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">0</p>
        </div>
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-neutral-400 capitalize flex justify-between items-baseline">
            ongoing session
            <span className="">
              {svgIcon({ icon: "info-circle", size: 18 })}
            </span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">0</p>
        </div>
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-neutral-400 capitalize flex justify-between">
            total amount paid
            <span className="">
              {svgIcon({ icon: "info-circle", size: 18 })}
            </span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">
            N0.00
          </p>
        </div>
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-neutral-400 normal-case flex justify-between">
            Number of Wards
            <span className="">
              {svgIcon({ icon: "info-circle", size: 18 })}
            </span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">0</p>
        </div>
      </div>
      <TableEmptyState title="session management">
        <div className="justify-self-center flex flex-col  items-center justify-center mt-16 ">
          {svgIcon({ icon: "empty-state", size: 68 })}
          <p className="font-semibold text-base/[22.4px] text-neutral-950">
            No records
          </p>
          <p className="font-normal text-neutral-500 text-xs/[16.8px]">
            You have no records at the moment
          </p>
        </div>
        <div className="py-5"></div>
      </TableEmptyState>
    </>
  );
};

export default OverviewFeature;
