"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import SessionFeature from "@/modules/session";

import React from "react";

const Session = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <SessionFeature />;
    </ProtectedRoute>
  );
};

export default Session;
