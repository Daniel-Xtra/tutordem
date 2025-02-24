"use client";

import FundWallet from "@/components/modals/fund-wallet";
import TableEmptyState from "@/components/reusables/TableEmptyState";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return (
    <Image
      src={`/assets/icons/${icon}.png`}
      alt="icon"
      width={size}
      height={size}
    />
  );
}

const PaymentFeature = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="py-8 font-sans flex flex-wrap gap-5 items-center justify-between border-b-[0.5px] border-b-neutral-200 mx-5 xl:mx-[136px]">
        <div>
          <h2 className="font-semibold text-lg/[25.2px] capitalize text-neutral-950">
            wallet
          </h2>
          <p className="font-normal text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>

        <div></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 py-8 font-sans px-5 xl:px-[136px]">
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-primary-500 capitalize flex justify-between">
            wallet balance
            <span>{svgIcon({ icon: "info-circle", size: 18 })}</span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">0</p>
        </div>
        <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
          <p className="font-normal text-sm/[19.6px] text-primary-500 capitalize flex justify-between items-baseline">
            amount paid
            <span>{svgIcon({ icon: "info-circle", size: 18 })}</span>
          </p>
          <p className="font-semibold text-2xl/[33.6px] text-primary-950">0</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="col-span-1 border-[0.5px] bg-primary-50 border-neutral-200 rounded-[8px] p-6 flex items-center justify-between">
              <p className="font-semibold text-2xl/[33.6px] text-primary-950">
                Fund Wallet
              </p>
              <span className="">
                {svgIcon({ icon: "add-filled", size: 32 })}
              </span>
            </div>
          </DialogTrigger>
          <FundWallet closeModal={() => setOpen(false)} />
        </Dialog>
      </div>
      <TableEmptyState title="transactions">
        <div className="justify-self-center flex flex-col  items-center justify-center mt-16 ">
          {svgIcon({ icon: "empty-state", size: 68 })}
          <p className="font-semibold text-base/[22.4px] text-neutral-950">
            No records
          </p>
          <p className="font-normal text-neutral-500 text-xs/[16.8px]">
            You have no records at the moment
          </p>
        </div>
        <div className="py-5"></div>
      </TableEmptyState>
    </>
  );
};

export default PaymentFeature;
