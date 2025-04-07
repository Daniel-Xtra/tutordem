"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import SettingsLayout from "../settingsLayout";
import EditCalendar from "@/components/modals/edit-calendar";

const Calendar = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <SettingsLayout title="Calendar">
        <div className="border border-primary-200 bg-primary-25 rounded p-4 gap-3 font-medium text-sm/[19.6px] text-primary-950 flex flex-row justify-between">
          <span className="capitalize">monday</span>
          <span>4pm</span>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
            >
              Edit calendar
            </Button>
          </DialogTrigger>
          <EditCalendar closeModal={closeModal} />
        </Dialog>
      </SettingsLayout>

      <div className="flex flex-row items-center gap-3 sm:gap-4 rounded-md font-sans text-neutral-950 border border-neutral-200 p-6 sm:p-10 bg-neutral-50">
        <Button
          type="button"
          className="p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950 bg-transparent  transition"
          aria-label="Cancel changes"
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-white bg-primary-500 hover:bg-primary-600 transition"
          aria-label="Save changes"
        >
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default Calendar;
