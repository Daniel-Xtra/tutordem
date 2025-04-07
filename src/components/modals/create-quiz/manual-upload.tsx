import Icon from "@/components/reusables/AppIcon";
import AppTextarea from "@/components/reusables/AppTextarea";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React, { useCallback, useEffect, useRef, useState } from "react";
import QuizImage from "./quiz-image";
import QuizParagraph from "./quiz-paragraph";
import useQuestionStore from "@/store/useQuizStore";

const ManualUpload = () => {
  const [isMultiline, setIsMultiline] = useState<{ [key: number]: boolean }>(
    {}
  );
  const {
    question,

    selected,
    reference,
    questionIndex,
    getQuizInfo,
    setQuestionIndex,
    addQuestion,
    setQuestion,
    setReference,
    setSelected,
    resetQuestionForm,
  } = useQuestionStore();
  const [open, setOpen] = useState<{
    add_quiz_image: boolean;
    add_quiz_paragraph: boolean;
  }>({
    add_quiz_image: false,
    add_quiz_paragraph: false,
  });
  const quizInfo = getQuizInfo();

  const [options, setOptions] = useState([
    { label: "A", text: "", value: "a" },
    { label: "B", text: "", value: "b" },
    { label: "C", text: "", value: "c" },
    { label: "D", text: "", value: "d" },
  ]);

  const textareasRef = useRef<(HTMLTextAreaElement | null)[]>([]);
  const isMultilineRef = useRef<{ [key: number]: boolean }>({});
  const [isOverflowing, setIsOverflowing] = useState<{
    [key: number]: boolean;
  }>({});

  const adjustHeight = useCallback(
    (index: number) => {
      const textarea = textareasRef.current[index];
      if (!textarea) return;

      textarea.style.height = "auto";
      const newHeight = textarea.scrollHeight;
      const isNowMultiline = newHeight > 26;
      const wasMultiline = isMultiline[index] || false;
      const isTextOverflowing = textarea.scrollWidth > textarea.clientWidth;
      textarea.style.height = `${newHeight}px`;

      if (wasMultiline !== isNowMultiline) {
        setIsMultiline((prevState) => ({
          ...prevState,
          [index]: isNowMultiline,
        }));
      }
      setIsOverflowing((prevState) => ({
        ...prevState,
        [index]: isTextOverflowing,
      }));
    },
    [isMultiline]
  );

  const handleTextChange = (index: number, text: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === index ? { ...option, text } : option
      )
    );

    adjustHeight(index);

    const isEmpty = text.trim() === "";
    isMultilineRef.current[index] = !isEmpty;
    setIsMultiline((prevState) => ({
      ...prevState,
      [index]: !isEmpty,
    }));
  };

  const handleAddQuestion = () => {
    addQuestion({
      text: question.text,
      image: reference === "image" ? "image_url" : undefined,
      passage: reference === "paragraph" ? "passage_url" : undefined,
      options: options.map((option) => ({
        value: option.value,
        text: option.text,
      })),
      correct_answer: selected,
    });
    console.log("Question added:", {
      text: question.text,
      options: options.map((option) => ({
        value: option.value,
        text: option.text,
      })),
      correct_answer: selected,
    });
    resetQuestionForm();
    setQuestionIndex((prev) => prev + 1);
  };

  useEffect(() => {
    options.forEach((_, index) => adjustHeight(index));
  }, [adjustHeight, options, options.length]);

  return (
    <div className="space-y-10 font-sans">
      <div className="grid grid-cols-2 mx-8 divide-x divide-neutral-300 overflow-hidden ">
        <div
          className={cn(
            " flex flex-col items-center gap-0",
            reference !== null ? "col-span-1" : "col-span-2"
          )}
        >
          <div className="rounded p-4 border border-neutral-300 w-max font-normal text-sm text-neutral-950">
            Question {questionIndex + 1}/{quizInfo.no_of_questions}
          </div>
          <AppTextarea
            placeholder="Enter your question"
            value={question.text}
            onChange={(e) => setQuestion({ text: e.target.value })}
            className="text-center font-normal text-sm text-neutral-950 w-[410px] border-none px-4 pt-[2px] !pb-0 h-[26px] leading-[26px] resize-none focus:!ring-0 focus:!ring-offset-0 focus:!border"
            defaultHeight="0px"
            showHint={false}
          />
          <div className="flex items-center gap-3 p-2 font-medium text-xs text-neutral-950">
            <Dialog
              open={open.add_quiz_image}
              onOpenChange={(isOpen) =>
                setOpen((prev) => ({ ...prev, add_quiz_image: isOpen }))
              }
            >
              <DialogTrigger asChild>
                <Button className="p-4 rounded bg-neutral-50 h-[49px]  flex items-center justify-center">
                  <Icon icon="gallery" width={16} height={16} />
                  <span>Change Image</span>
                </Button>
              </DialogTrigger>
              <QuizImage
                onSetImage={setReference}
                closeModal={() =>
                  setOpen((prev) => ({ ...prev, add_quiz_image: false }))
                }
              />
            </Dialog>

            <Dialog
              open={open.add_quiz_paragraph}
              onOpenChange={(isOpen) =>
                setOpen((prev) => ({ ...prev, add_quiz_paragraph: isOpen }))
              }
            >
              <DialogTrigger asChild>
                <Button className="p-4 rounded bg-neutral-50 h-[49px]  flex items-center justify-center">
                  <Icon icon="paragraph" width={16} height={16} />
                  <span>Add paragraph</span>
                </Button>
              </DialogTrigger>
              <QuizParagraph
                onSetParagraph={setReference}
                closeModal={() =>
                  setOpen((prev) => ({ ...prev, add_quiz_paragraph: false }))
                }
              />
            </Dialog>
          </div>

          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="grid grid-cols-1 gap-4 mt-3 px-24 w-full"
          >
            {options.map((option, index) => (
              <label
                key={option.value}
                className={cn(
                  "cursor-pointer flex items-center gap-3",
                  reference !== null ? "w-full" : "w-2/5 mx-auto"
                )}
              >
                <span className="font-medium uppercase text-sm text-neutral-500">
                  {option.value}
                </span>
                <div className="p-0 w-full rounded-full border-gray-300 hover:border-primary">
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="sr-only hidden"
                  />

                  <Textarea
                    ref={(el) => {
                      textareasRef.current[index] = el;
                    }}
                    value={option.text}
                    placeholder="Enter option"
                    onChange={(e) => {
                      handleTextChange(index, e.target.value);
                      adjustHeight(index);
                    }}
                    onClick={() => setSelected(option.value)}
                    onInput={() => adjustHeight(index)}
                    className={cn(
                      "resize-none w-full overflow-hidden min-h-[26px] border border-neutral-500 font-medium px-4 text-sm placeholder:text-black-500 focus:bg-success-25 focus:border-2 focus:border-success-600 focus:!ring-0 focus:!ring-offset-0",
                      isMultiline[index]
                        ? "pt-4 pb-4 text-black-500"
                        : "pt-4 pb-0 text-black-500",
                      isOverflowing[index] ? "pt-4 pb-4" : "pt-4 pb-0",
                      selected === option.value &&
                        "bg-success-25 border-2 border-success-600 ring-0 ring-offset-0"
                    )}
                  />
                </div>
              </label>
            ))}
          </RadioGroup>

          <p className="text-warning-600 font-normal text-sm pt-4">
            Please select the right answer
          </p>

          <div className="flex items-center gap-3 p-2 font-medium text-xs text-neutral-950">
            <Button className="p-4 rounded bg-transparent h-[49px] flex items-center justify-center">
              <Icon
                icon="arrow-right-black"
                className="rotate-180"
                width={16}
                height={16}
              />
              <span> Previous</span>
            </Button>
            <Button
              className="p-4 rounded bg-transparent h-[49px] flex items-center justify-center"
              onClick={handleAddQuestion}
            >
              <span> Skip</span>
              <Icon icon="arrow-right-black" width={16} height={16} />
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "col-span-1 hidden flex-col gap-3 pl-24 pr-20 text-justify",
            reference === "paragraph" && "flex"
          )}
        >
          <p className="font-medium text-sm text-neutral-950">Read Passage</p>
          <p className="font-normal text-base text-neutral-950">
            Can you help with branding and identity design? Absolutely! Pixsools
            offers branding services, including logo creation, brand strategy,
            and visual identity design to help businesses stand out. Do you work
            with international clients? Yes, Pixsools works with clients from
            all over the world. They are equipped to handle projects remotely,
            ensuring clear communication and timely delivery.
          </p>
          <p className="font-normal text-base text-neutral-950">
            How do I get a quote for my project? To get a quote, you can fill
            out the contact form on their website with details about your
            project. Pixsools will review your requirements and provide a
            customized quote. Would you like me to refine or add more specific
            FAQs?
          </p>
        </div>

        <div
          className={cn(
            "col-span-1 hidden flex-col gap-[42px] pl-24 pr-20 text-justify",
            reference === "image" && "flex"
          )}
        >
          <p className="font-medium text-sm text-neutral-950">
            Image of the equilibrium of atoms
          </p>
          <Icon
            icon="question-reference"
            type="images"
            width={466}
            height={491}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {Array.from({ length: Number(quizInfo.no_of_questions) }).map(
          (_, index) => (
            <Button
              className={cn(
                "border border-neutral-100 size-9 py-3 px-4 rounded text-xs font-medium text-neutral-500",
                questionIndex === index && "border-success-300 bg-success-50"
              )}
              key={index}
              onClick={() => setQuestionIndex(() => index)}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default ManualUpload;
