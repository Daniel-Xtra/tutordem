"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SettingsLayout from "../settingsLayout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddCredentials from "@/components/modals/add-credentials";
import Icon from "@/components/reusables/AppIcon";

const Credentials = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <SettingsLayout title="Credentials">
        <div className="border-[0.5px] border-neutral-200 p-4 rounded-[8px] space-y-3">
          <div className="flex justify-between items-center gap-3">
            <div className="text-sm/[21px] text-neutral-950 flex flex-col">
              <span className="font-semibold">UNILAG</span>
              <span className="font-normal">BSc. Computer Science</span>
            </div>
            <Badge className="font-medium text-[11px]/[15.4px] text-warning-500 bg-warning-25 px-4 py-2">
              Pending
            </Badge>
          </div>
          <div className="border-[0.5px] border-neutral-200 p-6 gap-3 rounded-[8px] flex items-center">
            <Icon icon="document" width={32} height={33.58} />
            <span className="font-normal text-sm/[19.6px] text-black-500">
              BSc Computer Science.pdf
            </span>
          </div>
          <div className="flex justify-between items-center gap-x-5">
            <Button
              type="button"
              className="bg-transparent p-5 rounded text-primary-500 font-normal text-xs/[16.8px] w-full"
            >
              Edit
            </Button>
            <Button
              type="button"
              className="bg-error-25 p-5 rounded text-error-500 font-normal text-xs/[16.8px] w-full hover:bg-error-50 transition"
            >
              Cancel
            </Button>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
            >
              Add new credential
            </Button>
          </DialogTrigger>
          <AddCredentials closeModal={closeModal} />
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

export default Credentials;
