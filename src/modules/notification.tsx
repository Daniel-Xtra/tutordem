import Icon from "@/components/reusables/AppIcon";
import MiniProfileCard from "@/components/reusables/MiniProfileCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, formatCurrency } from "@/lib/utils";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const NotificationFeature = () => {
  const days = ["Today", "This week", "This month", "This year"];
  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            notifications
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
        <div className="border-[0.5px] border-neutral-200 rounded-xl space-y-7 mt-6 p-6 md:p-7">
          <p className="font-normal text-xs text-neutral-600">
            yesterday 21:03
          </p>
          <ul className="space-y-8">
            <li>
              <div className="rounded">
                <div className="gap-6 bg-neutral-50 p-5 md:p-8 flex flex-wrap items-start justify-between">
                  <div className="flex flex-wrap items-start gap-6">
                    <Icon icon="resources-active" width={20} height={20} />

                    <div className="flex flex-wrap flex-col gap-y-2">
                      <span className="font-semibold text-base text-neutral-950">
                        Further mathematics
                      </span>
                      <div className="flex flex-wrap items-center gap-2 font-normal text-xs md:text-sm text-neutral-600">
                        <span>Mathematics</span>
                        <GoDotFill className="size-1.5 text-primary-500" />
                        <span>JSS2</span>
                        <GoDotFill className="size-1.5 text-primary-500" />
                        <span>40 Questions</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-neutral-600 font-normal text-xs md:text-sm capitalize">
                    quiz
                  </span>
                </div>
                <div className="px-8 bg-warning-25 flex justify-center md:justify-end gap-4">
                  <Button
                    type="button"
                    className="text-warning-600 p-0 capitalize"
                  >
                    rejected <AiFillInfoCircle className="size-[18px]" />
                  </Button>
                  <Button
                    type="button"
                    className="text-neutral-950 p-0 capitalize"
                  >
                    edit
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <div className="rounded">
                <div className="gap-6 bg-neutral-50 p-5 md:p-8 flex flex-wrap items-start justify-between">
                  <div className="flex flex-wrap items-center gap-8">
                    <MiniProfileCard
                      src="dp"
                      name="Ebenezer Akin"
                      content="Student"
                    />
                    <div className="font-normal text-sm text-neutral-950 flex items-center space-x-1.5">
                      <Icon icon="location-filled" width={16} height={16} />
                      <span> 12, Botanical garden, ebute-meta</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-lg text-primary-500">
                      {formatCurrency(28500)}
                    </span>
                    <Badge className="font-normal text-xs text-neutral-950 py-2 px-3 bg-white">
                      Monday
                    </Badge>
                    <Badge className="font-normal text-xs text-neutral-950 py-2 px-3 bg-white">
                      3 hours
                    </Badge>
                    <Badge className="font-normal text-xs text-neutral-950 py-2 px-3 bg-white">
                      1 month
                    </Badge>
                  </div>
                </div>
                <div className="px-8 bg-primary-25 font-medium text-sm flex justify-center md:justify-end gap-4">
                  <Button
                    type="button"
                    className="text-success-700 p-0 capitalize"
                  >
                    accept
                  </Button>
                  <Button
                    type="button"
                    className="text-error-600 p-0 capitalize"
                  >
                    decline
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotificationFeature;
