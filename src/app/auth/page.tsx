"use client";

import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React from "react";

const Auth = () => {
  const router = useRouter();

  const loginHandler = useAuthStore((state) => state.loginHandler);

  const handleLogin = (membershipType: string) => {
    loginHandler({ isAuthenticated: true, membershipType: membershipType });
    router.push("/dashboard/overview");
  };
  return (
    <div className="space-y-5 ">
      <Button
        type="button"
        className="bg-primary-700  text-white p-6 w-max rounded-sm"
        onClick={() => handleLogin("parent")}
      >
        Log in as parent
        {/* parent */}
      </Button>
      <Button
        type="button"
        className="bg-yellow-700 text-white p-6 w-max rounded-sm"
        onClick={() => handleLogin("tutor")}
      >
        Log in as tutor
      </Button>
      <Button
        type="button"
        className="bg-orange-700 text-white p-6 w-max rounded-sm"
        onClick={() => handleLogin("student")}
      >
        Log in as student
      </Button>
    </div>
  );
};

export default Auth;
