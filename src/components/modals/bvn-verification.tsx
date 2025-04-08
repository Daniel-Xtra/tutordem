"use client";
import React from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import Image from "next/image";
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
  BvnVerificationFormValues,
  bvnVerificationSchema,
} from "@/schemas/form-schema";
import AppFormInput from "../reusables/AppFormInput";
import AppFormLabel from "../reusables/AppFormLabel";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const BvnVerification = () => {
  const form = useForm<BvnVerificationFormValues>({
    resolver: zodResolver(bvnVerificationSchema),
  });
  return (
    <div>
      <AppModal
        title={"BVN Verification"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Confirm your identity by providing a valid government ID
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <div className="space-y-6 font-sans">
            <Form {...form}>
              <form className="space-y-3 font-sans">
                <AppFormLabel className="text-black-400">
                  BVN number
                </AppFormLabel>

                <FormField
                  control={form.control}
                  name="bvn_no"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <AppFormInput
                          placeholder="Enter BVN number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <p className="font-sans text-sm/[19.6px] flex justify-between">
              <span className="font-medium text-neutral-600">
                Don’t know your BVN?
              </span>
              <span className="font-bold text-primary-500">Dial *565*0#</span>
            </p>

            <p className="font-medium text-xs/[16.8px] text-warning-500">
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
              {svgIcon({
                icon: "/assets/icons/arrow-left-black.png",
                size: 16,
              })}
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

export default BvnVerification;
