import AppFormInput from "@/components/reusables/AppFormInput";
import AppFormLabel from "@/components/reusables/AppFormLabel";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  ProfileUpdateFormValues,
  profileUpdateSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import SettingsLayout from "../settingsLayout";

const Location = () => {
  const form = useForm<ProfileUpdateFormValues>({
    resolver: zodResolver(profileUpdateSchema),
  });
  return (
    <>
      <SettingsLayout title="Location">
        <Form {...form}>
          <form className="font-sans">
            <div className="space-y-3">
              <AppFormLabel className="text-black-400">Address</AppFormLabel>

              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AppFormInput
                        placeholder=""
                        showRightIcon={true}
                        className="!pe-12"
                        rightIcon={
                          <Image
                            src="/assets/icons/location-filled.png"
                            alt="icon"
                            width={24}
                            height={24}
                          />
                        }
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
            >
              Edit location
            </Button>
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

export default Location;
