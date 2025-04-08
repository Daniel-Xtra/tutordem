"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import OverviewFeature from "@/modules/overview";

import React from "react";

const Overview = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <OverviewFeature />;
    </ProtectedRoute>
  );
};

export default Overview;
