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
import TableEmptyState from "@/components/reusables/TableEmptyState";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Subject {
  name: string;
}

const subjects: Subject[] = [{ name: "mathematics" }, { name: "english" }];

const SessionFeature = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-8 mb-5 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div>
          <h2 className="font-semibold text-lg/[25.2px] capitalize text-neutral-950">
            session
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

      <TableEmptyState title="session management">
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
            <TableRow className="border-t border-b bg-neutral-50">
              <TableCell className="">
                <MiniProfileCard
                  name="Jessica Akin"
                  src="/assets/images/dp.png"
                  content="Grade 3"
                />
              </TableCell>
              <TableCell>
                <MiniProfileCard
                  name="Michael James"
                  src="/assets/images/dp.png"
                  content="6 session left"
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-[11px] text-neutral-500 font-sm/[19.6px]">
                  <span>23-03-24 </span>
                  <MdArrowRightAlt className="text-primary-500" />
                  <span>12-05-24 </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1.5 items-center">
                  {subjects.map((subject) => (
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
                  <GoDotFill />
                  Ongoing
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="py-5 px-5 font-sans">
          <Pagination>
            <PaginationContent className="flex items-center w-full justify-between">
              <PaginationItem>
                <PaginationPrevious className="py-3 px-[14px] border border-neutral-300 font-medium text-sm/[19.6px]" />
              </PaginationItem>
              <div className="flex items-center gap-[2px]">
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext className="py-3 px-[14px] border border-neutral-300 font-medium text-sm/[19.6px]" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </TableEmptyState>
    </>
  );
};

export default SessionFeature;
