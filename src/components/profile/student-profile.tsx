"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const StudentProfile = () => {
  return (
    <div className="md:pb-4">
      <div className="bg-neutral-50 md:py-8 md:px-5 xl:px-[136px] font-sans">
        <div className="bg-neutral-950 md:rounded-[8px] p-6 md:p-10 flex justify-between items-center">
          <h1 className="text-[#FFFFFF] font-normal text-[20px]/[22.2px] md:text-[28px]/[31.08px] tracking-[-2px] inline-flex items-center gap-x-4">
            <span className="font-semibold -me-2.5">Ebenezer</span>Akin
            <Badge className="hidden md:block bg-primary-50 py-3 px-4 font-medium text-xs/[16.8px] text-neutral-500 tracking-normal ">
              2 new notifications
            </Badge>
            <div className="h-10 w-10 flex justify-center items-center rounded-full md:hidden bg-white">
              {svgIcon({ icon: "notification-colored", size: 16 })}
            </div>
          </h1>
          <Button className=" inline-flex items-center gap-x-3 ">
            <Image
              className="w-6 h-6 md:w-10 md:h-10 "
              src="/assets/icons/add.png"
              alt="image"
              width={40}
              height={40}
            />
            <p className="font-medium text-[#FFFFFF] text-sm/[19.6px]">
              <>
                Add <span className="hidden md:inline-flex">another</span> child
              </>
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
