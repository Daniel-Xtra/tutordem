"use client";
import React, { useRef, useState } from "react";
import { AppModal } from "../reusables/AppModal";
import AppOtp from "../reusables/AppOtp";
import Success from "./success";

const NumberVerification = ({ closeModal }: { closeModal: () => void }) => {
  const [verify, setVerify] = useState(false);

  const otpRef = useRef(null);
  return (
    <div>
      {!verify ? (
        <AppModal
          title={"OTP Verification"}
          description={
            <>
              <span className="text-xs/[16.8px] font-sans font-normal text-neutral-600">
                Please enter the OTP sent to
              </span>
              <span className="text-primary-500 font-medium font-sans text-sm/[19.6px] block sm:inline-flex sm:pl-1">
                0801 234 5678
              </span>
            </>
          }
          buttonText="Verify"
          primaryFn={() => {
            setVerify(true);
          }}
          content={
            <>
              <AppOtp numberOfDigits={4} ref={otpRef} />
            </>
          }
        />
      ) : (
        <Success closeModal={closeModal} />
      )}
    </div>
  );
};

export default NumberVerification;
