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
  NinVerificationFormValues,
  ninVerificationSchema,
} from "@/schemas/form-schema";
import AppFormLabel from "../reusables/AppFormLabel";
import AppFormInput from "../reusables/AppFormInput";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const NinVerification = () => {
  const form = useForm<NinVerificationFormValues>({
    resolver: zodResolver(ninVerificationSchema),
  });
  return (
    <div>
      <AppModal
        title={"NIN Verification"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
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
                  ID number
                </AppFormLabel>

                <FormField
                  control={form.control}
                  name="nin_no"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <AppFormInput
                          placeholder="Identification number"
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
                Don’t know your NIN?
              </span>
              <span className="font-bold text-primary-500">Dial *346*1#</span>
            </p>

            <p className="font-medium font-sans text-sm/[19.6px] text-neutral-600">
              Here’s a sample document for reference
            </p>

            <Image
              src="/assets/images/nin-slip.png"
              alt="nin slip"
              width={408}
              height={207.17}
            />

            <p className="font-medium font-sans text-xs/[16.8px] text-warning-500">
              Don’t worry we won’t share your information with anyone
            </p>
          </div>
        }
        actions={
          <>
            <Button className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950 flex items-center gap-[10px]">
              {svgIcon({
                icon: "/assets/icons/arrow-left-black.png",
                size: 16,
              })}
              Back
            </Button>
            <Button className="bg-primary-500 p-5 font-sans rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
              Submit
            </Button>
          </>
        }
      />
    </div>
  );
};

export default NinVerification;
