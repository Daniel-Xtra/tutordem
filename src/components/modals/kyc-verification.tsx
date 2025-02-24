"use client";
import React from "react";
import { AppModal } from "../reusables/AppModal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { PiCaretRightBold } from "react-icons/pi";
import { Button } from "../ui/button";
import NinVerification from "./nin-verification";
import BvnVerification from "./bvn-verification";
import ProofOfAddressVerification from "./proof-of-address-verification";

const KycVerification = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <AppModal
        title={"Complete your KYC"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Please complete the profile with the right details
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <>
            <div className=" space-y-5">
              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <div className="flex justify-between items-center rounded-sm">
                    <div className="space-y-1.5">
                      <p className="font-medium text-sm/[19.6px] text-neutral-800">
                        NIN Verification
                      </p>
                      <p className="font-normal text-xs/[16.8px] text-neutral-500">
                        Enter the details of your NIN
                      </p>
                    </div>

                    <PiCaretRightBold />
                  </div>
                </DialogTrigger>
                <NinVerification />
              </Dialog>

              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <div className="flex justify-between font-sans items-center rounded-sm">
                    <div className="space-y-1.5">
                      <p className="font-medium text-sm/[19.6px] text-neutral-800">
                        BVN Verification
                      </p>
                      <p className="font-normal text-xs/[16.8px] text-neutral-500">
                        Enter the details of your BVN
                      </p>
                    </div>

                    <PiCaretRightBold />
                  </div>
                </DialogTrigger>
                <BvnVerification />
              </Dialog>

              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <div className="flex justify-between items-center rounded-sm">
                    <div className="space-y-1.5">
                      <p className="font-medium text-sm/[19.6px] text-neutral-800">
                        Proof of address
                      </p>
                      <p className="font-normal text-xs/[16.8px] text-neutral-500">
                        Electricity, Water and Waste bill
                      </p>
                    </div>

                    <PiCaretRightBold />
                  </div>
                </DialogTrigger>
                <ProofOfAddressVerification />
              </Dialog>
            </div>
          </>
        }
        actions={
          <>
            <Button
              className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
              Submit
            </Button>
          </>
        }
      />
    </div>
  );
};

export default KycVerification;
