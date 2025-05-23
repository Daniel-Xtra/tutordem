"use client";

import AppFormInput from "@/components/reusables/AppFormInput";
import Icon from "@/components/reusables/AppIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Documents from "../documents";

interface NavTabs {
  name: string;
  icon: string;
  value: string;
  activeIcon: string;
}

interface Resources {
  title: string;
  documentType: string;
  subject: string;
  class: string;
  currentPage: string;
  totalPages: string;
  rating: string;
  numberOfStars: string;
  isBookmarked: boolean;
  url: string;
}

const resources: Resources[] = [
  {
    title: "Organic Chemistry",
    documentType: "PDF",
    subject: "Chemistry",
    class: "SSS 3",
    currentPage: "36",
    totalPages: "78",
    rating: "4.5",
    numberOfStars: "15",
    isBookmarked: true,
    url: "https://computingbook.org/FullText.pdf",
},
{
    title: "Organic Chemistry",
    documentType: "PDF",
    subject: "Chemistry",
    class: "SSS 3",
    currentPage: "12",
    totalPages: "34",
    rating: "4.5",
    numberOfStars: "07",
    isBookmarked: true,
    url: "https://computingbook.org/FullText.pdf",
},
{
    title: "Organic Chemistry",
    documentType: "PDF",
    subject: "Chemistry",
    class: "SSS 3",
    currentPage: "0",
    totalPages: "78",
    rating: "4.5",
    numberOfStars: "15",
    isBookmarked: false,
    url: "https://computingbook.org/FullText.pdf",
}
];

const navTabs: NavTabs[] = [
  {
    name: "All",
    icon: "hand-money",
    value: "all",
    activeIcon: "hand-money-active",
  },
  {
    name: "Recommended",
    icon: "teaching-profile",
    value: "recommended",
    activeIcon: "teaching-profile-active",
  },
  {
    name: "Bookmarked",
    icon: "profile",
    value: "bookmarked",
    activeIcon: "profile-active",
  },
  {
    name: "Continue",
    icon: "calendar",
    value: "continue",
    activeIcon: "calendar-active",
  },
];
const StudentLibrary = () => {
  const [activeNavTab, setActiveNavTab] = useState("recommended");
  return (
    <div>
      <div className="mx-5 xl:mx-[136px] flex flex-col md:flex-row md:items-center md:justify-between pb-8 md:space-x-2 space-y-4 md:space-y-0">
        <div className="border-b-[0.5px] border-b-neutral-200 flex overflow-x-auto w-full md:w-auto">
          {navTabs?.map((tab) => (
            <Button
              type="button"
              key={tab.name}
              className={cn(
                "font-normal text-sm/[19.6px] text-neutral-500 px-6 h-14 whitespace-nowrap",
                activeNavTab == tab.value &&
                  "text-neutral-950 font-medium rounded bg-primary-50"
              )}
              onClick={() => setActiveNavTab(tab.value)}
            >
              <Icon
                icon={
                  activeNavTab == tab.value
                    ? `${tab.activeIcon}`
                    : `${tab.icon}`
                }
                width={20}
                height={20}
              />
              {tab.name}
            </Button>
          ))}
        </div>
        <div className="w-full md:max-w-[300px] lg:max-w-[400px]">
          <AppFormInput
            placeholder="Search for resources"
            rightIcon={<Icon icon="magnifier" width={16} height={16} />}
            showRightIcon={true}
            className="focus:!ring-0 focus:!ring-offset-0 focus:!border focus:!border-black-50 placeholder:!text-neutral-950 !pe-12"
          />
        </div>
      </div>
      <Documents resources={resources} />
    </div>
  );
};

export default StudentLibrary;
