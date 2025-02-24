/* eslint-disable @typescript-eslint/no-explicit-any */

import { Input } from "../ui/input";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const AppOtp = forwardRef(
  (
    {
      numberOfDigits,
    }: {
      numberOfDigits: number;
    },
    ref
  ) => {
    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));

    const otpBoxReference = useRef<any[]>([]);

    useImperativeHandle(ref, () => ({
      getOTP() {
        return otp.join("");
      },
    }));

    function handleChange(value: string, index: number) {
      const newArr = [...otp];
      newArr[index] = value;
      setOtp(newArr);

      if (value && index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    }

    function handleBackspaceAndEnter(e: any, index: number) {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        otpBoxReference.current[index - 1].focus();
      }
      if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    }

    // function handleCalLength() {
    //   return otp.join("").toString().length;
    // }

    return (
      <>
        <div className="flex items-center justify-center font-sans gap-[20.63px]">
          {otp.map((digit, index) => (
            <Input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference: any) =>
                (otpBoxReference.current[index] = reference)
              }
              className="size-[52px] text-black p-3 text-center rounded-[5.16px] block bg-white border-[1.9px] focus:border-primary-500 appearance-none"
            />
          ))}
        </div>
        <p className="flex justify-between items-center font-sans font-medium capitalize text-sm/[19.6px] px-9 sm:px-16 pt-3">
          <span> resend code</span>
          <span className="text-error-600">0:34</span>
        </p>
      </>
    );
  }
);

AppOtp.displayName = "AppOtp";

export default AppOtp;
