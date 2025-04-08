"use client";

import { IoIosArrowDown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ReactNode, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import Icon from "@/components/reusables/AppIcon";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RescheduleClass from "@/components/modals/reschedule-class";

interface Subject {
  name: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
  { name: "biology" },
  { name: "geography" },
];

const days = ["Today", "This week", "This month", "This year"];

type DialogType = "reschedule" | "sendMessage" | "cancel" | null;

const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`py-2 px-4 rounded-full text-[11px]/[15.4px] text-center ${className}`}
  >
    {children}
  </span>
);

const DropdownItem = ({ children }: { children: ReactNode }) => (
  <DropdownMenuItem asChild>{children}</DropdownMenuItem>
);

const CalendarFeature = () => {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);

  const openDialog = (type: DialogType) => setActiveDialog(type);
  const closeDialog = () => setActiveDialog(null);

  const router = useRouter();

  const navigateMessages = () => router.push("messages");
  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            upcoming classes
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="font-normal text-sm text-neutral-950">Sort by</span>
          <Select>
            <SelectTrigger className="h-[52px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="divide-y-2 rounded-none">
                {days.map((day) => (
                  <SelectItem
                    key={day}
                    value={day}
                    className={cn(
                      "capitalize font-sans text-xs/[16.8px] text-neutral-950 p-4 rounded-none",
                      "hover:bg-primary-50 hover:font-semibold",
                      "focus:bg-primary-50 focus:font-semibold",
                      "aria-selected:bg-primary-50 aria-selected:font-semibold"
                    )}
                  >
                    {day}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-5 xl:px-[136px] mt-5 font-sans space-y-1.5">
        <span className="font-semibold text-lg/[25.2px] text-neutral-950 capitalize">
          October 2024
        </span>

        <div className="border border-neutral-300 rounded-[8px] bg-neutral-25 px-7 py-6 flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex flex-col gap-y-1.5">
            <span className=" text-xs/[16.8px] font-normal capitalize">
              today
            </span>
            <span className="text-2xl/9 font-semibold">24</span>
          </div>

          <div className="flex flex-col gap-y-3">
            <span className="text-sm/[19.6px] font-medium flex gap-1.5 items-center capitalize">
              <Icon icon="user-avatar" height={20} width={20} />
              Jessica Akin
            </span>
            <span className="text-sm/[19.6px] flex gap-1.5 items-center capitalize">
              <Icon icon="location-filled" height={20} width={20} /> Ikeja,
              Lagos
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm/[19.6px] font-normal text-neutral-950">
                12 sessions, 2 Months
              </span>
              <span className="text-sm/[19.6px]  font-semibold text-primary-500">
                2pm
              </span>
              <Badge className="bg-success-50 border font-medium border-success-500 text-success-600">
                7 left
              </Badge>
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span>JSS 3</span>
              {subjects.map((subject, index) => (
                <Badge
                  key={index}
                  className="bg-neutral-100  font-normal text-neutral-950 capitalize"
                >
                  {subject.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 md:gap-10 md:ml-auto w-full md:w-max">
            <Badge className="bg-success-50 border border-success-500 text-success-600 text-sm font-semibold w-full md:w-max">
              Class done
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger className="w-full md:w-max">
                <div className="h-14 p-5 bg-primary-50 rounded font-semibold text-sm/[19.6px] text-primary-500 flex gap-2 items-center justify-center">
                  Edit
                  <IoIosArrowDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-1.5 border border-[#DCE0E3]  rounded-[8px]  md:-ms-20">
                <DropdownItem>
                  <Dialog
                    open={activeDialog === "reschedule"}
                    onOpenChange={(open) =>
                      open ? openDialog("reschedule") : closeDialog()
                    }
                  >
                    <DialogTrigger className="cursor-pointer py-4 px-6 w-[205px] font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center gap-3">
                      <MdAccessTimeFilled className="h-4 w-4" />
                      <span>Reschedule class</span>
                    </DialogTrigger>
                    <RescheduleClass closeModal={closeDialog} />
                  </Dialog>
                </DropdownItem>
                <DropdownItem>
                  <div
                    className="cursor-pointer py-4 w-[205px] font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center justify-start px-6 gap-3"
                    onClick={navigateMessages}
                  >
                    <BsSendFill className="h-4 w-4" />
                    <span>Send Message</span>
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div className="cursor-pointer py-4  w-[205px] font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center justify-start px-6 gap-3">
                    <IoCloseCircle className="h-4 w-4" />
                    <span>Cancel class</span>
                  </div>
                </DropdownItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarFeature;
