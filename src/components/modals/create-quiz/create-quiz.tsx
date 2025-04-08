"use client";
import React, { useState } from "react";
import { AppModal } from "../../reusables/AppModal";
import { Button } from "../../ui/button";
import AppFormLabel from "../../reusables/AppFormLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateQuizFormValues, createQuizSchema } from "@/schemas/form-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import AppFormInput from "../../reusables/AppFormInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { cn, formatList } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { ChevronDown } from "lucide-react";
import ColumnBox from "../../reusables/ColumnBox";
import Icon from "../../reusables/AppIcon";
import DocumentUpload from "../../reusables/DocumentUpload";
import ManualUpload from "./manual-upload";
import useQuestionStore from "@/store/useQuizStore";

// Removed from top level and moved inside the component

const steps = [
  {
    id: "Step 1",
    name: "Book a class for",
    fields: [
      "name",
      "grade",
      "subject",
      "visibility",
      "no_of_questions",
      "time",
    ],
  },
  {
    id: "Step 2",
    name: "upload_type",
  },
  { id: "Step 3", name: "set_question" },
];

interface Subject {
  name: string;
}

interface Class {
  type: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
];

const classes: Class[] = [
  { type: "jss3" },
  { type: "sss3" },
  { type: "jss2" },
  { type: "sss2" },
];

const timeOptions = ["10", "20", "30", "45", "60"];

const CreateQuiz = ({ closeModal }: { closeModal: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [, setPreviousStep] = useState(0);

  const { setQuizInfo, getQuizInfo } = useQuestionStore();

  const quizInfo = getQuizInfo();

  const onSubmit = (data: CreateQuizFormValues) => {
    setQuizInfo({
      name: data.name,
      subject: data.subject,
      grade: data.grade,
      visibility: data.visibility,
      no_of_questions: data.no_of_questions,
      time: data.time,
    });
  };

  const [option, setOption] = useState("");

  type Inputs = CreateQuizFormValues;

  type FieldName = keyof Inputs;

  const form = useForm<CreateQuizFormValues>({
    resolver: zodResolver(createQuizSchema),
    mode: "onChange",
    defaultValues: {
      name: quizInfo.name || "",
      subject: quizInfo.subject || "",
      grade: quizInfo.grade || "",
      visibility: quizInfo.visibility || "",
      no_of_questions: quizInfo.no_of_questions || "",
      time: quizInfo.time || "",
    },
  });

  const next = async () => {
    const fields = steps[currentStep]?.fields;

    if (!fields) {
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep + 1);
      return;
    }

    const isValid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!isValid) return;

    const currentStepData = form.getValues();
    setQuizInfo(currentStepData);

    if (steps[currentStep]?.id === "Step 1") {
      const finalData = form.getValues();
      onSubmit(finalData);
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prev = () => {
    const previousStepData = getQuizInfo(); // Get the stored data for the previous step
    console.log("Previous step data:", previousStepData);

    form.reset(previousStepData);

    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const visibility = ["paid_student"];

  return (
    <div>
      <AppModal
        title={"Create Quiz"}
        className="max-w-[99vw]"
        hideFooter={currentStep === 2 && option === "manually" ? true : false}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Please complete the profile with the right details
            </span>
          </>
        }
        content={
          <>
            <div
              className={cn(
                "hidden items-center justify-start gap-3 font-normal text-sm text-neutral-950 capitalize mb-6 cursor-pointer",
                currentStep !== 0 && option !== "manually" && "flex"
              )}
              onClick={prev}
            >
              <Icon
                icon="arrow-right-black"
                className="rotate-180"
                width={16}
                height={16}
              />
              <span>back</span>
            </div>
            {currentStep === 0 && (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="gap-5 grid grid-cols-12  font-sans w-full md:w-[50vw] xl:w-[33vw] justify-self-center"
                >
                  <div className="col-span-12">
                    <span className="font-semibold text-lg/[27px] text-neutral-950">
                      Setup your Quiz
                    </span>
                  </div>

                  <div className="col-span-12 space-y-3">
                    <AppFormLabel className="text-black-400">
                      Name of Quiz
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder="Enter the name of the quiz"
                              className={`w-full ${
                                form.formState.errors.name
                                  ? "!border-red-500"
                                  : ""
                              }`}
                              {...field}
                            />
                          </FormControl>
                          {form.formState.errors.name && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.name.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-12 md:col-span-12 space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Select subject
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <Popover>
                            <PopoverTrigger
                              asChild
                              className={cn(
                                "h-[52px] border border-black-50 transition-colors duration-200",
                                "data-[state=open]:border-primary-500 data-[state=open]:ring-1 data-[state=open]:ring-transparent data-[state=open]:border-2 data-[state=open]:ring-offset-primary-50 data-[state=open]:ring-offset-4",
                                "focus:border-primary-500 focus:border-2 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 focus:ring-offset-4",
                                form.formState.errors.subject &&
                                  "!border-red-500"
                              )}
                            >
                              <FormControl>
                                <Button
                                  type="button"
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value || "Select subject"}
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
                                          "font-sans capitalize text-neutral-950 cursor-pointer",
                                          field.value === subject.name
                                            ? "bg-primary-50 border-b-0 font-semibold"
                                            : "bg-transparent font-normal "
                                        )}
                                        value={subject.name}
                                        key={subject.name}
                                        onSelect={() => {
                                          field.onChange(subject.name);
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
                          {form.formState.errors.subject && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.subject.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-12 space-y-3">
                    <AppFormLabel className="text-black-400">
                      Grade
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger
                              className={cn(
                                "h-[52px] border border-black-50 transition-colors duration-200",
                                "data-[state=open]:border-primary-500 data-[state=open]:ring-1 data-[state=open]:ring-transparent data-[state=open]:border-2 data-[state=open]:ring-offset-primary-50 data-[state=open]:ring-offset-4",
                                "focus:border-primary-500 focus:border-2 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 focus:ring-offset-4",
                                form.formState.errors.grade && "!border-red-500"
                              )}
                            >
                              <SelectValue placeholder="Select grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className="p-1.5 !rounded-none">
                                {classes.map((type) => (
                                  <SelectItem
                                    key={type.type}
                                    value={type.type}
                                    className={cn(
                                      "uppercase rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 cursor-pointer",
                                      field.value === type.type
                                        ? "bg-primary-50 rounded-sm font-semibold"
                                        : "font-normal border-b"
                                    )}
                                  >
                                    {formatList(type.type)}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {form.formState.errors.grade && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.grade.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-12 space-y-3">
                    <AppFormLabel className="text-black-400">
                      Visibility
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="visibility"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger
                              className={cn(
                                "h-[52px] border border-black-50 transition-colors duration-200",
                                "data-[state=open]:border-primary-500 data-[state=open]:ring-1 data-[state=open]:ring-transparent data-[state=open]:border-2 data-[state=open]:ring-offset-primary-50 data-[state=open]:ring-offset-4",
                                "focus:border-primary-500 focus:border-2 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 focus:ring-offset-4",
                                form.formState.errors.visibility &&
                                  "!border-red-500"
                              )}
                            >
                              <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className="p-1.5 !rounded-none">
                                {visibility.map((type) => (
                                  <SelectItem
                                    key={type}
                                    value={type}
                                    className={cn(
                                      "capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 cursor-pointer",
                                      field.value === type
                                        ? "bg-primary-50 rounded-sm font-semibold"
                                        : "font-normal border-b"
                                    )}
                                  >
                                    {formatList(type)}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          {form.formState.errors.visibility && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.visibility.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-6 space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Number of questions
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="no_of_questions"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput
                              placeholder=""
                              className={`w-full ${
                                form.formState.errors.no_of_questions
                                  ? "!border-red-500"
                                  : ""
                              }`}
                              {...field}
                            />
                          </FormControl>
                          {form.formState.errors.no_of_questions && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.no_of_questions.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-6 space-y-3">
                    <AppFormLabel className="text-black-400">Time</AppFormLabel>

                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger
                              className={cn(
                                "h-[52px] border border-black-50 transition-colors duration-200",
                                "data-[state=open]:border-primary-500 data-[state=open]:ring-1 data-[state=open]:ring-transparent data-[state=open]:border-2 data-[state=open]:ring-offset-primary-50 data-[state=open]:ring-offset-4",
                                "focus:border-primary-500 focus:border-2 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 focus:ring-offset-4",
                                form.formState.errors.time && "!border-red-500"
                              )}
                            >
                              <SelectValue placeholder="" {...field} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className=" p-1.5 !rounded-none">
                                {timeOptions.map((val) => (
                                  <SelectItem
                                    key={val}
                                    value={val}
                                    className={cn(
                                      "capitalize rounded-none font-sans text-xs/[16.8px] text-neutral-950 p-4 cursor-pointer",
                                      field.value === val
                                        ? "bg-primary-50 rounded-sm font-semibold"
                                        : "font-normal border-b"
                                    )}
                                  >
                                    {val} minutes
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          {form.formState.errors.time && (
                            <FormMessage className="text-red-500 text-xs">
                              {form.formState.errors.time.message}
                            </FormMessage>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            )}
            {currentStep === 1 && (
              <div className="w-full md:w-[50vw] xl:w-[27vw] justify-self-center">
                <span className="font-semibold text-lg text-neutral-950 flex justify-self-center mb-8">
                  Your Questions
                </span>
                <ColumnBox
                  className={cn(
                    "flex items-center justify-center text-neutral-950 cursor-pointer font-medium text-sm h-28",
                    option === "upload" &&
                      "bg-primary-25 border-2 border-primary-500 ring-offset-4 ring-1 ring-transparent ring-offset-primary-100 font-semibold"
                  )}
                  clickFn={() => setOption("upload")}
                >
                  <span>Upload questions & answers</span>
                </ColumnBox>
                <div className="flex items-center gap-2 mt-4 mb-8 cursor-pointer">
                  <Icon icon="download" width={16} height={16} />
                  <span className="font-normal text-xs text-primary-500">
                    Download question & answer sample sheet
                  </span>
                </div>
                <ColumnBox
                  className={cn(
                    "hidden items-center justify-center text-neutral-950 cursor-pointer font-medium text-sm h-28 xl:flex",
                    option === "manually" &&
                      "bg-primary-25 border-2 border-primary-500 ring-offset-4 ring-1 ring-transparent ring-offset-primary-100 font-semibold"
                  )}
                  clickFn={() => setOption("manually")}
                >
                  <span>Enter question & answers manually</span>
                </ColumnBox>
              </div>
            )}
            {currentStep === 2 && (
              <>
                {option === "upload" && (
                  <div className="w-full md:w-[50vw] xl:w-[33vw] justify-self-center py-20">
                    <DocumentUpload document_name="question & answer" />
                  </div>
                )}

                {option === "manually" && <ManualUpload />}
              </>
            )}
          </>
        }
        actions={
          <>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold xl:ml-[168px] text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold xl:mr-[168px] text-sm/[19.6px] text-white"
              onClick={next}
            >
              Continue
            </Button>
          </>
        }
      />
    </div>
  );
};

export default CreateQuiz;
