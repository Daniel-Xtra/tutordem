import AppFormInput from "@/components/reusables/AppFormInput";
import MiniProfileCard from "@/components/reusables/MiniProfileCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const messages = [
  { id: 1, text: "I want to know the purpose of the space", type: "received" },
  { id: 2, text: "What’s new about this topic", type: "sent" },
  { id: 3, text: "I want to know the purpose of the space", type: "received" },
  { id: 4, text: "What’s new about this topic", type: "received" },
  { id: 5, text: "I want to know the purpose of the space", type: "received" },
  { id: 6, text: "What’s new about this topic", type: "sent" },
];

const days = ["Today", "This week", "This month", "This year"];

const MessagesFeature = () => {
  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            messages
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

      <div className="mt-6 md:px-5 xl:px-[136px] font-sans">
        <div className="md:border-[0.5px] border-neutral-200 rounded-xl overflow-hidden mt-6 h-[calc(100vh-325px)] flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-2/5 border-r p-5 ">
            <div className="bg-white sticky top-0 z-10 mb-5">
              <AppFormInput
                className="focus:!ring-0 focus:!ring-offset-0 focus:!border focus:!border-black-50 placeholder:!text-neutral-950"
                placeholder={"Search for message"}
                rightIcon={
                  <CiSearch className="mr-2 size-4 shrink-0 text-neutral-950 font-bold" />
                }
                showRightIcon={true}
              />
            </div>
            <ul className="space-y-5 overflow-y-auto h-[calc(100vh-434px)] scrollbar-thin">
              {Array.from({ length: 20 }).map((_, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between">
                    <MiniProfileCard
                      src={"dp"}
                      name={"Michael John"}
                      content={"Student"}
                    />
                    <div className="flex flex-col gap-y-1  items-end">
                      <span className=" capitalize  font-bold text-base text-[#219653]">
                        new
                      </span>
                      <div className="rounded bg-neutral-950 font-normal text-white text-center w-max px-2 text-[10px] py-[0.5px]">
                        1
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block md:w-3/5 p-5">
            <div className="bg-white sticky top-0 z-10 mb-5 border-b pb-5">
              <div className="flex items-center justify-between">
                <MiniProfileCard
                  src={"dp"}
                  name={"Michael John"}
                  content={"Student"}
                />
                <p className="font-semibold text-xs flex items-center gap-x-2 text-primary-500 cursor-pointer">
                  <span>View profile</span>
                  <FaArrowRight />
                </p>
              </div>
            </div>
            <ul className="space-y-5 overflow-y-auto h-[calc(100vh-510px)] scrollbar-thin flex flex-col">
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  className={`flex ${
                    msg.type === "sent" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-[40%] w-max bg-[#F7F9FC] rounded-[6px] font-normal text-sm/[18px] text-neutral-950 py-3 px-2.5">
                    {msg.text}
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white sticky bottom-0 z-10 mt-5 mb-5 border-t">
              <div className=" py-3 ">
                <AppFormInput
                  className="focus:!ring-0 focus:!ring-offset-0 focus:!border focus:!border-black-50 placeholder:!text-neutral-950"
                  placeholder={"Type your message"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesFeature;
