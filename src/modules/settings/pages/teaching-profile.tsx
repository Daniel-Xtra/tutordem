"use client";
import AppFormInput from "@/components/reusables/AppFormInput";
import AppFormLabel from "@/components/reusables/AppFormLabel";
import AppTextarea from "@/components/reusables/AppTextarea";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import SettingsLayout from "../settingsLayout";
import {
  teachingProfileSchema,
  TeachingProfileSchema,
} from "@/schemas/form-schema";

const TeachingProfile = () => {
  const form = useForm<TeachingProfileSchema>({
    resolver: zodResolver(teachingProfileSchema),
    mode: "onChange",
  });
  return (
    <>
      <SettingsLayout title="Teaching Profile">
        <Form {...form}>
          <form className="space-y-5 font-sans">
            <div className="space-y-3">
              <AppFormLabel className="text-black-400">
                Seasoned teacher with
              </AppFormLabel>

              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AppFormInput placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <AppFormLabel className=" text-black-400">
                About you and your approach
              </AppFormLabel>

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <AppTextarea
                      placeholder=""
                      {...field}
                      hint="Maximum of 250 characters"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
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
                      className=" w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500"
                    >
                      Select subject
                      <ChevronDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-80 sm:w-[450px] p-1.5">
                  <Command>
                    <CommandInput
                      placeholder="Search for Subject"
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No subject found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          className="font-sans capitalize text-neutral-950 "
                          value="subject"
                        ></CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className=" space-y-3">
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
                      className="
                          w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500"
                    >
                      Select exam
                      <ChevronDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-80 sm:w-[450px] p-1.5">
                  <Command>
                    <CommandInput
                      placeholder="Search for Subject"
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No subject found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          className="font-sans uppercase text-neutral-950"
                          value="exam"
                        ></CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-3">
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
                        <SelectValue placeholder="Select level" {...field} />
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
          </form>
        </Form>
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

export default TeachingProfile;
