"use client";

import FundWallet from "@/components/modals/fund-wallet";
import Icon from "@/components/reusables/AppIcon";
import EmptyState from "@/components/reusables/EmptyState";
import AppTable from "@/components/reusables/AppTable";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
    <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-primary-500 capitalize flex justify-between items-baseline">
      {title}
      <span>
        <Icon icon="info-circle" width={18} height={18} />
      </span>
    </p>
    <p className="font-semibold text-base/[22.4px] md:text-2xl/[33.6px] text-primary-950">
      {value}
    </p>
  </div>
);

const tutorData = [
  { title: "Total Revenue", value: "N200,000" },
  { title: "Pending Settlement", value: "N200,000" },
  { title: "Total Amount Withdrawn", value: "N200,000" },
];

const parentData = [
  { title: "Wallet Balance", value: "0" },
  { title: "Amount Paid", value: "0" },
];

const PaymentFeature = () => {
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div className="sapce-y-1">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            wallet
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        {user.membershipType === "student" && (
          <div className="flex items-center space-x-4 space-y-1">
            <div>
              <span className="font-normal font-sans text-sm/[16.8px] text-neutral-600">
                Sort by
              </span>
            </div>
            <div>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="This Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this week">This Week</SelectItem>
                  <SelectItem value="this month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 font-sans px-5 xl:px-[136px]">
        {user?.membershipType === "tutor" &&
          tutorData.map((item, index) => <InfoCard key={index} {...item} />)}

        {user?.membershipType !== "tutor" && (
          <>
            {parentData.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="cursor-pointer" asChild>
                <div className="col-span-1 border-[0.5px] bg-primary-50 border-neutral-200 rounded-[8px] p-6 flex items-center justify-between">
                  <p className="font-semibold text-base/[22.4px] md:text-2xl/[33.6px] text-primary-950">
                    Fund Wallet
                  </p>
                  <span>
                    <Icon
                      icon="add-filled"
                      height={32}
                      width={32}
                      className="size-6 md:size-8"
                    />
                  </span>
                </div>
              </DialogTrigger>
              <FundWallet closeModal={() => setOpen(false)} />
            </Dialog>
          </>
        )}
      </div>
      <AppTable title="transactions" border={true}>
        <EmptyState
          title="No records"
          message="You have no records at the moment"
          icon="empty-state"
          width={68}
          height={68}
        />
      </AppTable>
    </>
  );
};

export default PaymentFeature;
