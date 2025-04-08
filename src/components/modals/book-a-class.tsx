"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ClassBookingFormValues,
  classBookingSchema,
} from "@/schemas/form-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { GoDash, GoDotFill } from "react-icons/go";

import AppFormLabel from "../reusables/AppFormLabel";
import AppFormInput from "../reusables/AppFormInput";
import { CiSearch } from "react-icons/ci";
import TutorDetails from "../reusables/TutorDetails";
import { Badge } from "../ui/badge";
import Icon from "../reusables/AppIcon";

const steps = [
  {
    id: "Step 1",
    name: "Book a class for",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Tutor Search for",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "Step 3", name: "Class Summary" },
];

const days_selected = [
  { day: "monday", time: "12pm" },
  { day: "tuesday", time: "2pm" },
];

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const time: string[] = [
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
];

interface Subject {
  name: string;
}

const subjects: Subject[] = [{ name: "mathematics" }, { name: "english" }];

const BookAClass = ({
  name,
  closeModal,
}: {
  name: string;
  closeModal: () => void;
}) => {
  // const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep >= steps.length - 2;
  const buttonText = isLastStep ? (
    "Book Class"
  ) : (
    <>
      Next <GoDash /> Tutor Search
    </>
  );

  const form = useForm<ClassBookingFormValues>({
    resolver: zodResolver(classBookingSchema),
  });

  type Inputs = ClassBookingFormValues;

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        // await handleSubmit(processForm)();
      }
      // setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  return (
    <div>
      <AppModal
        title={
          currentStep < steps.length - 1
            ? steps[currentStep].name + ` ${name}`
            : steps[currentStep].name
        }
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Let’s book a class for {name}
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <div className="space-y-6 font-sans">
            <Form {...form}>
              <form className="gap-5 grid grid-cols-12 items-end font-sans">
                {currentStep === 0 && (
                  <>
                    <div className="col-span-12">
                      <span className="font-semibold text-lg/[27px] text-neutral-950">
                        Class info
                      </span>
                    </div>
                    <div className="col-span-12 md:col-span-8  space-y-3">
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
                                    type="button"
                                    variant={"outline"}
                                    className={cn(
                                      " pl-3 text-left font-normal text-sm/[19.6px]",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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

                    <div className="col-span-12 md:col-span-4 space-y-3">
                      <AppFormLabel className="text-black-400">
                        How long?
                      </AppFormLabel>

                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <SelectTrigger className="h-[52px]">
                                <SelectValue placeholder="" {...field} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup className="!rounded-none">
                                  {["1", "2", "3", "4", "5", "6", "7"].map(
                                    (month) => (
                                      <SelectItem
                                        value={month}
                                        key={month}
                                        className={cn(
                                          "capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 ",
                                          field.value === month
                                            ? "bg-primary-50 border-b-0 rounded-sm font-semibold"
                                            : "font-normal border-b"
                                        )}
                                      >
                                        {month}
                                        {month === "1" ? " month" : " months"}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                      <div className="md:w-1/2 space-y-3">
                        <AppFormLabel className=" text-black-400">
                          Select Time
                        </AppFormLabel>

                        <Select>
                          <SelectTrigger className="h-[52px]">
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className="divide-y-2 rounded-none">
                              {time.map((type) => (
                                <SelectItem
                                  key={type}
                                  value={type}
                                  className={cn(
                                    "capitalize font-sans text-xs/[16.8px] text-neutral-950 p-4 rounded-none",
                                    "hover:bg-primary-50 hover:font-semibold",
                                    "focus:bg-primary-50 focus:font-semibold",
                                    "aria-selected:bg-primary-50 aria-selected:font-semibold"
                                  )}
                                >
                                  {type}
                                </SelectItem>
                              ))}
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
                    <div className=" col-span-12 gap-x-5 font-sans flex items-center">
                      <AppFormLabel className=" text-black-400">
                        Gender
                      </AppFormLabel>

                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <RadioGroup
                              className="flex gap-6"
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              {...field}
                            >
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="male" id="r1" />
                                <AppFormLabel className="font-medium text-sm/[19.6px]">
                                  Male
                                </AppFormLabel>
                              </div>

                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="female" id="r3" />
                                <AppFormLabel className="font-medium text-sm/[19.6px]">
                                  Female
                                </AppFormLabel>
                              </div>
                            </RadioGroup>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}
                {currentStep === 1 && (
                  <>
                    <div className="col-span-12">
                      <AppFormInput
                        placeholder="Search for tutors"
                        showRightIcon={true}
                        rightIcon={
                          <CiSearch className="mr-2 h-4 w-4 shrink-0  text-neutral-950" />
                        }
                      />
                    </div>
                    <AppFormLabel className=" -mb-2 col-span-12 text-black-400">
                      Sort by
                    </AppFormLabel>
                    <div className="col-span-12 flex items-center gap-5">
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="duration"
                          render={({ field }) => (
                            <FormItem>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                value={field.value}
                              >
                                <SelectTrigger className="h-[52px]">
                                  <SelectValue
                                    className="text-neutral-950"
                                    placeholder="Subject"
                                    {...field}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup className="divide-y-2 !rounded-none">
                                    <SelectItem
                                      value="month"
                                      className="capitalize rounded-none font-sans font-semibold text-xs/[16.8px] text-neutral-950"
                                    ></SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="w-1/2">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <AppFormInput
                                placeholder="Location"
                                {...field}
                                rightIcon={
                                  <Icon
                                    icon="location-light"
                                    width={16}
                                    height={16}
                                  />
                                }
                                showRightIcon={true}
                              />

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <Button
                        type="button"
                        className="bg-primary-25 p-5 h-14 rounded-sm font-sans w-full font-semibold text-sm/[19.6px] text-primary-500"
                      >
                        Search
                      </Button>
                    </div>
                    <div className="col-span-12">
                      <span className="font-medium text-sm/[21px] ">
                        Tutor Suggestion according to your location
                      </span>
                    </div>

                    <div className="col-span-12">
                      <div className="rounded-[8px] border-[0.5px] border-neutral-100 p-3">
                        <TutorDetails width={89} height={85.34} />
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <div className="col-span-12 border-[0.5px] border-primary-500 bg-primary-25 rounded p-6 space-y-6">
                      <div className="space-y-3">
                        <p className="flex items-center gap-x-2">
                          <span className="font-medium text-xs/[16.8px] text-neutral-950">
                            9 Sessions
                          </span>
                          <GoDotFill className="size-1.5 text-primary-500" />
                          <span className="font-medium text-xs/[16.8px] text-neutral-950">
                            1 Month
                          </span>
                        </p>
                        <div className="flex flex-wrap gap-2 items-center pl-2">
                          {days_selected.map((day, index) => (
                            <li
                              key={index}
                              className="[&:nth-child(1)]:list-none font-normal text-sm/[19.6px] marker:text-primary-500 before:-mr-2  text-neutral-950"
                            >
                              <span className="capitalize">{day.day}</span> -
                              <span> {day.time}</span>
                            </li>
                          ))}
                        </div>
                      </div>
                      <p className="font-bold text-lg/[24.59px] text-neutral-950">
                        N28,500
                      </p>
                    </div>

                    <div className="col-span-12 flex items-start gap-x-3 border-b border-b-neutral-100 pb-5">
                      <Icon
                        icon={"dp"}
                        className="rounded"
                        type="images"
                        width={60}
                        height={60}
                      />
                      <div className="space-y-2">
                        <span className="block font-normal text-xs md:text-base/[15.4px] tracking-[-1px] capitalize text-neutral-950">
                          <b className="font-semibold"> Jessica</b> Akin
                        </span>
                        <div className="flex gap-1.5 items-center flex-wrap">
                          <span className="font-normal text-sm/[19.6px] text-neutral-950">
                            Jss 3
                          </span>
                          {subjects.map((subject) => (
                            <Badge
                              className="bg-neutral-100 rounded-full py-2 px-4 font-normal text-[11px]/[15.4px] text-neutral-950 capitalize"
                              key={subject.name}
                            >
                              {subject.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12">
                      <TutorDetails width={60} height={60} />
                    </div>

                    <div className="col-span-12">
                      <Button
                        type="button"
                        className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
                      >
                        Edit class
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </Form>
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
              onClick={next}
            >
              {buttonText}
            </Button>
          </>
        }
      />
    </div>
  );
};

export default BookAClass;
