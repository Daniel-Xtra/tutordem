"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import NotificationFeature from "@/modules/notification";
import React from "react";

const Notification = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <NotificationFeature />;
    </ProtectedRoute>
  );
};

export default Notification;
