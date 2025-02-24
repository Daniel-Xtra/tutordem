"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import RescheduleClass from "@/components/modals/reschedule-class";
import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
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

interface Subject {
  name: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
];

const CalenderFeature = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div>
          <h2 className="font-semibold text-lg/[25.2px] capitalize text-neutral-950">
            upcoming classes
          </h2>
          <p className="font-normal text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        <div></div>
      </div>
      <div className="px-5 xl:px-[136px] mt-5 font-sans">
        <span className="font-semibold text-lg/[25.2px] text-neutral-950 capitalize">
          October 2024
        </span>
        <Table className="px-1 border-separate border-spacing-y-6">
          <TableBody className="text-neutral-950 font-sans ">
            <TableRow className="ring-1 ring-neutral-300 rounded-[8px] bg-neutral-25">
              <TableCell className="rounded-l-[8px]">
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-normal text-xs/[16.8px] capitalize">
                    today
                  </span>
                  <span className="font-semibold text-2xl/9">24</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-medium text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize">
                    {svgIcon({ icon: "user-avatar", size: 20 })}
                    Jessica Akin
                  </span>
                  <span className="font-normal text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize ">
                    {svgIcon({ icon: "location-filled", size: 20 })} Ikeja,
                    Lagos
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <div className="flex gap-1.5 items-center">
                    <span>Jss 3 </span>
                    {subjects.map((subject) => (
                      <Badge
                        className="bg-neutral-100 rounded-full py-2 px-4 font-normal text-[11px]/[15.4px] text-neutral-950 capitalize"
                        key={subject.name}
                      >
                        {subject.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-normal text-sm/[19.6px] text-neutral-950">
                      12 sessions, 2 Months
                    </span>
                    <span className="text-primary-500 font-semibold text-sm/[19.6px]">
                      2pm
                    </span>
                    <Badge className="bg-success-50 border border-success-500 text-success-600 py-2 px-4 font-medium text-[11px]/[15.4px]">
                      7 left
                    </Badge>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="relative justify-self-end">
                  <Badge className="bg-success-50 border border-success-500 py-2 px-4 text-success-600 font-semibold text-sm/[19.6px] ">
                    Class done
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="w-px rounded-r-[8px]">
                <div className="relative justify-self-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="h-14 p-5 bg-primary-50 rounded-none font-semibold text-sm/[19.6px] text-primary-500 flex gap-2">
                        Edit
                        <IoIosArrowDown />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-1.5 border rounded-[8px] border-[#DCE0E3]">
                      <DropdownMenuItem asChild>
                        <Dialog open={open} onOpenChange={setOpen}>
                          <DialogTrigger className="cursor-pointer py-4 px-6 w-[205px] bg-primary-50 font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center gap-3">
                            <MdAccessTimeFilled className="h-4 w-4" />
                            <span>Reschedule class</span>
                          </DialogTrigger>
                          <RescheduleClass />
                        </Dialog>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Dialog>
                          <DialogTrigger className="cursor-pointer py-4 px-6 w-[205px] font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center gap-3">
                            <BsSendFill className="h-4 w-4" />
                            <span>Send Message</span>
                          </DialogTrigger>
                        </Dialog>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Dialog>
                          <DialogTrigger className="cursor-pointer py-4 px-6 w-[205px] font-normal text-xs/[16.8px] text-neutral-950 font-sans flex items-center gap-3">
                            <IoCloseCircle className="h-4 w-4" />
                            <span>Cancel class</span>
                          </DialogTrigger>
                        </Dialog>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="ring-1 ring-neutral-300 rounded-[8px] bg-neutral-25">
              <TableCell className="rounded-l-[8px]">
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-normal text-xs/[16.8px] capitalize">
                    wed
                  </span>
                  <span className="font-semibold text-2xl/9">24</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-medium text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize">
                    {svgIcon({ icon: "user-avatar", size: 20 })}
                    Jessica Akin
                  </span>
                  <span className="font-normal text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize ">
                    {svgIcon({ icon: "location-filled", size: 20 })} Ikeja,
                    Lagos
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <div className="flex gap-1.5 items-center">
                    <span>Jss 3 </span>
                    {subjects.map((subject) => (
                      <Badge
                        className="bg-neutral-100 rounded-full py-2 px-4 font-normal text-[11px]/[15.4px] text-neutral-950 capitalize"
                        key={subject.name}
                      >
                        {subject.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-normal text-sm/[19.6px] text-neutral-950">
                      12 sessions, 2 Months
                    </span>
                    <span className="text-primary-500 font-semibold text-sm/[19.6px]">
                      2pm
                    </span>
                    <Badge className="bg-success-50 border border-success-500 text-success-600 py-2 px-4 font-medium text-[11px]/[15.4px]">
                      7 left
                    </Badge>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="relative justify-self-end">
                  <Badge className="bg-hotShot-25 py-2 px-4 text-hotShot-500 font-semibold text-sm/[19.6px] ">
                    Rescheduled 1st Nov. 2024
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="w-px rounded-r-[8px]">
                <div className="relative justify-self-end">
                  <Button className="h-14 p-5 bg-primary-50 rounded-none font-semibold text-sm/[19.6px] text-primary-500">
                    Edit
                    <IoIosArrowDown />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="ring-1 ring-neutral-300 rounded-[8px] bg-neutral-25">
              <TableCell className="rounded-l-[8px]">
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-normal text-xs/[16.8px] capitalize">
                    wed
                  </span>
                  <span className="font-semibold text-2xl/9">24</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <span className="font-medium text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize">
                    {svgIcon({ icon: "user-avatar", size: 20 })}
                    Jessica Akin
                  </span>
                  <span className="font-normal text-sm/[19.6px] inline-flex gap-1.5 items-center capitalize ">
                    {svgIcon({ icon: "location-filled", size: 20 })} Ikeja,
                    Lagos
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-y-1.5">
                  <div className="flex gap-1.5 items-center">
                    <span>Jss 3 </span>
                    {subjects.map((subject) => (
                      <Badge
                        className="bg-neutral-100 rounded-full py-2 px-4 font-normal text-[11px]/[15.4px] text-neutral-950 capitalize"
                        key={subject.name}
                      >
                        {subject.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-normal text-sm/[19.6px] text-neutral-950">
                      12 sessions, 2 Months
                    </span>
                    <span className="text-primary-500 font-semibold text-sm/[19.6px]">
                      2pm
                    </span>
                    <Badge className="bg-success-50 border border-success-500 text-success-600 py-2 px-4 font-medium text-[11px]/[15.4px]">
                      7 left
                    </Badge>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="relative justify-self-end"></div>
              </TableCell>
              <TableCell className="w-px rounded-r-[8px]">
                <div className="relative justify-self-end">
                  <Button className="h-14 p-5 bg-primary-50 rounded-none font-semibold text-sm/[19.6px] text-primary-500">
                    Edit
                    <IoIosArrowDown />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CalenderFeature;
