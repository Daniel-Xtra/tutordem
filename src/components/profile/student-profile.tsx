"use client";

import { Badge } from "@/components/ui/badge";
import Icon from "../reusables/AppIcon";

const StudentProfile = () => {
  return (
    <div className="md:pb-4">
      <div className="bg-neutral-950 min-h-[161px] py-6 lg:py-0 px-5 xl:px-[136px] gap-5  font-sans flex flex-wrap justify-between items-center">
        <div className="text-white font-normal text-[20px] md:text-[28px] tracking-tight flex items-center justify-between w-full lg:w-max gap-x-4 ">
          <h1>
            <span className="font-semibold ">Ebenezer</span> Akin
          </h1>
          <Badge className="hidden lg:block bg-primary-50 py-3 px-4 font-medium text-xs text-neutral-950">
            2 new notifications
          </Badge>

          <div className="h-10 w-10 flex justify-center items-center rounded-full lg:hidden bg-white">
            <Icon icon="notification-colored" width={16} height={16} />
          </div>
        </div>

        <div className="bg-hotShot-500 rounded-[8px] p-4 gap-5 flex items-center justify-between w-full lg:w-max">
          <div className="space-y-1 flex flex-col items-center w-[88px] h-[67px]">
            <Icon icon="star-points" width={20} height={20} />
            <span className="font-medium text-xs text-white capitalize">
              points
            </span>
            <span className="font-bold text-base text-white">0</span>
          </div>
          <Icon icon="student-divider" width={1} height={69} />

          <div className="space-y-1 flex flex-col items-center w-[88px] h-[67px]">
            <Icon icon="leaderboard" width={20} height={20} />
            <span className="font-medium text-xs text-white capitalize">
              leaderboards
            </span>
            <span className="font-bold text-base text-white">#1,340</span>
          </div>

          <Icon icon="student-divider" width={1} height={69} />

          <div className="space-y-1 flex flex-col items-center w-[88px] h-[67px]">
            <Icon icon="flag-white" width={20} height={20} />
            <span className="font-medium text-xs text-white capitalize">
              Quiz passed
            </span>
            <span className="font-bold text-base text-white">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
