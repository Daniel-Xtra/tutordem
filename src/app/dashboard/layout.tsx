import type { Metadata } from "next";

import { LayoutProvider } from "@/providers/layout-provider";

export const metadata: Metadata = {
  title: "TutorDem",
  description: "Generated by create next app",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default DashboardLayout;
