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
import AppFormLabel from "../reusables/AppFormLabel";
import AppFormInput from "../reusables/AppFormInput";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import DocumentUpload from "../reusables/DocumentUpload";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AddCredentialFormValues,
  addCredentialSchema,
} from "@/schemas/form-schema";
import Icon from "../reusables/AppIcon";

const AddCredentials = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<AddCredentialFormValues>({
    resolver: zodResolver(addCredentialSchema),
  });
  return (
    <div>
      <AppModal
        title={"Add new credential"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Please complete the profile with the right details
            </span>
          </>
        }
        content={
          <>
            <Form {...form}>
              <form className="gap-5 grid grid-cols-12 items-end font-sans">
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
                                    !field.value && "text-muted-foreground"
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
                                    !field.value && "text-muted-foreground"
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
                  <DocumentUpload document_name="credentials" />
                </div>
              </form>
            </Form>
          </>
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
              Submit
            </Button>
          </>
        }
      />
    </div>
  );
};

export default AddCredentials;
