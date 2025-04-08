"use client";
import React, { useState } from "react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";

import {
  tutorCompleteProfileSchema,
  TutorCompleteProfileSchemaFormValues,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GoDash } from "react-icons/go";

import AppFormLabel from "../reusables/AppFormLabel";

import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

import AppFormInput from "../reusables/AppFormInput";
import DocumentUpload from "../reusables/DocumentUpload";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import Success from "./success";
import Icon from "../reusables/AppIcon";

const steps = [
  {
    id: "Step 1",
    name: "Complete your profile",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Add credentials",
    fields: ["country", "state", "city", "street", "zip"],
  },
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

const TutorProfileCompletion = ({ closeModal }: { closeModal: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState<string[]>([]);
  const [selectedExam, setSelectedExam] = useState<string[]>([]);
  const [verify, setVerify] = useState(false);

  const form = useForm<TutorCompleteProfileSchemaFormValues>({
    resolver: zodResolver(tutorCompleteProfileSchema),
  });

  type Inputs = TutorCompleteProfileSchemaFormValues;

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      // setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    } else {
      setVerify(true);
    }
  };

  interface Subject {
    name: string;
  }

  const subjects: Subject[] = [
    { name: "mathematics" },
    { name: "english" },
    { name: "physics" },
    { name: "chemistry" },
  ];

  const exams = ["jamb", "neco", "grade 5", "waec", "gce"];

  const handleSetValue = (val: string) => {
    if (value.includes(val)) {
      value.splice(value.indexOf(val), 1);
      setSelectedExam(value.filter((item: string) => item !== val));
    } else {
      setSelectedExam((prevValue: string[]) => [...prevValue, val]);
    }
  };
  const handleRemoveItem = (val: string) => {
    const newArr = [...value];
    newArr.splice(
      newArr.findIndex((item) => item === val),
      1
    );
    setValue(newArr);
  };

  return (
    <div>
      {!verify ? (
        <AppModal
          title={steps[currentStep].name}
          description={
            <>
              <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
                Please fill the field to complete your profile
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
                      <div className="col-span-12 md:col-span-12 space-y-3">
                        <AppFormLabel className=" text-black-400">
                          Subjects you teach
                        </AppFormLabel>

                        <Popover>
                          <PopoverTrigger asChild className="h-[52px]">
                            <FormControl>
                              <Button
                                type="button"
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  " w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500",
                                  !value && "text-muted-foreground"
                                )}
                              >
                                Select subject
                                <ChevronDown className="opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 sm:w-96 p-1.5">
                            <Command>
                              <CommandInput
                                placeholder="Search for Subject"
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>No subject found.</CommandEmpty>
                                <CommandGroup>
                                  {subjects.map((subject) => (
                                    <CommandItem
                                      className={cn(
                                        "font-sans capitalize text-neutral-950",
                                        value.includes(subject.name)
                                          ? "bg-primary-50 border-b-0 font-semibold"
                                          : "bg-transparent font-normal "
                                      )}
                                      value={subject.name}
                                      key={subject.name}
                                      onSelect={() => {
                                        handleSetValue(subject.name);
                                      }}
                                    >
                                      {subject.name}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        <div className="flex flex-wrap gap-3">
                          {value.map((val, i) => (
                            <Badge
                              key={i}
                              className="px-4 py-3 rounded-full bg-neutral-100 text-xs/[16.8px] font-normal text-neutral-950 capitalize cursor-pointer gap-1 items-center"
                              onClick={() => handleRemoveItem(val)}
                            >
                              {
                                subjects.find((subject) => subject.name === val)
                                  ?.name
                              }

                              <Icon icon="close" width={20} height={20} />
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-12 space-y-3">
                        <AppFormLabel className=" text-black-400">
                          Level/Exams you teach
                        </AppFormLabel>

                        <Popover>
                          <PopoverTrigger asChild className="h-[52px]">
                            <FormControl>
                              <Button
                                type="button"
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  " w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500",
                                  !selectedExam && "text-muted-foreground"
                                )}
                              >
                                Select exam
                                <ChevronDown className="opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 sm:w-96 p-1.5">
                            <Command>
                              <CommandInput
                                placeholder="Search for Subject"
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>No subject found.</CommandEmpty>
                                <CommandGroup>
                                  {exams.map((exam) => (
                                    <CommandItem
                                      className={cn(
                                        "font-sans uppercase text-neutral-950",
                                        selectedExam.includes(exam)
                                          ? "bg-primary-50 border-b-0 font-semibold"
                                          : "bg-transparent font-normal "
                                      )}
                                      value={exam}
                                      key={exam}
                                      onSelect={() => {
                                        handleSetValue(exam);
                                      }}
                                    >
                                      {exam}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        <div className="flex flex-wrap gap-3">
                          {selectedExam.map((val, i) => (
                            <Badge
                              key={i}
                              className="px-4 py-3 rounded-full bg-neutral-100 text-xs/[16.8px] font-normal text-neutral-950 uppercase cursor-pointer gap-1 items-center"
                              onClick={() => handleRemoveItem(val)}
                            >
                              {exams.find((exam) => exam === val)}
                              <Icon icon="close" width={20} height={20} />
                            </Badge>
                          ))}
                        </div>
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

                      <div className="col-span-12 md:col-span-12 space-y-3">
                        <AppFormLabel className="text-black-400">
                          Proficiency level
                        </AppFormLabel>

                        <FormField
                          control={form.control}
                          name="proficiency_level"
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
                                  <SelectGroup className=" p-1.5 !rounded-none">
                                    <SelectItem value="title"></SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="col-span-12 space-y-3">
                        <AppFormLabel className="text-black-400">
                          Your hourly rate
                        </AppFormLabel>

                        <FormField
                          control={form.control}
                          name="hourly_rate"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <AppFormInput
                                  placeholder=""
                                  {...field}
                                  showLeftIcon={true}
                                  leftIcon={
                                    <Icon
                                      icon="hashtag"
                                      width={16}
                                      height={16}
                                    />
                                  }
                                  className="!ps-8"
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </>
                  )}
                  {currentStep === 1 && (
                    <>
                      <div className="col-span-12 space-y-3">
                        <AppFormLabel className="text-black-400">
                          Institution / School
                        </AppFormLabel>

                        <FormField
                          control={form.control}
                          name="school"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <AppFormInput
                                  placeholder="Enter institution / school"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-12 space-y-3">
                        <AppFormLabel className="text-black-400">
                          Certificate title
                        </AppFormLabel>

                        <FormField
                          control={form.control}
                          name="certificate_title"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <AppFormInput
                                  placeholder="e.g BSc. Computer Science"
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-12  flex flex-col md:flex-row gap-5 ">
                        <div className="md:w-1/2 space-y-3">
                          <AppFormLabel className=" text-black-400">
                            Start date
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
                                          " text-left flex justify-between font-normal text-sm/[19.6px] p-4",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "yyyy-MM-dd")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}

                                        <Icon
                                          icon="calendar-active"
                                          width={16}
                                          height={16}
                                        />
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
                        <div className="md:w-1/2 space-y-3">
                          <AppFormLabel className=" text-black-400">
                            End date
                          </AppFormLabel>

                          <FormField
                            control={form.control}
                            name="end_date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <Popover>
                                  <PopoverTrigger asChild className="h-[52px]">
                                    <FormControl>
                                      <Button
                                        type="button"
                                        variant={"outline"}
                                        className={cn(
                                          " text-left flex justify-between p-4 font-normal",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "yyyy-MM-dd")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <Icon
                                          icon="calendar-active"
                                          width={16}
                                          height={16}
                                        />
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
                      </div>
                      <div className="col-span-12">
                        <DocumentUpload document_name="certificates" />
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
                {currentStep < steps.length - 1 ? (
                  <>
                    {"Next "}
                    <GoDash />
                    {"Credentials"}
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </>
          }
        />
      ) : (
        <Success
          title="Profile Successfully Updated"
          description={"Your profile has been updated"}
          icon="success-icon"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default TutorProfileCompletion;
