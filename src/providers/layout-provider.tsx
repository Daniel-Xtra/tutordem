"use client";

import React from "react";
import Header from "@/components/header/header";
import MiniHeader from "@/components/header/mini-header";
import useAuthStore from "@/store/useAuthStore";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((state) => state.user);
  if (user.membershipType !== "") {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <MiniHeader />
        <main className="flex-grow pb-8">{children}</main>
      </div>
    );
  }

  return null;
}
