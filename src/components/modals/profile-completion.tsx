"use client";
import React, { useState } from "react";
import { AppModal } from "../reusables/AppModal";

import Success from "./success";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  CompleteProfileFormValues,
  completeProfileSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import AppFormLabel from "../reusables/AppFormLabel";
import Upload from "../reusables/upload";

const ProfileCompletion = ({ closeModal }: { closeModal: () => void }) => {
  const [verify, setVerify] = useState(false);
  const form = useForm<CompleteProfileFormValues>({
    resolver: zodResolver(completeProfileSchema),
  });

  return (
    <div>
      {!verify ? (
        <AppModal
          title={"Complete your Profile"}
          description={
            <>
              <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
                Please fill the field to complete your profile
              </span>
            </>
          }
          buttonText="Verify"
          primaryFn={() => {
            setVerify(true);
          }}
          content={
            <>
              <Form {...form}>
                <form className="space-y-6 font-sans">
                  <div className="gap-x-5 flex items-center">
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
                              <Label htmlFor="r1">Male</Label>
                            </div>

                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="female" id="r3" />
                              <Label htmlFor="r3">Female</Label>
                            </div>
                          </RadioGroup>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Title
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="h-[52px]">
                              <SelectValue
                                placeholder="Select your preferred title"
                                {...field}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className="divide-y-2 !rounded-none">
                                <SelectItem
                                  value="title"
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

                  <Upload />
                </form>
              </Form>
            </>
          }
          actions={
            <>
              <Button
                className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
                Save
              </Button>
            </>
          }
        />
      ) : (
        <Success closeModal={closeModal} />
      )}
    </div>
  );
};

export default ProfileCompletion;
