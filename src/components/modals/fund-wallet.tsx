"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import ColumnBox from "../reusables/ColumnBox";
import { cn } from "@/lib/utils";
import Icon from "../reusables/AppIcon";

interface Card {
  name: string;
}

const cards: Card[] = [
  { name: "visa" },
  { name: "mastercard" },
  { name: "paypal" },
  { name: "applepay" },
  { name: "googlepay" },
];

const FundWallet = ({ closeModal }: { closeModal: () => void }) => {
  const [option, setOption] = useState("");
  return (
    <div>
      <AppModal
        title={"Fund wallet"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Select one the options to fund your wallet
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <>
            <ColumnBox
              className={cn(
                "flex flex-col gap-y-2 text-neutral-950 cursor-pointer",
                option === "card" &&
                  "bg-primary-25 border-2 border-primary-500 ring-offset-4 ring-1 ring-transparent ring-offset-primary-100"
              )}
              clickFn={() => setOption("card")}
            >
              <span className="font-semibold text-sm/[19.6px] md:text-base/[22.4px] ">
                Pay Now Via Credit Card
              </span>
              <span className="font-normal text-xs/[16.8px]">
                Pay instantly and securely with your credit/debit card
              </span>
            </ColumnBox>

            <ColumnBox className="bg-neutral-25 border-[0.43px] border-neutral-200 !py-2 !px-8 flex gap-3 mt-2 mb-6">
              {cards.map((card) => (
                <li key={card.name} className="list-none">
                  <Icon icon={card.name} width={35.98} height={24.84} />
                </li>
              ))}
            </ColumnBox>

            <ColumnBox
              className={cn(
                "flex flex-col gap-y-2 text-neutral-950 cursor-pointer",
                option === "transfer" &&
                  "bg-primary-25 border-2 border-primary-500 ring-offset-4 ring-1 ring-transparent ring-offset-primary-100"
              )}
              clickFn={() => setOption("transfer")}
            >
              <span className="font-semibold text-sm/[19.6px] md:text-base/[22.4px]">
                Pay Now Via Bank Transfer
              </span>
              <span className="font-normal text-xs/[16.8px]">
                Pay instantly and securely with your credit/debit card
              </span>
            </ColumnBox>
          </>
        }
        actions={
          <>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
            >
              Next
            </Button>
          </>
        }
      />
    </div>
  );
};

export default FundWallet;
