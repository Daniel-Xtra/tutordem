"use client";

import Icon from "@/components/reusables/AppIcon";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { QuizInterface } from "@/models/types";
import QuizViewer from "@/components/modals/quiz-viewer";

const quizData: QuizInterface[] = [
  {
    id: 1,
    title: 'WAEC 2020',
    subject: 'Chemistry',
    class: 'SSS 3',
    numberOfQuestions: 40,
    createdAt: '13 days ago',
    numberOfPlays: 10,
    points: 140,
    timeFrame: 10,
    hasReference: true
  },
  {
    id: 2,
    title: 'Adjective Assessment',
    subject: 'English',
    class: 'SSS 1',
    numberOfQuestions: 40,
    createdAt: '09 days ago',
    numberOfPlays: 0,
    points: 100,
    timeFrame: 10,
    hasReference: false
  },
  {
    id: 3,
    title: 'Further Mathematics',
    subject: 'Mathematics',
    class: 'JSS 3',
    numberOfQuestions: 40,
    createdAt: '02 days ago',
    numberOfPlays: 10,
    points: 60,
    timeFrame: 10,
    hasReference: true
  },
  {
    id: 4,
    title: 'Further Mathematics',
    subject: 'Mathematics',
    class: 'JSS 3',
    numberOfQuestions: 40,
    createdAt: '02 days ago',
    numberOfPlays: 10,
    points: 60,
    timeFrame: 10,
    hasReference: false
  },
]

const QuizCard = ({ quiz }: { quiz: QuizInterface }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizInterface | null>(null);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedQuiz(quiz);
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div onClick={handleToggleModal} className=" cursor-pointer col-span-1 rounded bg-neutral-100">
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-semibold text-sm md:text-base text-primary-950 capitalize">
                  {quiz.title}
                </span>

                <div className="flex items-center font-normal text-sm gap-2 text-neutral-600">
                  <span className="capitalize">{quiz.subject}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span className="uppercase">{quiz.class}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span className="capitalize">{quiz.numberOfQuestions}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="font-normal text-sm text-neutral-600">
                    {quiz.createdAt}
                  </p>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <p className="font-normal text-sm text-primary-500">{quiz.numberOfPlays} plays</p>
                </div>
                <div>
                  <Icon icon="arrow-right-black" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        {selectedQuiz && (
          <QuizViewer 
            closeModal={() => setIsModalOpen(false)}
            selectedQuiz={selectedQuiz}
          />
        )}
      </Dialog>
    </div>
  )
}

const StudentQuiz = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 font-sans px-5 xl:px-[136px]">
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
          <h3 className="font-semibold text-lg/[25.2px] -mb-4 capitalize text-neutral-900">
            general quiz
          </h3>
        </div>
        <div className="col-span-1 rounded-[8px] p-4 bg-neutral-950 gap-3 flex items-center">
          <Icon icon="quiz-cup" width={32} height={32} />
          <div className="space-y-[2px]">
            <span className="text-white font-medium text-sm capitalize">
              last quiz
            </span>
            <p className="font-normal text-xs text-neutral-400 flex capitalize gap-1.5 items-center">
              mathematics <GoDotFill className="text-hotShot-500" />
              <span className="-me-1 text-success-500">30</span>/40
            </p>
          </div>
        </div>
        <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3  flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon icon="math-quiz" width={32} height={32} />
            <div className="space-y-[2px]">
              <span className="text-neutral-950 font-medium text-sm capitalize">
                statistics math quiz
              </span>
              <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                mathematics <GoDotFill className="text-neutral-950" />
                40 questions
              </p>
            </div>
          </div>
          <Icon icon="arrow-right-black" width={16} height={16} />
        </div>
        <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3  flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon icon="math-quiz" width={32} height={32} />
            <div className="space-y-[2px]">
              <span className="text-neutral-950 font-medium text-sm capitalize">
                WAEC 2020 quiz
              </span>
              <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                english <GoDotFill className="text-neutral-950" />
                40 questions
              </p>
            </div>
          </div>
          <Icon icon="arrow-right-black" width={16} height={16} />
        </div>
        <div className="col-span-1 rounded-[8px] p-4 bg-neutral-100 gap-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon icon="math-quiz" width={32} height={32} />
            <div className="space-y-[2px]">
              <span className="text-neutral-950 font-medium text-sm capitalize">
                organic chemistry quiz
              </span>
              <p className="font-normal text-xs text-neutral-500 flex flex-wrap capitalize gap-1.5 items-center">
                chemistry <GoDotFill className="text-neutral-950" />
                40 questions
              </p>
            </div>
          </div>
          <Icon icon="arrow-right-black" width={16} height={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans px-5 xl:px-[136px]">
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="font-semibold text-lg/[25.2px] -mb-4 normal-case text-neutral-900">
            Quiz from your tutor
          </h3>
        </div>
        {quizData.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz}/>
        ))}
      </div>
    </>
  );
};

export default StudentQuiz;
