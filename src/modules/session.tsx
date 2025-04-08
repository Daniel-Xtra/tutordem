"use client";

import BookAClass from "@/components/modals/book-a-class";
import MiniProfileCard from "@/components/reusables/MiniProfileCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdArrowRightAlt } from "react-icons/md";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GoDotFill } from "react-icons/go";
import AppTable from "@/components/reusables/AppTable";

import AppPagination from "@/components/reusables/AppPagination";
import useAuthStore from "@/store/useAuthStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import SessionSummary from "@/components/modals/session-summary";

interface Subject {
  name: string;
}

const subjects: Subject[] = [{ name: "mathematics" }, { name: "english" }];

const days = ["Today", "This week", "This month", "This year"];

const SessionFeature = () => {
  const [open, setOpen] = useState<{
    book_a_class: boolean;
    session_summary: boolean;
    rowIndex: string | number | null;
  }>({
    book_a_class: false,
    session_summary: false,
    rowIndex: null, // Track the selected row
  });
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <div className="py-8 mb-5 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            session
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        {user?.membershipType == "parent" && (
          <div className="w-full md:w-auto">
            <Dialog
              open={open.book_a_class}
              onOpenChange={(isOpen) =>
                setOpen((prev) => ({ ...prev, book_a_class: isOpen }))
              }
            >
              <DialogTrigger className="cursor-pointer" asChild>
                <Button
                  type="button"
                  className="rounded-sm p-5 w-full font-normal text-xs/[16.8px] bg-primary-500 text-white"
                >
                  Book a Class
                </Button>
              </DialogTrigger>
              <BookAClass
                name={"Jessica"}
                closeModal={() =>
                  setOpen((prev) => ({ ...prev, book_a_class: false }))
                }
              />
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

      <AppTable title="session management" border={false}>
        <Table className="font-sans">
          <TableHeader>
            <TableRow className="font-normal text-xs/[16.8px] text-neutral-500">
              <TableHead>Student</TableHead>
              <TableHead>Tutor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Subject(s)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 2 }).map((_, index) => (
              <Dialog
                key={index}
                open={open.session_summary && open.rowIndex === index}
                onOpenChange={(isOpen) =>
                  setOpen((prev) => ({
                    ...prev,
                    session_summary: isOpen,
                    rowIndex: isOpen ? index : "",
                  }))
                }
              >
                <DialogTrigger asChild>
                  <TableRow className="border-t border-b bg-neutral-50 cursor-pointer">
                    <TableCell>
                      <MiniProfileCard
                        name="Jessica Akin"
                        src="dp"
                        content="Grade 3"
                      />
                    </TableCell>
                    <TableCell>
                      <MiniProfileCard
                        name="Michael James"
                        src="dp"
                        content="6 sessions left"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-[11px] text-neutral-500 text-sm/[19.6px]">
                        <span>23-03-24</span>
                        <MdArrowRightAlt className="text-primary-500" />
                        <span>12-05-24</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1.5 items-center">
                        {subjects?.map((subject) => (
                          <Badge
                            className="bg-neutral-100 rounded-full py-2 px-4 font-normal text-xs/[16.8px] text-neutral-950 capitalize"
                            key={subject.name}
                          >
                            {subject.name}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-hotShot-50 rounded-full py-2 px-4 font-normal text-xs/[16.8px] text-hotShot-500 capitalize gap-1.5">
                        <GoDotFill className="text-sm" />
                        Ongoing
                      </Badge>
                    </TableCell>
                  </TableRow>
                </DialogTrigger>
                <SessionSummary
                  exam="jamb"
                  closeModal={() =>
                    setOpen((prev) => ({ ...prev, session_summary: false }))
                  }
                />
              </Dialog>
            ))}
          </TableBody>
        </Table>

        <div className="py-5 md:px-5 font-sans">
          <AppPagination />
        </div>
      </AppTable>
    </>
  );
};

export default SessionFeature;
