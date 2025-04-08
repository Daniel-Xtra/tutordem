"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import ResourcesFeature from "@/modules/resources/resources";
import React from "react";

const Resources = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "student"]}>
      <ResourcesFeature />;
    </ProtectedRoute>
  );
};

export default Resources;
