"use client";
import React, { useState } from "react";
import { AppModal } from "../reusables/AppModal";

import Success from "./success";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const NumberVerification = ({ closeModal }: { closeModal: () => void }) => {
  const [verify, setVerify] = useState(false);

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
              <div className="space-y-[27.07px]">
                <div className="flex items-center justify-center font-sans gap-[20.63px]">
                  <InputOTP maxLength={4}>
                    <InputOTPGroup className="gap-[20.63px]">
                      {Array(4)
                        .fill("")
                        .map((_, index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className="size-[52px] rounded-[5.16px] border-[1.29px] text-neutral-950 font-semibold text-[20px] active:scale-105"
                          />
                        ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="flex justify-between items-center font-sans font-medium capitalize text-sm/[19.6px] px-9 sm:px-16 pt-3">
                  <span> resend code</span>
                  <span className="text-error-600">0:34</span>
                </p>
              </div>
            </>
          }
        />
      ) : (
        <Success
          title="OTP Verification Successful"
          description={"Your OTP has been Successful "}
          icon="success-icon"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NumberVerification;
