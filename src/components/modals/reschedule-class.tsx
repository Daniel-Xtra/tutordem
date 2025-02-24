"use client";
import React from "react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RescheduleClassFormValues,
  rescheduleClassSchema,
} from "@/schemas/form-schema";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

import Image from "next/image";
import AppFormLabel from "../reusables/AppFormLabel";
import AppTextarea from "../reusables/AppTextarea";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return (
    <Image
      src={icon}
      alt="icon"
      width={size}
      height={size}
      className="ml-auto"
    />
  );
}

const RescheduleClass = () => {
  const form = useForm<RescheduleClassFormValues>({
    resolver: zodResolver(rescheduleClassSchema),
  });
  return (
    <div>
      <AppModal
        title={"Reschedule class"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Recourses for your students
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <Form {...form}>
            <form className="space-y-6 font-sans">
              <div className="space-y-3">
                <AppFormLabel className=" text-black-400">
                  Reason for the reschedule
                </AppFormLabel>

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <AppTextarea
                        placeholder="Tell us a little bit about yourself"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-3">
                <AppFormLabel className=" text-black-400">
                  How soon is the class starting?
                </AppFormLabel>

                <FormField
                  control={form.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild className="h-[52px]">
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              {/* <CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> */}
                              {svgIcon({
                                icon: "/assets/icons/calender-active.png",
                                size: 16,
                              })}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        }
        actions={
          <>
            <Button className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950">
              Cancel
            </Button>
            <Button className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
              Submit
            </Button>
          </>
        }
      />
    </div>
  );
};

export default RescheduleClass;
