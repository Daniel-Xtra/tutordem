"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import PaymentFeature from "@/modules/payment";
import React from "react";

const Payment = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <PaymentFeature />;
    </ProtectedRoute>
  );
};

export default Payment;
