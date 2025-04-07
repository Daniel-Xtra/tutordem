"use client";
import React, { useEffect, useState } from "react";
import { Button as UIButton } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import AppFormInput from "@/components/reusables/AppFormInput";
import AppTextarea from "@/components/reusables/AppTextarea";
import DocumentUpload from "@/components/reusables/DocumentUpload";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  tutorProfileFormValues,
  TutorProfileFormValues,
} from "@/schemas/form-schema";
import AppFormLabel from "@/components/reusables/AppFormLabel";

interface Subject {
  name: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
];

const states: string[] = ["Lagos state"];

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return <Image src={icon} alt="icon" width={size} height={size} />;
}

const TutorGetStarted = () => {
  const [value, setValue] = useState<string[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  const form = useForm<TutorProfileFormValues>({
    resolver: zodResolver(tutorProfileFormValues),
    defaultValues: {
      subjects: [],
    },
  });

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts (client-side)
  }, []);

  useEffect(() => {
    form.setValue(
      "subjects",
      selectedSubject.map((subject) => ({ subject }))
    );
  }, [selectedSubject, form]);

  const handleSetValue = (val: string) => {
    if (value.includes(val)) {
      value.splice(value.indexOf(val), 1);
      setSelectedSubject(value.filter((item: string) => item !== val));
    } else {
      setSelectedSubject((prevValue: string[]) => [...prevValue, val]);
    }
    form.clearErrors("subjects");
  };

  const handleRemoveItem = (val: string) => {
    const newArr = [...value];
    newArr.splice(
      newArr.findIndex((item) => item === val),
      1
    );
    setValue(newArr);
    form.clearErrors("subjects");
  };

  const router = useRouter();

  const onSubmit = (data: TutorProfileFormValues): void => {
    console.log(data);
    router.push("/success");
  };

  // const handleSubmit = form.handleSubmit((data) => {
  //   console.log(data);
  //   onSubmit(data);
  // });

  const handleSubmit = () => {
    console.log("out here before submit");
    router.push("/success");
    form.handleSubmit((data) => {
      console.log("in here", data);
      onSubmit(data);
    })();
  };

  return (
    <div className="flex items-center justify-center bg-neutral-100 h-screen font-sans pt-28 pb-9">
      <div className="bg-white  md:rounded-[20px] overflow-hidden w-full max-w-[616px]">
        <div className="space-y-6 font-sans max-h-[65vh] overflow-y-auto scrollbar-thin">
          <div className="text-start py-10 px-4 lg:px-[32px] bg-neutral-25">
            <span className="md:text-sm mb-4 font-normal text-neutral-950 mt-2">
              Let&rsquo;s get started
            </span>
            <p className="text-2xl md:text-3xl font-semibold tracking-tighter mt-2">
              Ebenezer Akin
            </p>
          </div>
          <Form {...form}>
            <form className="pb-6">
              <div className="px-4 lg:px-[32px] gap-5 grid grid-cols-12 items-end font-sans">
                <div className="col-span-12 md:col-span-12 space-y-3">
                  <AppFormLabel className=" text-black-400">
                    Subjects you teach
                  </AppFormLabel>

                  <FormField
                    control={form.control}
                    name="subjects"
                    render={() => (
                      <FormItem>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild className="h-[52px]">
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  " w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500",
                                  !selectedSubject && "text-muted-foreground"
                                )}
                              >
                                Select subject
                                <ChevronDown className="opacity-50" />
                              </Button>
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
                                          selectedSubject.includes(subject.name)
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  <div className="flex flex-wrap gap-3">
                    {selectedSubject.map((val, i) => (
                      <Badge
                        key={i}
                        className="px-4 py-3 rounded-full bg-neutral-100 text-xs/[16.8px] font-normal text-neutral-950 capitalize cursor-pointer gap-1 items-center"
                        onClick={() => handleRemoveItem(val)}
                      >
                        {subjects.find((subject) => subject.name === val)?.name}
                        {svgIcon({
                          icon: "/assets/icons/close.png",
                          size: 20,
                        })}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 ">
                  <AppFormLabel className=" text-black-400">
                    About you and your approach
                  </AppFormLabel>

                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <AppTextarea
                          placeholder="I am a teacher with 5 years of experience "
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.clearErrors("about");
                          }}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-12 space-y-3">
                  <AppFormLabel className=" text-black-400">State</AppFormLabel>

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              form.clearErrors("state");
                            }}
                            value={field.value}
                          >
                            <SelectTrigger className="h-[52px]">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className="divide-y-2 !rounded-none">
                                {states.map((state) => (
                                  <SelectItem
                                    key={state}
                                    value={state}
                                    className={cn(
                                      "capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 ",
                                      state
                                        ? "bg-primary-50 rounded-sm font-semibold"
                                        : "font-normal border-b"
                                    )}
                                  >
                                    {state}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                </div>

                <div className="col-span-12 space-y-3">
                  <AppFormLabel className="text-black-400">
                    Address
                  </AppFormLabel>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <AppFormInput
                            placeholder=""
                            {...field}
                            showRightIcon={true}
                            rightIcon={svgIcon({
                              icon: "/assets/icons/location-filled.png",
                              size: 16,
                            })}
                            className="!ps-8"
                            onChange={(e) => {
                              field.onChange(e);
                              form.clearErrors("address");
                            }}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-12">
                  {isClient && ( // Render DocumentUpload only on the client side
                    <DocumentUpload
                      document_name="Profile Picture"
                      note="No Glasses, Clear Portrait Image, Colored Image"
                    />
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>

        <div className=" bg-white px-4 flex items-center justify-center  border-t-[0.5px] border-t-neutral-200  md:rounded-b-[20px] sticky m-0 bottom-0 ">
          <UIButton
            type="submit"
            onClick={handleSubmit}
            className="w-full md:w-[553px] mt-8 md:mb-8 flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700 h-[56px]"
          >
            Continue
            <Image
              src="/assets/icons/arrow-right-white.svg"
              alt="icon"
              width={20}
              height={10}
            />
          </UIButton>
        </div>
      </div>
    </div>
  );
};

export default TutorGetStarted;
