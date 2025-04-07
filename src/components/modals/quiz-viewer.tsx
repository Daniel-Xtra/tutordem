"use client";
import { QuizInterface } from "@/models/types";
// import { AppModal } from "../reusables/AppModal";
// import Image from "next/image";
import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";
import Icon from "../reusables/AppIcon";
// import { Button } from "../ui/button";
import StudentQuiz from "./student-quiz";
import StartQuiz from "./start-quiz";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  /**DialogDescription*/ DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
// import { Icon } from "@radix-ui/react-select";
// import StartQuiz from "./start-quiz";

interface PageProps {
  selectedQuiz: QuizInterface;
  closeModal: () => void;
}

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

const modalButtons = [
  {
    label: "01",
    backgroundColor: "bg-success-500/10",
    borderColor: "border-success-500",
  },
  {
    label: "02",
    backgroundColor: "bg-warning-500/10",
    borderColor: "border-warning-700",
  },
  {
    label: "...",
    backgroundColor: "bg-white",
    borderColor: "border-neutral-200",
  },
  {
    label: "59",
    backgroundColor: "bg-white",
    borderColor: "border-neutral-200",
  },
  {
    label: "60",
    backgroundColor: "bg-white",
    borderColor: "border-neutral-200",
  },
];

const question: QuestionProp = {
  question:
    "What name is given to the system that requires all people to equally follow the law and in which no one person is higher than the law?",
  answers: [
    {
      answer: "The article was not just written to inform the reader",
      isCorrect: false,
      option: "A",
    },
    {
      answer: "x > 9",
      isCorrect: false,
      option: "B",
    },
    {
      answer: "x < 9",
      isCorrect: false,
      option: "C",
    },
    {
      answer: "x = 9",
      isCorrect: true,
      option: "D",
    },
  ],
  isMultipleChoice: true,
};

const QuizViewer: React.FC<PageProps> = ({ selectedQuiz, closeModal }) => {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [openNumberModal, setOpenNumberModal] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => {
    setOpenQuiz(true);
    closeModal();
  };

  const handleAnswerSelect = (option: string) => {
    if (question.isMultipleChoice) {
      setSelectedAnswers((prev) =>
        prev.includes(option)
          ? prev.filter((ans) => ans !== option)
          : [...prev, option]
      );
    } else {
      setSelectedAnswers([option]);
    }
  };

  return (
    <>
      {!openQuiz && !openNumberModal && (
        <StartQuiz
          selectedQuiz={selectedQuiz}
          closeModal={closeModal}
          handleStartQuiz={handleStartQuiz}
        />
      )}

      {openQuiz && !openNumberModal && (
        <StudentQuiz
          openQuiz={openQuiz}
          setOpenQuiz={setOpenQuiz}
          selectedQuiz={selectedQuiz}
          question={question}
          selectedAnswers={selectedAnswers}
          handleAnswerSelect={handleAnswerSelect}
          modalButtons={modalButtons}
          setOpenNumberModal={setOpenNumberModal}
        />
      )}
      {openNumberModal && (
        <Dialog open={openNumberModal} onOpenChange={setOpenNumberModal}>
          <DialogContent
            onInteractOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
            className="max-w-sm sm:max-w-7xl font-sans flex flex-col"
          >
            <DialogHeader className="sticky top-0 inset-x-0 flex justify-between items-center bg-neutral-100 px-[24px] py-[20px] h-[80px]">
              <div className="space-y-1">
                <DialogTitle>Question Progress 29/50</DialogTitle>
              </div>
              <DialogClose aria-label="Close Modal">
                <Icon icon="close" width={24} height={24} />
              </DialogClose>
            </DialogHeader>
            <div className="px-[24px] mt-[24px] h-[542px] flex flex-col items-center justify-center">
              {/* Desktop view - 25 boxes in 5x5 */}
              <div className="flex flex-wrap mx-auto items-center justify-center gap-[12px]">
                {Array.from({ length: 48 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={num}
                    className={`h-[40px] w-[40px] py[12px] px-[16px] flex items-center justify-center rounded-sm text-sm font-medium
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
              <div className="flex items-center justify-center gap-[12px] my-[12px]">
                <div className="h-[40px] w-[40px] py-[12px] px-[16px] flex items-center justify-center rounded-sm text-sm font-medium border border-neutral-200 bg-white">
                  49
                </div>
                <div className="h-[40px] w-[40px] py-[12px] px-[16px] flex items-center justify-center rounded-sm text-sm font-medium border border-neutral-200 bg-white">
                  50
                </div>
              </div>
            </div>
            {
              <DialogFooter className="sticky m-0 bottom-0 inset-x-0 bg-white flex flex-col-reverse p-8 border-t-[0.5px] border-t-neutral-200 gap-4 sm:flex-row md:h-[120px]">
                <Button
                  type="button"
                  className="bg-primary-500 p-5 rounded-sm h-14 w-full font-sans font-semibold text-sm text-white"
                  onClick={() => {
                    setOpenNumberModal(false);
                    setOpenQuiz(true);
                  }}
                >
                  Close
                </Button>
              </DialogFooter>
            }
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default QuizViewer;
