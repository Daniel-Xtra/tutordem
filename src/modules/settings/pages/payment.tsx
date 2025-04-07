"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SettingsLayout from "../settingsLayout";

import { Badge } from "@/components/ui/badge";
import Icon from "@/components/reusables/AppIcon";

const Payment = () => {
  return (
    <>
      <SettingsLayout
        title="Withdrawal Bank Account(s)"
        description="These are accounts to receive your cash settlements"
      >
        <div className="border-[0.5px] border-neutral-200 py-4 px-6 rounded-[8px]">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-x-3">
              <Icon icon={"bank-icon"} width={24} height={24} />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm/[19.6px] text-neutral-900">
                  0123456789
                </span>
                <span className="font-normal text-sm/[19.6px] text-neutral-600">
                  Atasie Esther . GT Bank
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon={"info-circle"} height={18} width={18} />
              <Badge className="text-primary-500 font-bold text-[9px]/[12px] bg-primary-25 py-1 px-2">
                Weekly
              </Badge>
            </div>
          </div>
        </div>
      </SettingsLayout>

      <div className="flex flex-row items-center gap-3 sm:gap-4 rounded-md font-sans text-neutral-950 border border-neutral-200 p-6 sm:p-10 bg-neutral-50">
        <Button
          type="button"
          className="p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950 bg-transparent  transition"
          aria-label="Cancel changes"
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="p-5 rounded-sm h-14 w-full font-semibold text-sm/[19.6px] text-white bg-primary-500 hover:bg-primary-600 transition"
          aria-label="Save changes"
        >
          Save Changes
        </Button>
      </div>
    </>
  );
};

export default Payment;
