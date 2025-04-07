"use client";

import { Badge } from "@/components/ui/badge";
import Icon from "../reusables/AppIcon";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

interface Subject {
  name: string;
}

const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
  { name: "biology" },
  { name: "geography" },
  { name: "economics" },
  { name: "government" },
  { name: "history" },
];

const TutorProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="md:pb-4">
      <div className="bg-neutral-50 md:py-8 md:px-5 xl:px-[136px] border-b border-b-neutral-200 font-sans ">
        <div className="lg:border border-neutral-500 overflow-hidden lg:rounded-[8px]">
          <div className="bg-neutral-950 py-7 px-5 md:px-9 flex flex-col md:flex-row items-start gap-[35px]">
            <div className="flex flex-col lg:w-9/12 space-y-5">
              <div className="flex items-center gap-x-[102px]">
                <div className="block space-y-1.5">
                  <h1 className="text-white font-normal text-[20px]/[22.2px] md:text-[28px]/[31.08px] tracking-[-2px] inline-flex items-center gap-x-4">
                    <span className="font-semibold -me-2.5">Ebenezer</span>Akin
                  </h1>
                  <span className="font-normal text-xs/[16.8px] text-white block">
                    5 years of experience
                  </span>
                </div>
                <div className="flex items-center gap-1 font-normal text-sm/[19.6px] text-white">
                  <p className="flex items-center gap-[2px]">
                    0.0
                    <span>
                      <Icon icon="star" width={12} height={12} />
                    </span>
                  </p>
                  <span>(0)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-normal text-[11px]/[15.4px] text-neutral-400">
                  Subject of expertise
                </span>
                <div className="flex flex-wrap gap-1 5">
                  {subjects.map((subject) => (
                    <Badge
                      className="bg-neutral-700 rounded-full py-2 px-4 font-normal text-[11px]/[15.4px] text-white capitalize"
                      key={subject.name}
                    >
                      {subject.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {isCollapsed && (
              <section
                className="flex flex-col lg:w-3/12 space-y-[14px]"
                aria-hidden={!isCollapsed}
              >
                <div className="space-y-1.5">
                  <span className="font-normal text-[11px]/[15.4px] text-neutral-400">
                    About you and your approach
                  </span>
                  <div className="font-medium text-xs text-white">
                    I am a teacher with 5 years of experience with expertise in
                    communication.
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="font-normal text-[11px]/[15.4px] text-neutral-400">
                    Location
                  </span>
                  <div className="font-medium text-xs text-white">
                    Ikeja, Lagos, Nigeria
                  </div>
                </div>
              </section>
            )}
          </div>
          {isCollapsed && (
            <div className="bg-white md:rounded-b-[8px] px-6 grid grid-cols-12 md:divide-x-2">
              <div className="col-span-12 md:col-span-3 py-3 md:py-5 md:pl-5 flex flex-col gap-y-1.5">
                <span className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  Credential
                </span>
                <span className="font-semibold text-[11px]/[15.4px] text-neutral-950 ">
                  UNILAG, BSc. Mathematics
                </span>
              </div>
              <div className="col-span-12 md:col-span-2 py-3 md:py-5 md:pl-5 flex flex-col gap-y-1.5">
                <span className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  Teaches
                </span>
                <span className="font-semibold text-[11px]/[15.4px] text-neutral-950 ">
                  Grade 1-6
                </span>
              </div>
              <div className="col-span-12 md:col-span-2 py-3 md:py-5 md:pl-5 flex flex-col gap-y-1.5">
                <span className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  Hourly rate
                </span>
                <span className="font-semibold text-[11px]/[15.4px] text-neutral-950 ">
                  N3,500
                </span>
              </div>
              <div className="col-span-12 md:col-span-5 py-3 md:py-5 md:pl-5 flex flex-col gap-y-1.5">
                <span className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  Available days & Time
                </span>
                <span className="font-semibold text-[11px]/[15.4px] text-neutral-950 ">
                  Mondays 3pm, Thursdays 12pm, Fridays 4pm
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Button
        type="button"
        className="h-[57px] px-6 w-full bg-primary-25 rounded-none font-medium text-xs/[16.8px] text-primary-500 md:hidden flex justify-between items-center"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={isCollapsed}
      >
        <span>{isCollapsed ? "Collapse profile" : "View full profile"}</span>
        <span className="flex items-center">
          {isCollapsed ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </span>
      </Button>
    </div>
  );
};

export default TutorProfile;
