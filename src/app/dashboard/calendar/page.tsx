"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import CalendarFeature from "@/modules/calendar";
import React from "react";

const Calendar = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <CalendarFeature />
    </ProtectedRoute>
  );
};

export default Calendar;
