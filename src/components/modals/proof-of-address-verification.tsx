"use client";
import React from "react";
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
  PoaVerificationFormValues,
  poaVerificationSchema,
} from "@/schemas/form-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UtilityType } from "@/models/types";
import { cn, formatList } from "@/lib/utils";
import AppFormLabel from "../reusables/AppFormLabel";

import Icon from "../reusables/AppIcon";

const utilityType: UtilityType[] = [
  { name: "electricity_bill" },
  { name: "water_bill" },
  { name: "waste_bill" },
];

const ProofOfAddressVerification = () => {
  const form = useForm<PoaVerificationFormValues>({
    resolver: zodResolver(poaVerificationSchema),
  });
  return (
    <div>
      <AppModal
        title={"Utility Verification"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal text-neutral-600">
              Confirm your identity by providing a valid government ID
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <div className="space-y-6">
            <Form {...form}>
              <form className="space-y-3 font-sans">
                <AppFormLabel className="text-black-400">
                  Utility Type
                </AppFormLabel>

                <FormField
                  control={form.control}
                  name="utility_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <SelectTrigger className="h-[52px]">
                            <SelectValue
                              placeholder="Select an utility type"
                              {...field}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className="!rounded-none">
                              {utilityType.map((type) => (
                                <div
                                  key={type.name}
                                  className={cn(
                                    "flex items-center px-3 gap-2 cursor-pointer",
                                    field.value === type.name
                                      ? "bg-primary-50 border-b-0"
                                      : "border-b"
                                  )}
                                >
                                  <Icon
                                    icon={
                                      field.value === type.name
                                        ? "document-text-selected"
                                        : "document-text"
                                    }
                                    width={16}
                                    height={16}
                                  />

                                  <SelectItem
                                    value={type.name}
                                    className="capitalize rounded-none font-sans font-semibold text-xs/[16.8px] text-neutral-950"
                                  >
                                    {formatList(type.name)}
                                  </SelectItem>
                                </div>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <p className="font-medium font-sans text-xs/[16.8px] text-warning-500">
              Don’t worry we won’t share your information with anyone
            </p>
          </div>
        }
        actions={
          <>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950 flex items-center gap-[10px]"
            >
              <Icon icon={"arrow-left-black"} width={16} height={16} />
              Back
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

export default ProofOfAddressVerification;
