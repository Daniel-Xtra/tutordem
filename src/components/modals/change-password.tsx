import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import AppFormLabel from "../reusables/AppFormLabel";
import AppFormInput from "../reusables/AppFormInput";
import {
  PasswordFormValues,
  passwordUpdateSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppModal } from "../reusables/AppModal";
import Image from "next/image";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const ChangePassword = ({ closeModal }: { closeModal: () => void }) => {
  const [visible, setVisible] = useState({
    old_password: false,
    new_password: false,
  });
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordUpdateSchema),
  });

  return (
    <div>
      <AppModal
        title={"Change your password"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Please enter your old password and new passowrd
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <div className="space-y-6 font-sans">
            <Form {...form}>
              <form className="space-y-6 font-sans">
                <div className="space-y-3">
                  <AppFormLabel className=" text-black-400">
                    Old password
                  </AppFormLabel>

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <AppFormInput
                            leftIcon={svgIcon({
                              icon: "/assets/icons/password-input-filled.png",
                              size: 16,
                            })}
                            rightIcon={
                              <span>
                                {visible.old_password ? "Hide" : "Show"}
                              </span>
                            }
                            placeholder="•  •  •  •  •  •  •  •  •"
                            type={visible.old_password ? "text" : "password"}
                            className="!ps-8 !pe-12"
                            showLeftIcon={true}
                            showRightIcon={true}
                            {...field}
                            togglePassword={() =>
                              setVisible({
                                ...visible,
                                old_password: !visible.old_password,
                              })
                            }
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-3">
                  <AppFormLabel className=" text-black-400">
                    New password
                  </AppFormLabel>

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <AppFormInput
                            leftIcon={svgIcon({
                              icon: "/assets/icons/password-input-filled.png",
                              size: 16,
                            })}
                            rightIcon={
                              <span>
                                {visible.new_password ? "Hide" : "Show"}
                              </span>
                            }
                            placeholder="•  •  •  •  •  •  •  •  •"
                            type={visible.new_password ? "text" : "password"}
                            className="!ps-8 !pe-12 "
                            showLeftIcon={true}
                            showRightIcon={true}
                            togglePassword={() =>
                              setVisible({
                                ...visible,
                                new_password: !visible.new_password,
                              })
                            }
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-3">
                  <div className=" flex flex-wrap gap-2 items-center">
                    <p className="list-none flex items-center gap-1.5 font-normal text-[11px]/[15.4px] text-success-800">
                      {svgIcon({
                        icon: "/assets/icons/shield-check.png",
                        size: 16,
                      })}
                      <span>8 character</span>
                    </p>
                    <p className="list-none flex items-center gap-1.5 font-normal text-[11px]/[15.4px] text-success-800">
                      {svgIcon({
                        icon: "/assets/icons/shield-check.png",
                        size: 16,
                      })}
                      <span>Numbers</span>
                    </p>
                  </div>
                  <div className=" flex flex-wrap gap-2 items-center">
                    <p className="list-none flex items-center gap-1.5 font-normal text-[11px]/[15.4px] text-success-800">
                      {svgIcon({
                        icon: "/assets/icons/shield-check.png",
                        size: 16,
                      })}
                      <span>One special character</span>
                    </p>
                    <p className="list-none flex items-center gap-1.5 font-normal text-[11px]/[15.4px] text-success-800">
                      {svgIcon({
                        icon: "/assets/icons/shield-check.png",
                        size: 16,
                      })}
                      <span>One Uppercase</span>
                    </p>
                  </div>
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
            >
              Save
            </Button>
          </>
        }
      />
    </div>
  );
};

export default ChangePassword;
