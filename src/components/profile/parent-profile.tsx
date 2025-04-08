"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "../reusables/AppIcon";

const ParentProfile = () => {
  return (
    <div className="md:pb-4">
      <div className="bg-neutral-50 md:py-8 md:px-5 xl:px-[136px] border-b border-b-neutral-200 font-sans">
        <div className="bg-neutral-950 md:rounded-[8px] p-6 md:p-10 flex justify-between items-center">
          <h1 className="text-white font-normal text-[20px] md:text-[28px] tracking-tight inline-flex items-center gap-x-4">
            <span className="font-semibold -me-2.5">Ebenezer</span>Akin
            <Badge className="hidden md:block bg-primary-50 py-3 px-4 font-medium text-xs text-neutral-950">
              2 new notifications
            </Badge>
            <div className="h-10 w-10 flex justify-center items-center rounded-full md:hidden bg-white">
              <Icon icon="notification-colored" width={16} height={16} />
            </div>
          </h1>
          <Button type="button" className="inline-flex items-center gap-x-3">
            <Icon
              className="w-6 h-6 md:w-10 md:h-10"
              icon="add"
              width={40}
              height={40}
            />
            <p className="font-medium text-white text-sm">
              <>
                Add <span className="hidden md:inline-flex">another</span> child
              </>
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParentProfile;
