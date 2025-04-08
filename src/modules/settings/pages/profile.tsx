"use client";

import ChangePassword from "@/components/modals/change-password";
import ProfilePhoto from "@/components/modals/profile-photo";

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
import { useState } from "react";
import { useForm } from "react-hook-form";
import SettingsLayout from "../settingsLayout";
import Icon from "@/components/reusables/AppIcon";

const Profile = () => {
  const [photoOpen, setPhotoOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const form = useForm<ProfileUpdateFormValues>({
    resolver: zodResolver(profileUpdateSchema),
    mode: "onChange",
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
      <div className="flex flex-col sm:flex-row sm:items-center rounded-[8px] font-sans text-neutral-950 border border-neutral-200 p-4 sm:p-10 gap-y-5 sm:gap-[100px]">
        <p className="sm:w-6/12">
          <span className="font-semibold text-sm/[19.6px] md:text-base/[22.4px]">
            Your profile photo
          </span>
          <span className="font-normal block text-xs/[16.8px] md:text-sm/[19.6px]">
            This will be displayed on your profile
          </span>
        </p>
        <div className="flex items-center gap-[29px] sm:w-6/12">
          <Icon
            icon="dp"
            height={60}
            width={60}
            type="images"
            className="rounded-sm"
          />
          <Dialog>
            <DialogTrigger asChild>
              <p className="cursor-pointer capitalize font-normal md:font-medium text-sm/[19.6px] md:text-base/[22.4px] text-error-500">
                delete
              </p>
            </DialogTrigger>
            <div></div>
          </Dialog>
          <Dialog open={photoOpen} onOpenChange={setPhotoOpen}>
            <DialogTrigger asChild>
              <p className="cursor-pointer capitalize -ml-7 font-medium text-sm/[19.6px] md:text-base/[22.4px] text-neutral-950">
                change
              </p>
            </DialogTrigger>
            <ProfilePhoto closeModal={() => setPhotoOpen(false)} />
          </Dialog>
        </div>
      </div>

      <SettingsLayout title="Profile">
        <Form {...form}>
          <form className="space-y-5 font-sans">
            <div className="space-y-3">
              <AppFormLabel className=" text-black-400">Title</AppFormLabel>
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
              <AppFormLabel className="text-black-400">First Name</AppFormLabel>

              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AppFormInput placeholder="Enter firstname" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-3">
              <AppFormLabel className="text-black-400">Last Name</AppFormLabel>

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AppFormInput placeholder="Enter lastname" {...field} />
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
      </SettingsLayout>

      <SettingsLayout title="Security">
        <Form {...passwordForm}>
          <form className="space-y-5 font-sans">
            <div className="space-y-3">
              <AppFormLabel className=" text-black-400">Password</AppFormLabel>

              <FormField
                control={passwordForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <AppFormInput
                        leftIcon={
                          <Icon icon="password-input" height={16} width={16} />
                        }
                        rightIcon={<span>Show</span>}
                        placeholder="•  •  •  •  •  •  •  •  •"
                        className="!ps-8 !pe-12 "
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
        <Dialog open={passwordOpen} onOpenChange={setPasswordOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm h-14 w-full font-normal text-xs/[16.8px] text-primary-500"
            >
              Change Password
            </Button>
          </DialogTrigger>
          <ChangePassword closeModal={() => setPasswordOpen(false)} />
        </Dialog>
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

export default Profile;
