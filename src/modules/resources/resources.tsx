"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Library from "./tabs/library/library";
import Quiz from "./tabs/quiz/quiz";
import Icon from "@/components/reusables/AppIcon";

const tabs = [
  {
    name: "library",
    icon: "teaching-profile",
    activeIcon: "teaching-profile-active",
  },
  { name: "quiz", icon: "quiz-light", activeIcon: "quiz-active" },
];

const ResourcesFeature = () => {
  const [activeTab, setActiveTab] = useState("library");

  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px] mb-5">
        <div className="space-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            resources
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Upload resources for your students.
          </p>
        </div>
        <div>
          {tabs.map((tab) => (
            <Button
              type="button"
              key={tab.name}
              className={cn(
                "font-normal text-sm/[19.6px] text-neutral-500 px-6 h-14",
                activeTab == tab.name &&
                  "capitalize text-neutral-950 font-medium bg-primary-50"
              )}
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon
                icon={
                  activeTab == tab.name ? `${tab.activeIcon}` : `${tab.icon}`
                }
                width={20}
                height={20}
              />
              {tab.name}
            </Button>
          ))}
        </div>
      </div>
      {activeTab == "library" && <Library />}
      {activeTab == "quiz" && <Quiz />}
    </>
  );
};

export default ResourcesFeature;
