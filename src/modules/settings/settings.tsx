"use client";

import ParentProfile from "@/components/profile/parent-profile";

import SettingsTab from "./tab/tab";
import Profile from "./pages/profile";

import TeachingProfile from "./pages/teaching-profile";
import Credentials from "./pages/credentials";
import Payment from "./pages/payment";
import Calendar from "./pages/calendar";
import Fees from "./pages/fees";
import Location from "./pages/location";
import useAuthStore from "@/store/useAuthStore";
import useSettingStore from "@/store/useSettingStore";
import { JSX, useEffect } from "react";

const tabComponents: Record<string, JSX.Element> = {
  profile: <Profile />,
  calendar: <Calendar />,
  payment: <Payment />,
  "teaching profile": <TeachingProfile />,
  credentials: <Credentials />,
  fees: <Fees />,
  location: <Location />,
};

const SettingsFeature = () => {
  const user = useAuthStore((state) => state.user);
  const { activeTab, setActiveTab } = useSettingStore();
  useEffect(() => {
    if (user?.membershipType !== "tutor") {
      setActiveTab("profile");
    }
  }, [user?.membershipType, setActiveTab]);

  return (
    <>
      <div>
        {user?.membershipType === "parent" && <ParentProfile />}
        <div className="mt-6 md:px-5 xl:px-[136px]">
          <div className="md:border-[0.5px] border-neutral-200 rounded-xl space-y-7 md:w-11/12 p-6 md:p-7">
            {user?.membershipType === "tutor" && <SettingsTab />}
            {tabComponents[activeTab] || <div>Tab not found</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsFeature;
