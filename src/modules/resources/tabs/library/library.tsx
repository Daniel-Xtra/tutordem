import useAuthStore from "@/store/useAuthStore";
import React from "react";
import StudentLibrary from "./student-library";
import TutorLibrary from "./tutor-library";

const LibraryComponents = {
  tutor: TutorLibrary,
  student: StudentLibrary,
};

const Library = () => {
  const user = useAuthStore((state) => state.user);

  const LibraryComponent =
    LibraryComponents[user?.membershipType as "tutor" | "student"] || null;

  return <>{LibraryComponent ? <LibraryComponent /> : null}</>;
};

export default Library;
