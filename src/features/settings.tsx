"use client";

import ProfilePhoto from "@/components/modals/profile-photo";
import StudentProfile from "@/components/profile/student-profile";
import AppFormInput from "@/components/reusables/AppFormInput";
import AppFormLabel from "@/components/reusables/AppFormLabel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  PasswordFormValues,
  passwordUpdateSchema,
  ProfileUpdateFormValues,
  profileUpdateSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const SettingsFeature = () => {
  const [photoOpen, setPhotoOpen] = useState(false);
  const form = useForm<ProfileUpdateFormValues>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      title: "",
      first_name: "Akin",
      last_name: "Ebenezer",
      email: "Ebenezer@gmail.com",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordUpdateSchema),
  });

  return (
    <>
      <StudentProfile />
      <div className="md:px-5 xl:px-[136px]">
        <div className="md:border-[0.5px] border-neutral-200 rounded-xl space-y-7 md:w-11/12 p-6 md:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center rounded-[8px] font-sans text-neutral-950 border border-neutral-200 p-4 sm:p-10 gap-y-5 sm:gap-[100px]">
            <p className="sm:w-6/12">
              <span className="font-semibold text-base/[22.4px]">
                Your profile photo
              </span>
              <span className="font-normal block text-sm/[19.6px]">
                This will be displayed on your profile
              </span>
            </p>
            <div className="flex items-center gap-[29px] sm:w-6/12">
              <Image
                src="/assets/images/dp.png"
                alt="profile"
                height={60}
                width={60}
                className="rounded-sm"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <p className="cursor-pointer capitalize  font-medium text-base/[22.4px] text-error-500">
                    delete
                  </p>
                </DialogTrigger>
                <div></div>
              </Dialog>
              <Dialog open={photoOpen} onOpenChange={setPhotoOpen}>
                <DialogTrigger asChild>
                  <p className="cursor-pointer capitalize -ml-7 font-medium text-base/[22.4px] text-neutral-950">
                    change
                  </p>
                </DialogTrigger>
                <ProfilePhoto closeModal={() => setPhotoOpen(false)} />
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline rounded-[8px] font-sans text-neutral-950 border border-neutral-200 p-4 md:p-10 gap-y-5 md:gap-[100px]">
            <p className="md:w-6/12">
              <span className="font-semibold text-base/[22.4px]">Profile</span>
              <span className="font-normal block text-sm/[19.6px]">
                This will be displayed on your profile
              </span>
            </p>
            <div className="md:w-6/12">
              <Form {...form}>
                <form className="space-y-5 font-sans">
                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Title
                    </AppFormLabel>
                    <FormField
                      control={form.control}
                      name="title"
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
                                  placeholder="Select your preferred title"
                                  {...field}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup className="divide-y-2 !rounded-none">
                                  <SelectItem
                                    value="mr"
                                    className="capitalize rounded-none font-sans font-semibold text-xs/[16.8px] text-neutral-950"
                                  ></SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      First Name
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder="Enter firstname"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Last Name
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder="Enter lastname"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Email address
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder="Enter email address"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center rounded-[8px] font-sans text-neutral-950 border border-neutral-200 p-4 md:p-10 gap-y-5 md:gap-[100px]">
            <p className="md:w-6/12">
              <span className="font-semibold text-base/[22.4px]">Security</span>
              <span className="font-normal block text-sm/[19.6px]">
                This will be displayed on your profile
              </span>
            </p>
            <div className="md:w-6/12">
              <Form {...passwordForm}>
                <form className="space-y-5 font-sans">
                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Password
                    </AppFormLabel>

                    <FormField
                      control={passwordForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              leftIcon={svgIcon({
                                icon: "/assets/icons/password-input.png",
                                size: 16,
                              })}
                              rightIcon={<span>Show</span>}
                              placeholder="******"
                              className="!ps-8 !pe-12"
                              showLeftIcon={true}
                              showRightIcon={true}
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
              <Button className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500">
                Change Password
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3 rounded-[8px] font-sans text-neutral-950 border border-neutral-200  p-6 sm:p-10 bg-neutral-50">
            <Button className="bg-transparent p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950">
              Cancel
            </Button>
            <Button className="bg-primary-500 p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsFeature;
