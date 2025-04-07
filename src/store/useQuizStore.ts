import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Option {
  value: string;
  text: string;
}

interface Question {
  text: string;
  image?: string;
  passage?: string;
  options: Option[];
  correct_answer: string;
}

interface Quiz {
  name: string;
  subject: string;
  grade: string;
  visibility: string;
  no_of_questions: string;
  time: string;
  questions: Question[];
}

interface QuestionStoreState {
  quiz: Quiz;
  question: { text: string; image?: string; passage?: string };
  setQuiz: (quiz: Quiz) => void;
  options: Option[];
  selected: string;
  reference: string | null;
  questionIndex: number;
  setQuestion: (q: { text: string }) => void;
  setOptions: (opts: Option[] | ((prev: Option[]) => Option[])) => void;
  setSelected: (val: string) => void;
  setReference: (ref: string) => void;
  setQuestionIndex: (cb: (i: number) => number) => void;
  resetQuestionForm: () => void;
  addQuestion: (question: Question) => void;
  updateQuestion: (index: number, question: Question) => void;
  removeQuestion: (index: number) => void;
  setQuizInfo: (info: Partial<Omit<Quiz, "questions">>) => void;
  getQuizInfo: () => Partial<Omit<Quiz, "questions">>;
}

const updateQuestionAtIndex = (
  quiz: Quiz,
  index: number,
  updatedData: Partial<Question>
) => {
  const updatedQuestions = [...quiz.questions];
  if (index >= 0 && index < updatedQuestions.length) {
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      ...updatedData,
    };
  }
  return updatedQuestions;
};

const useQuestionStore = create<QuestionStoreState>()(
  persist(
    (set, get) => ({
      quiz: {
        name: "",
        subject: "",
        grade: "",
        visibility: "",
        no_of_questions: "",
        time: "",
        questions: [],
      },
      question: { text: "" },
      selected: "",
      reference: null,
      questionIndex: 0,
      options: [
        { value: "A", text: "" },
        { value: "B", text: "" },
        { value: "C", text: "" },
        { value: "D", text: "" },
      ],

      setSelected: (val: string) =>
        set(() => ({
          selected: val,
        })),

      setQuiz: (quiz: Quiz) =>
        set(() => ({
          quiz,
        })),

      setQuestion: (q: { text: string }) =>
        set(() => ({
          question: q,
        })),

      setOptions: (opts: Option[] | ((prev: Option[]) => Option[])) =>
        set((state) => {
          const newOptions =
            typeof opts === "function"
              ? opts(state.quiz.questions[state.questionIndex]?.options || [])
              : opts;

          return {
            quiz: {
              ...state.quiz,
              questions: updateQuestionAtIndex(
                state.quiz,
                state.questionIndex,
                {
                  options: newOptions,
                }
              ),
            },
          };
        }),

      setReference: (ref: string) =>
        set(() => ({
          reference: ref,
        })),

      setQuestionIndex: (cb: (i: number) => number) =>
        set((state) => {
          const newIndex = cb(state.questionIndex);
          const max = parseInt(state.quiz.no_of_questions || "0");
          return {
            questionIndex: Math.max(0, Math.min(newIndex, max - 1)),
          };
        }),

      resetQuestionForm: () =>
        set(() => ({
          selected: "",
          question: { text: "" },
          options: [
            { value: "A", text: "" },
            { value: "B", text: "" },
            { value: "C", text: "" },
            { value: "D", text: "" },
          ],
          reference: null,
        })),

      addQuestion: (question: Question) =>
        set((state) => ({
          quiz: {
            ...state.quiz,
            questions: [...state.quiz.questions, question],
          },
        })),

      updateQuestion: (index: number, updatedQuestion: Question) =>
        set((state) => ({
          quiz: {
            ...state.quiz,
            questions: updateQuestionAtIndex(
              state.quiz,
              index,
              updatedQuestion
            ),
          },
        })),

      removeQuestion: (index: number) =>
        set((state) => ({
          quiz: {
            ...state.quiz,
            questions: state.quiz.questions.filter((_, i) => i !== index),
          },
        })),

      setQuizInfo: (info: Partial<Omit<Quiz, "questions">>) =>
        set((state) => ({
          quiz: {
            ...state.quiz,
            ...info,
          },
        })),

      getQuizInfo: () => {
        const state = get();
        const quiz = state.quiz || {};
        return {
          name: quiz.name,
          subject: quiz.subject,
          grade: quiz.grade,
          visibility: quiz.visibility,
          no_of_questions: quiz.no_of_questions,
          time: quiz.time,
        };
      },
    }),
    {
      name: "quiz-storage",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

export default useQuestionStore;
