import React from "react";
import StudentQuiz from "./student-quiz";
import TutorQuiz from "./tutor-quiz";
import useAuthStore from "@/store/useAuthStore";

const QuizComponents = {
  tutor: TutorQuiz,
  student: StudentQuiz,
};

const Quiz = () => {
  const user = useAuthStore((state) => state.user);

  const QuizComponent =
    QuizComponents[user?.membershipType as "tutor" | "student"] || null;

  return <>{QuizComponent ? <QuizComponent /> : null}</>;
};

export default Quiz;
