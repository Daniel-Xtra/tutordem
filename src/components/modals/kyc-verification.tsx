"use client";
import React from "react";
import { AppModal } from "../reusables/AppModal";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import NinVerification from "./nin-verification";
import BvnVerification from "./bvn-verification";
import ProofOfAddressVerification from "./proof-of-address-verification";
import AppDialogTrigger from "../reusables/AppDialogTrigger";

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
                <AppDialogTrigger
                  title="NIN Verification"
                  description="Enter the details of your NIN"
                />
                <NinVerification />
              </Dialog>

              <Dialog>
                <AppDialogTrigger
                  title="BVN Verification"
                  description="Enter the details of your BVN"
                />
                <BvnVerification />
              </Dialog>

              <Dialog>
                <AppDialogTrigger
                  title="Proof of address"
                  description="Electricity, Water and Waste bill"
                />
                <ProofOfAddressVerification />
              </Dialog>
            </div>
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
              Submit
            </Button>
          </>
        }
      />
    </div>
  );
};

export default KycVerification;
