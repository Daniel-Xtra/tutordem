import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import SettingsLayout from "../settingsLayout";
import AppFormLabel from "@/components/reusables/AppFormLabel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import AppFormInput from "@/components/reusables/AppFormInput";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { FeeFormValues, feeSchema } from "@/schemas/form-schema";
import Icon from "@/components/reusables/AppIcon";

const Fees = () => {
  const [editFee, setEditFee] = useState(false);
  const form = useForm<FeeFormValues>({
    resolver: zodResolver(feeSchema),
  });
  return (
    <>
      <SettingsLayout title="Fees">
        <div className="space-y-5">
          <div className=" bg-primary-25 rounded p-6 gap-1.5 font-normal text-sm/[19.6px] text-black-500 flex flex-row justify-between">
            <span className="capitalize">Your hourly rate</span>
            <span className="flex gap-1 items-center">
              <Icon icon="hashtag" height={16} width={16} /> 3,500
            </span>
          </div>
          {editFee && (
            <Form {...form}>
              <form className="space-y-3 font-sans">
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
                            <Icon icon="hashtag" height={16} width={16} />
                          }
                          className="!ps-8"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          )}
        </div>
        {!editFee && (
          <Button
            type="button"
            className="bg-transparent p-5  rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
            onClick={() => setEditFee(true)}
          >
            Edit fee
          </Button>
        )}
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
          onClick={() => setEditFee(false)}
        >
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default Fees;
