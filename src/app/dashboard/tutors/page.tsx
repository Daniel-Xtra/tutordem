"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import TutorsFeature from "@/modules/tutors";
import React from "react";

const Tutors = () => {
  return (
    <ProtectedRoute allowedRoles={["student"]}>
      <TutorsFeature />;
    </ProtectedRoute>
  );
};

export default Tutors;
