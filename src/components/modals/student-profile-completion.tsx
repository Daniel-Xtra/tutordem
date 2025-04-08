"use client";
import React, { useState } from "react";
import { AppModal } from "../reusables/AppModal";

import Success from "./success";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import {
  CompleteProfileFormValues,
  completeProfileSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AppFormLabel from "../reusables/AppFormLabel";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "../ui/command";
import DocumentUpload from "../reusables/DocumentUpload";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { DialogTrigger } from "../ui/dialog";
import { Dialog } from "../ui/dialog";
import BookAClassStudent from "./book-a-class-student";

interface Subject {
    name: string;
}

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const StudentProfileCompletion = ({ closeModal }: { closeModal: () => void }) => {
  const [verify, setVerify] = useState(false);
  const [openBookClassModal, setOpenBookClassModal] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [selectedExam, setSelectedExam] = useState<string[]>([]);
  const form = useForm<CompleteProfileFormValues>({
    resolver: zodResolver(completeProfileSchema),
  });

  

  const subjects: Subject[] = [
    { name: "mathematics" },
    { name: "english" },
    { name: "physics" },
    { name: "chemistry" },
  ];

  const handleSetValue = (val: string) => {
    if (selectedExam.includes(val)) {
        selectedExam.splice(value.indexOf(val), 1);
      setSelectedExam(selectedExam.filter((item: string) => item !== val));
    } else {
      setSelectedExam((prevValue: string[]) => [...prevValue, val]);
    }
  };
  const handleRemoveItem = (val: string) => {
    const newArr = [...selectedExam];
    newArr.splice(
      newArr.findIndex((item) => item === val),
      1
    );
    setValue(newArr);
  };

  // const handleToggleBookClassModal = () => {
  //   closeModal();
  //   setOpenBookClassModal(!openBookClassModal);
  // }
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
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3 cursor-pointer">
                    <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-[#FFFFFF] text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
                        E
                    </div>
                    <div>
                        <span className="block f font-normal text-xs md:text-base/[22.4px] capitalize">
                        <b className="font-bold"> Ebenezer</b> Akin
                        </span>
                        <span className="block font-normal text-left text-xs md:text-sm/[19.6px] capitalize">
                        parent
                        </span>
                    </div>
                    </div>
                    <p className="font-normal text-sm/[19.6px] text-neutral-950">Preview</p>
                </div>
              <Form {...form}>
                <form className="space-y-6 font-sans">
                    <DocumentUpload
                        document_name="Profile Picture"
                        note="No Glasses, Clear Portrait Image, Colored Image"
                    />

                  <div className="space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Select your child&apos;s class
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
                  <div className="col-span-12 md:col-span-12 space-y-3">
                        <AppFormLabel className=" text-black-400">
                          Subjects you teach
                        </AppFormLabel>

                        <Popover>
                          <PopoverTrigger asChild className="h-[52px]">
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  " w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500",
                                  !selectedExam && "text-muted-foreground"
                                )}
                              >
                                Select subject
                                <ChevronDown className="opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 sm:w-96 p-1.5">
                            <Command>
                              <CommandInput
                                placeholder="Search for Subject"
                                className="h-9"
                              />
                              <CommandList>
                                <CommandEmpty>No subject found.</CommandEmpty>
                                <CommandGroup>
                                  {subjects.map((subject) => (
                                    <CommandItem
                                      className={cn(
                                        "font-sans capitalize text-neutral-950",
                                        selectedExam.includes(subject.name)
                                          ? "bg-primary-50 border-b-0 font-semibold"
                                          : "bg-transparent font-normal "
                                      )}
                                      value={subject.name}
                                      key={subject.name}
                                      onSelect={() => {
                                        handleSetValue(subject.name);
                                      }}
                                    >
                                      {subject.name}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        <div className="flex flex-wrap gap-3">
                          {selectedExam.map((val, i) => (
                            <Badge
                              key={i}
                              className="px-4 py-3 rounded-full bg-neutral-100 text-xs/[16.8px] font-normal text-neutral-950 capitalize cursor-pointer gap-1 items-center"
                              onClick={() => handleRemoveItem(val)}
                            >
                              {
                                subjects.find((subject) => subject.name === val)
                                  ?.name
                              }
                              {svgIcon({
                                icon: "/assets/icons/close.png",
                                size: 20,
                              })}
                            </Badge>
                          ))}
                        </div>
                      </div>
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
              <Button
                className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]"
                onClick={() => setVerify(true)}
              >
                Save
              </Button>
            </>
          }
        />
      ) : (
        <Success
          title="Profile Successfully Updated"
          description={"Your profile has been updated"}
          icon="success-icon"
          closeModal={closeModal}
          actions={
            <>
                <Button
                className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
                onClick={closeModal}
                >
                    Skip
                </Button>
                <Dialog open={openBookClassModal} onOpenChange={setOpenBookClassModal}>
                  <DialogTrigger className="cursor-pointer" asChild>
                    <Button
                      type="button"
                      className="rounded-sm p-5 w-full font-normal font-sans h-14 text-xs/[16.8px] bg-primary-500 text-[#FFFFFF]"
                    >
                      Book a Class
                    </Button>
                  </DialogTrigger>
                  <BookAClassStudent name={"Jessica"} closeModal={() => setOpenBookClassModal(false)} />
                </Dialog>
                
            </>
          }
        />
      )}
    </div>
  );
};

export default StudentProfileCompletion;
