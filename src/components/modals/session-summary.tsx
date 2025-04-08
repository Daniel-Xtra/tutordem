import React, { ReactNode, useState } from "react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { BsSendFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import RescheduleClass from "./reschedule-class";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";
import {
  SessionCommentFormValues,
  sessionCommentSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AppTextarea from "../reusables/AppTextarea";
import AppFormLabel from "../reusables/AppFormLabel";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import AppRating from "../reusables/AppRating";
import MiniProfileCard from "../reusables/MiniProfileCard";
import SessionComment from "./session-comment";

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

const SessionSummary = ({
  exam = "jamb",
  closeModal,
}: {
  exam: string;
  closeModal: () => void;
}) => {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);
  const openDialog = (type: DialogType) => setActiveDialog(type);
  const [selectedRating, setSelectedRating] = useState(0);
  const closeDialog = () => setActiveDialog(null);
  const router = useRouter();
  const navigateMessages = () => router.push("messages");

  const form = useForm<SessionCommentFormValues>({
    resolver: zodResolver(sessionCommentSchema),
  });
  return (
    <AppModal
      title={"Session Summary"}
      description={
        <>
          <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
            Let&apos;s review the details of your session
          </span>
        </>
      }
      content={
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-6 justify-between">
            <p className="font-semibold text-lg text-neutral-950">
              Class preparation for <span className="uppercase">{exam}</span>
            </p>
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

          <div className="space-y-3">
            <div className="flex gap-8 items-center">
              <span className="font-normal text-sm text-black-400 capitalize">
                student
              </span>
              <MiniProfileCard
                src="dp"
                name="Jessica Akin"
                content=""
                width={32}
                height={32}
              />
            </div>
            <div className="flex gap-10 items-center">
              <span className="font-normal text-sm text-black-400 capitalize">
                parent
              </span>
              <span className="font-medium text-sm text-neutral-950">
                Ebenezer Akin
              </span>
            </div>
            <div className="flex gap-7 items-start md:items-center">
              <span className="font-normal text-sm text-black-400 capitalize">
                sessions
              </span>
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
            </div>
          </div>

          <div className="block space-y-3">
            <span className="font-normal text-xs text-black-400">
              Class days & Time
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2 rounded p-2 h-14 border border-purple-200 bg-primary-25 font-medium text-sm text-neutral-950"
                >
                  <span className="capitalize">saturday</span>
                  <span>12pm</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="font-normal text-xs text-neutral-950">
              Rate your last session
            </p>
            <div className="flex items-center gap-2">
              <AppRating onRatingChange={setSelectedRating} />
              <span className="font-medium text-sm mt-1 text-neutral-950">
                {selectedRating.toFixed(1)}
              </span>
            </div>
          </div>

          <Form {...form}>
            <form className=" space-y-6 font-sans">
              <div className="space-y-3">
                <AppFormLabel className=" text-black-400">Comment</AppFormLabel>

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <AppTextarea placeholder="" showHint={false} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div className="w-full"> */}
              <Button
                type="button"
                className="rounded p-5 bg-primary-25 font-medium text-sm text-neutral-950 w-full h-14"
              >
                Submit feedback
              </Button>
              {/* </div> */}
            </form>
          </Form>

          <div className="space-y-5">
            <span className="font-normal text-xs text-neutral-950">
              Comments
            </span>
            <SessionComment />
          </div>
        </div>
      }
      actions={
        <>
          <Button
            type="button"
            className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            type="button"
            className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
            onClick={closeModal}
          >
            Done
          </Button>
        </>
      }
    />
  );
};

export default SessionSummary;
