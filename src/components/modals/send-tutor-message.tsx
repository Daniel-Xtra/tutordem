"use client";
import React from "react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  sendTutorMessageSchema,
  SendTutorMessageSchema,
} from "@/schemas/form-schema";
import { useForm } from "react-hook-form";

import AppFormLabel from "../reusables/AppFormLabel";
import AppTextarea from "../reusables/AppTextarea";

const SendTutorMessage = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<SendTutorMessageSchema>({
    resolver: zodResolver(sendTutorMessageSchema),
  });
  return (
    <AppModal
        title={"Send Tutor a Message"}
        description={
        <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
            Resourses for your students
            </span>
        </>
        }
        primaryFn={closeModal}
        content={
        <Form {...form}>
            <form className="space-y-6 font-sans">
            <div className="space-y-3">
                <AppFormLabel className=" text-black-400">
                Enter Message
                </AppFormLabel>

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <AppTextarea
                        placeholder="Enter message"
                        {...field}
                        showHint
                        hint="Not more than 25 words"
                    />
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            </form>
        </Form>
        }
        actions={
        <>
            <Button
                type="button"
                className="w-full bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
            >
                Submit
            </Button>
        </>
        }
    />
  );
};

export default SendTutorMessage;
