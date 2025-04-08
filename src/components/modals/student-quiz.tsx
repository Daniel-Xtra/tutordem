"use client";

import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "../ui/dialog";
import { GoDotFill } from "react-icons/go";
import { Button } from "../ui/button";
import AppAccordion from "../reusables/AppAccordion";
import Image from "next/image";
import { QuizInterface } from "@/models/types";
import Icon from "../reusables/AppIcon";
import PendingReviewModal from "./pending-review";
import { useState } from "react";

interface AnswersProp {
  answer: string;
  isCorrect: boolean;
  option: string;
}

interface QuestionProp {
  question: string;
  answers: AnswersProp[];
  isMultipleChoice: boolean;
}
const StudentQuiz = ({
  openQuiz,
  setOpenQuiz,
  selectedQuiz,
  question,
  selectedAnswers,
  handleAnswerSelect,
  modalButtons,
  setOpenNumberModal,
}: {
  openQuiz: boolean;
  setOpenQuiz: (open: boolean) => void;
  selectedQuiz: QuizInterface;
  question: QuestionProp;
  selectedAnswers: string[];
  handleAnswerSelect: (answer: string) => void;
  modalButtons: {
    label: string;
    backgroundColor: string;
    borderColor: string;
  }[];
  setOpenNumberModal: (open: boolean) => void;
}) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  return (
    <>
      <Dialog open={openQuiz} onOpenChange={setOpenQuiz}>
        <DialogContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="max-w-sm sm:max-w-7xl font-sans  flex flex-col"
        >
          <DialogHeader className="sticky top-0 inset-x-0 flex flex-col sm:flex-row justify-start sm:justify-between items-start bg-neutral-800 text-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex-shrink-0 gap-4 sm:gap-0">
            <div className="order-2 md:order-1 space-y-1 flex items-center justify-center sm:justify-start w-full sm:w-auto">
              <div className="flex items-center justify-center gap-2">
                <div className="hidden lg:block">
                  <Icon icon="jamb" width={64} height={64} />
                </div>
                <div className="flex flex-col items-center sm:items-start justify-center gap-1">
                  <DialogTitle className="font-bold text-[14px] md:text-[16px] text-white">
                    {selectedQuiz?.title}
                  </DialogTitle>
                  <DialogDescription className="flex items-center space-x-2">
                    <span className="font-normal text-sm/[16.8px] text-neutral-400">
                      {selectedQuiz?.subject}
                    </span>
                    <GoDotFill className="text-primary-500" />
                    <span className="font-normal text-sm/[16.8px] text-neutral-400">
                      {selectedQuiz?.class}
                    </span>
                    <GoDotFill className="text-primary-500" />
                    <span className="font-normal text-sm/[16.8px] text-neutral-400">
                      {selectedQuiz?.numberOfQuestions} questions
                    </span>
                  </DialogDescription>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-row gap-2 w-full sm:w-auto">
              <div className="flex items-center gap-2 border border-1 border-warning-500 p-2 md:p-4 rounded-sm">
                <Icon icon="time" width={24} height={24} />
                <span className="text-warning-500 font-bold text-md">
                  59:59
                </span>
              </div>
              <div className="flex items-center gap-2 md:border border-1 border-neutral-700 p-4 rounded-sm">
                <Icon icon="speaker-light" width={24} height={24} />
                <span className="text-white font-bold text-md hidden md:block">
                  Read Text Aloud
                </span>
                <span className="text-white font-bold text-md block md:hidden">
                  read
                </span>
              </div>
              <DialogClose
                onClick={() => setOpenQuiz(false)}
                aria-label="Close Modal"
                className="hidden sm:flex ml-auto sm:ml-0 p-4 rounded-sm items-center gap-2 bg-neutral-800"
              >
                Close
                <Icon
                  icon="close"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </DialogClose>
              <Button
                onClick={() => setOpenReviewModal(true)}
                aria-label="Submit"
                className="sm:hidden ml-auto sm:ml-0 p-4 rounded-sm flex items-center justify-center mt-2 gap-2 bg-neutral-800"
              >
                Submit
                <Icon
                  icon="close"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </Button>
            </div>
          </DialogHeader>

          <div className="p-4 sm:p-10 max-h-[80vh] overflow-y-auto scrollbar-thin">
            {/* Use flex container when no reference, grid when reference exists */}
            <div
              className={`${
                !selectedQuiz?.hasReference
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2"
              }`}
            >
              {/* Question Section - Shows second on mobile, first on desktop */}
              <div
                className={`order-2 md:order-1 flex flex-col items-center justify-center space-y-8 mt-4 ${
                  selectedQuiz?.hasReference ? "md:pr-8" : "w-full max-w-2xl"
                }`}
              >
                <div className="flex flex-col items-center w-full">
                  <div className="border border-1 border-neutral-300 rounded-sm w-full sm:w-[151px]">
                    <div className="flex items-center gap-2 p-4">
                      <p>question 1/20</p>
                    </div>
                  </div>

                  <p className="text-neutral-950 font-medium text-sm text-center mt-4 px-4 md:px-16">
                    {question.question}
                  </p>
                </div>

                <div className="flex flex-col space-y-4 w-full px-4 md:px-16">
                  {question.answers.map((answer, index) => (
                    <div
                      key={index}
                      className="flex space-x-2 flex-row items-center cursor-pointer"
                      onClick={() => handleAnswerSelect(answer.option)}
                    >
                      <input
                        type={question.isMultipleChoice ? "checkbox" : "radio"}
                        name="answer"
                        checked={selectedAnswers.includes(answer.option)}
                        onChange={() => handleAnswerSelect(answer.option)}
                        className="hidden"
                      />
                      <p className="font-medium">{answer.option}</p>
                      <div
                        className={`flex-1 min-h-[56px] ${
                          selectedAnswers.includes(answer.option)
                            ? "border border-1 border-success-500 border-success-500 border-2 bg-success-500/10 rounded-sm"
                            : "border border-1 border-neutral-300 hover:border-success-500 hover:border-2 hover:bg-success-500/10 rounded-sm"
                        }`}
                      >
                        <div className="flex items-center h-full p-4">
                          <p className="line-clamp-2">{answer.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Button className="text-neutral-600 font-semibold text-sm h-14 px-8">
                      <Icon
                        icon="arrow-left-black"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Previous
                    </Button>
                    <Button className="text-neutral-600 font-semibold text-sm h-14 px-8">
                      Skip
                      <Icon
                        icon="arrow-right-black"
                        width={24}
                        height={24}
                        className="ml-2"
                      />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Reference Section - Shows first on mobile, second on desktop */}
              {selectedQuiz?.hasReference && (
                <div className="order-1 md:order-2 md:pl-8">
                  <AppAccordion title="Question Reference">
                    <div className="mt-4">
                      <Image
                        src="/assets/images/question-reference.png"
                        height={395}
                        width={436}
                        alt="question-reference"
                        className="rounded-sm"
                      />
                    </div>
                  </AppAccordion>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              {/* Desktop view - 25 boxes in 5x5 */}
              <div className="hidden md:flex flex-wrap w-fit gap-1">
                {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={num}
                    className={`h-[40px] w-[40px] flex items-center justify-center rounded-sm text-sm font-medium
                                                ${
                                                  num <= 3
                                                    ? "border border-success-500 bg-success-500/10"
                                                    : "border border-neutral-200 bg-white"
                                                }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* Mobile view - 5 boxes + Open button */}
              <div className="md:hidden flex items-center gap-1">
                {modalButtons.map((num) => (
                  <div
                    key={num.label}
                    className={`h-[40px] w-[40px] flex items-center justify-center rounded-sm text-sm font-medium border ${num.backgroundColor} ${num.borderColor}`}
                  >
                    {num.label}
                  </div>
                ))}
                <DialogTrigger asChild>
                  <button
                    onClick={() => setOpenNumberModal(true)}
                    className="h-[40px] px-4 flex items-center gap-1 border border-neutral-200 rounded-sm bg-white text-sm font-medium"
                  >
                    Open
                    <Icon icon="arrow-right-black" width={16} height={16} />
                  </button>
                </DialogTrigger>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openReviewModal} onOpenChange={setOpenReviewModal}>
        <PendingReviewModal
          icon="guide"
          title="You've clicked on submit"
          description="Are you sure you want to submit?"
          closePendingModal={() => setOpenReviewModal(false)}
          actions={
            <Button
              onClick={() => setOpenReviewModal(false)}
              className="bg-primary-500 text-white font-semibold w-full text-sm h-14 px-8"
            >
              Yes
            </Button>
          }
        />
      </Dialog>
    </>
  );
};

export default StudentQuiz;
