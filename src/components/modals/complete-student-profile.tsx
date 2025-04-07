"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";

import {
  ChildProfileFormValues,
  childProfileSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";

import { cn, formatList } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import Upload from "../reusables/upload";
import AppFormLabel from "../reusables/AppFormLabel";
import AppTextarea from "../reusables/AppTextarea";
import Success from "./success";
import Icon from "../reusables/AppIcon";

interface Subject {
  name: string;
}

interface Class {
  type: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
];

const classes: Class[] = [
  { type: "Primary_1" },
  { type: "Primary_2" },
  { type: "Primary_3" },
  { type: "Primary_4" },
];

const CompleteStudentProfile = ({ closeModal }: { closeModal: () => void }) => {
  const [value, setValue] = useState<string[]>([]);
  const [verify, setVerify] = useState(false);
  const form = useForm<ChildProfileFormValues>({
    resolver: zodResolver(childProfileSchema),
  });

  const handleSetValue = (val: string) => {
    if (value.includes(val)) {
      value.splice(value.indexOf(val), 1);
      setValue(value.filter((item: string) => item !== val));
    } else {
      setValue((prevValue: string[]) => [...prevValue, val]);
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
          title={"Complete Jessica’s Profile"}
          description={
            <>
              <span className="text-xs/[16.8px] font-normal text-neutral-600">
                Please fill the field to complete your profile
              </span>
            </>
          }
          primaryFn={() => {}}
          content={
            <>
              <Form {...form}>
                <form className="space-y-3 font-sans">
                  <Upload reverse={true} />

                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Select your child’s class
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="class"
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
                                {classes.map((type) => (
                                  <SelectItem
                                    key={type.type}
                                    value={type.type}
                                    className={cn(
                                      "capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 ",
                                      field.value === type.type
                                        ? "bg-primary-50 rounded-sm font-semibold"
                                        : "font-normal border-b"
                                    )}
                                  >
                                    {formatList(type.type)}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Select subject(s) for your child
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

                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      What’s Goal for Jessica?
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="goal"
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
                </form>
              </Form>
            </>
          }
          actions={
            <>
              <Button
                type="button"
                className="bg-transparent p-5 rounded-sm h-14 font-sans w-full font-semibold text-sm/[19.6px] text-neutral-950"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
                onClick={() => setVerify(true)}
              >
                Submit
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
          actions={
            <>
              <Button
                type="button"
                className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
                onClick={closeModal}
              >
                Skip
              </Button>
              <Button
                type="button"
                className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
              >
                Book the first class
              </Button>
            </>
          }
        />
      )}
    </div>
  );
};

export default CompleteStudentProfile;
