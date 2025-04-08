"use client";

import ProtectedRoute from "@/hocs/withProtectedRoute";
import SettingsFeature from "@/modules/settings/settings";

const Settings = () => {
  return (
    <ProtectedRoute allowedRoles={["tutor", "parent", "student"]}>
      <SettingsFeature />;
    </ProtectedRoute>
  );
};

export default Settings;
