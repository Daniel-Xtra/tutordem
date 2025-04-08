"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UploadResourcesFormValues,
  uploadResourcesSchema,
} from "@/schemas/form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import AppFormLabel from "../reusables/AppFormLabel";
import AppFormInput from "../reusables/AppFormInput";
import AppTextarea from "../reusables/AppTextarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
import Success from "./success";
import DocumentUpload from "../reusables/DocumentUpload";

const UploadResources = ({ closeModal }: { closeModal: () => void }) => {
  const [verify, setVerify] = useState(false);
  const form = useForm<UploadResourcesFormValues>({
    resolver: zodResolver(uploadResourcesSchema),
  });
  return (
    <div>
      {!verify ? (
        <AppModal
          title={"Upload Resources"}
          description={
            <>
              <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
                Recourses for your students
              </span>
            </>
          }
          content={
            <div className="space-y-6 font-sans">
              <Form {...form}>
                <form className="space-y-6 font-sans">
                  <DocumentUpload
                    document_name="Document"
                    note="Not more than 10mb of file size"
                  />
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Title
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder="Enter Resource title"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Resource description
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <AppTextarea placeholder="" {...field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Grade
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="h-[52px]">
                              <SelectValue
                                placeholder="Select grade"
                                {...field}
                              />
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

                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Subject / Exam
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
                      <PopoverContent className="w-80 sm:w-96 p-1.5">
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
                onClick={() => setVerify(true)}
              >
                Save
              </Button>
            </>
          }
        />
      ) : (
        <Success
          title="Uploaded resources is under review"
          description={"This will be reviewed in 3 - 5 hours"}
          icon="pending-icon"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default UploadResources;
