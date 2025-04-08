"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import MessagesFeature from "@/modules/messages";
import React from "react";

const Messages = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <MessagesFeature />
    </ProtectedRoute>
  );
};

export default Messages;
