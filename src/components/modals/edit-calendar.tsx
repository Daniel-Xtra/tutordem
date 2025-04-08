import React from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import AppFormLabel from "../reusables/AppFormLabel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  ClassBookingFormValues,
  classBookingSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Icon from "../reusables/AppIcon";

const EditCalendar = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<ClassBookingFormValues>({
    resolver: zodResolver(classBookingSchema),
  });
  return (
    <div>
      <AppModal
        title={"Edit Calendar"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              This shows the days and time of your availability
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <Form {...form}>
            <form className="gap-5 grid grid-cols-12 items-end font-sans">
              <div className="col-span-12">
                <span className="font-semibold text-lg/[27px] text-neutral-950">
                  Availability info
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row gap-5 ">
                <div className="md:w-1/2 space-y-3">
                  <AppFormLabel className=" text-black-400">
                    Available Day
                  </AppFormLabel>

                  <Select>
                    <SelectTrigger className="h-[52px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="divide-y-2 !rounded-none">
                        <SelectItem
                          value="day"
                          className="capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 "
                        ></SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/2 space-y-3">
                  <AppFormLabel className=" text-black-400">
                    Select Time
                  </AppFormLabel>

                  <Select>
                    <SelectTrigger className="h-[52px]">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="divide-y-2 !rounded-none">
                        <SelectItem
                          value="time"
                          className="capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 "
                        ></SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="col-span-12 md:col-span-3 mt-2">
                <Button
                  type="button"
                  className="bg-primary-500 py-5 px-8 h-14 rounded-sm font-sans w-full font-semibold text-sm/[19.6px] text-white"
                >
                  Add
                </Button>
              </div>

              <div className="col-span-12">
                <div className="border border-primary-200 bg-primary-25 rounded p-4 gap-3 font-medium text-sm/[19.6px] text-primary-950 flex flex-row justify-between">
                  <span className="capitalize">monday</span>
                  <span className="flex gap-4 items-center">
                    4pm <Icon icon="close" width={16} height={16} />
                  </span>
                </div>
              </div>
            </form>
          </Form>
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
            >
              Update
            </Button>
          </>
        }
      />
    </div>
  );
};

export default EditCalendar;
