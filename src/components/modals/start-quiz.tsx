"use client";

import { QuizInterface } from "@/models/types";
import Icon from "../reusables/AppIcon";
import { GoDotFill } from "react-icons/go";
import React from "react";
import { AppModal } from "../reusables/AppModal";
import Image from "next/image";
import { Button } from "../ui/button";

interface PageProps {
  selectedQuiz: QuizInterface;
  closeModal: () => void;
  handleStartQuiz: () => void;
}

const StartQuiz: React.FC<PageProps> = ({
  selectedQuiz,
  closeModal,
  handleStartQuiz,
}) => {
  return (
    <AppModal
      title={"Quiz Summary"}
      description={
        <>
          <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
            Resources for your students
          </span>
        </>
      }
      primaryFn={closeModal}
      content={
        <div className="space-y-6 font-sans">
          <p className="text-neutral-950 font-semibold text-md">Leaderboard</p>
          <div>
            <Image
              src="/assets/images/leaderboard.png"
              height={209}
              width={432}
              alt="leaderboard"
            />
          </div>

          <div className="mt-4 w-full rounded-[8px] p-4 bg-neutral-100 gap-3  flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon="math-quiz" width={32} height={32} />
              <div className="space-y-[2px]">
                <span className="text-neutral-950 font-medium text-sm capitalize">
                  {selectedQuiz.title}
                </span>
                <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                  {selectedQuiz.subject}
                  <GoDotFill className="text-primary-500" />
                  {selectedQuiz.class}
                  <GoDotFill className="text-primary-500" />
                  {selectedQuiz.numberOfQuestions} questions
                </p>
              </div>
            </div>
          </div>

          <div className="text-[12px] flex items-center justify-between">
            <div>
              <span className="font-medium text-neutral-950">Timeframe</span>
            </div>
            <div>
              <span className="font-normal text-neutral-500">
                {selectedQuiz.timeFrame} per question
              </span>
            </div>
          </div>
          <div className="text-[12px] flex items-center justify-between">
            <div>
              <span className="font-medium text-neutral-950">Total Point</span>
            </div>
            <div>
              <span className="font-normal text-neutral-500">
                {selectedQuiz.points} points
              </span>
            </div>
          </div>
          <div className="text-[12px] flex items-center justify-between">
            <div>
              <span className="font-medium text-neutral-950">
                Number of plays
              </span>
            </div>
            <div>
              <span className="font-normal text-neutral-500">
                {selectedQuiz.numberOfPlays}
              </span>
            </div>
          </div>
        </div>
      }
      actions={
        <Button
          type="button"
          className="w-full bg-primary-500 p-5 rounded-sm font-sans h-14  font-semibold text-sm/[19.6px] text-white"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      }
    />
  );
};

export default StartQuiz;
