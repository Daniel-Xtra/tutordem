"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import CompleteProfile from "@/components/dropdowns/CompleteProfileDropdown";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import BookAClass from "@/components/modals/book-a-class";
import AppTable from "@/components/reusables/AppTable";
import TutorProfile from "@/components/profile/tutor-profile";

import ParentProfile from "@/components/profile/parent-profile";
import useAuthStore from "@/store/useAuthStore";
import Icon from "@/components/reusables/AppIcon";
import EmptyState from "@/components/reusables/EmptyState";
import { useClickOutside } from "@/hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import StudentProfile from "@/components/profile/student-profile";
import { GoDotFill } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, formatCurrency } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  isCurrency?: boolean;
}

const StatCard = ({ title, value, isCurrency = false }: StatCardProps) => {
  return (
    <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
      <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400 capitalize flex justify-between">
        {title}
        <span>
          <Icon icon="info-circle" height={18} width={18} />
        </span>
      </p>
      <p className="font-semibold text-base/[22.4px] md:text-2xl/[33.6px] text-primary-950">
        {isCurrency ? formatCurrency(value) : value}
      </p>
    </div>
  );
};

const stats = {
  parent: [
    { title: "Completed Sessions", value: 0 },
    { title: "Ongoing Sessions", value: 0 },
    { title: "Total Amount Paid", value: "5000", isCurrency: true },
    { title: "Number of Wards", value: 0 },
  ],
  tutor: [
    { title: "Completed Sessions", value: 0 },
    { title: "Ongoing Sessions", value: 0 },
    { title: "Total Earnings", value: "15000", isCurrency: true },
    { title: "Number of Students", value: 0 },
  ],
  student: [
    { title: "Completed Sessions", value: 0 },
    { title: "Ongoing Sessions", value: 0 },
    { title: "Total Amount Paid", value: "30000", isCurrency: true },
  ],
};

const ProfileComponents = {
  tutor: TutorProfile,
  parent: ParentProfile,
  student: StudentProfile,
};

const days = ["Today", "This week", "This month", "This year"];

const OverviewFeature = () => {
  const [open, setOpen] = useState(false);
  const menu = useClickOutside("mobile_complete_profile");

  const user = useAuthStore((state) => state.user) as {
    membershipType: keyof typeof stats;
  };

  const ProfileComponent =
    ProfileComponents[user?.membershipType as "tutor" | "parent" | "student"] ||
    null;

  return (
    <>
      {ProfileComponent ? <ProfileComponent /> : null}

      <div className="relative" ref={menu.dropdownRef}>
        <Button
          type="button"
          className="h-[57px] px-6 w-full bg-warning-25 rounded-none font-medium text-xs/[16.8px] text-warning-700 md:hidden flex justify-between items-center"
          onClick={menu.handleClick}
        >
          <span> Complete profile</span>
          <span>
            <Icon icon={"arrow-right"} height={24} width={24} />
          </span>
        </Button>

        <AnimatePresence>
          {menu.isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut", bounce: 0.2 }}
              className="absolute top-16 right-0 z-50 min-w-[220px] w-full rounded-md px-5"
            >
              <CompleteProfile closePop={menu.handleClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            overview
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        {user?.membershipType !== "tutor" && (
          <div className="w-full md:w-auto">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="cursor-pointer" asChild>
                <Button
                  type="button"
                  className="rounded-sm p-5 w-full font-normal text-xs/[16.8px] bg-primary-500 text-white"
                >
                  Book a Class
                </Button>
              </DialogTrigger>
              <BookAClass name={"Jessica"} closeModal={() => setOpen(false)} />
            </Dialog>
          </div>
        )}

        {user?.membershipType === "tutor" && (
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-normal text-sm text-neutral-950">
              Sort by
            </span>
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
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 font-sans px-5 xl:px-[136px]">
        {stats[user.membershipType]?.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {user.membershipType === "student" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 font-sans px-5 xl:px-[136px]">
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <h3 className="font-semibold text-sm/[19.6px] md:text-lg/[25.2px] -mb-4 capitalize text-neutral-900">
              your quiz
            </h3>
          </div>
          <div className="col-span-1 rounded-[8px] p-4 bg-neutral-950 gap-3 flex items-center">
            <Icon icon="quiz-cup" width={32} height={32} />
            <div className="space-y-[2px]">
              <span className="text-white font-medium text-sm capitalize">
                last quiz
              </span>
              <p className="font-normal text-xs text-neutral-400 flex capitalize gap-1.5 items-center">
                mathematics <GoDotFill className="text-hotShot-500" />
                <span className="-me-1 text-success-500">30</span>/40
              </p>
            </div>
          </div>
          <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3  flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon="math-quiz" width={32} height={32} />
              <div className="space-y-[2px]">
                <span className="text-neutral-950 font-medium text-sm capitalize">
                  statistics math quiz
                </span>
                <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                  mathematics <GoDotFill className="text-neutral-950" />
                  40 questions
                </p>
              </div>
            </div>
            <Icon icon="arrow-right-black" width={16} height={16} />
          </div>
          <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3  flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon="math-quiz" width={32} height={32} />
              <div className="space-y-[2px]">
                <span className="text-neutral-950 font-medium text-sm capitalize">
                  WAEC 2020 quiz
                </span>
                <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                  english <GoDotFill className="text-neutral-950" />
                  40 questions
                </p>
              </div>
            </div>
            <Icon icon="arrow-right-black" width={16} height={16} />
          </div>
          <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon="math-quiz" width={32} height={32} />
              <div className="space-y-[2px]">
                <span className="text-neutral-950 font-medium text-sm capitalize">
                  organic chemistry quiz
                </span>
                <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                  chemistry <GoDotFill className="text-neutral-950" />
                  40 questions
                </p>
              </div>
            </div>
            <Icon icon="arrow-right-black" width={16} height={16} />
          </div>
        </div>
      )}

      <AppTable title="session management" border={true}>
        <EmptyState
          title="No records"
          message="You have no records at the moment"
          icon="empty-state"
          width={68}
          height={68}
        />
      </AppTable>
    </>
  );
};

export default OverviewFeature;
