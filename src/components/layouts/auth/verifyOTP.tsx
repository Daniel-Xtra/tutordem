import { Button as UIButton } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";

const VerifyOTPComponent = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const otpInputs = Array(4).fill("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("the submitted otp", otp);
    const registrant = localStorage.getItem("registrant");
    if (registrant === "tutor") {
      return router.push("/tutor/signup/get-started");
    }
    router.push("/newpassword/new");
  };

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  return (
    <section className="flex flex-1 bg-white lg:bg-neutral-100 min-h-screen">
      <main className="w-full flex items-start lg:items-center justify-center mt-28 mb-9">
        <div className="w-full flex items-start lg:items-center justify-center">
          <div className="w-full">
            <div className="flex flex-1 justify-center px-4">
              <div className="bg-white rounded-[20px] w-full max-w-[616px]">
                <div className="text-neutral-950 text-start py-10 lg:px-[32px] bg-neutral-25 rounded-tr-[20px] rounded-tl-[20px] flex flex-col justify-center md:text-center">
                  <span className="text-2xl md:text-3xl font-semibold  tracking-[-2px]">
                    OTP Verification
                  </span>
                  <p className="font-medium text-xs md:text-sm mt-2">
                    Please enter the OTP sent to <br />
                    <span className="text-primary-500">ebenezer@email.com</span>
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-4 py-10 flex flex-col rounded-bl-[20px] rounded-br-[20px]"
                >
                  <div className="flex flex-col items-center lg:pt-[20px] lg:px-[60px] justify-center space-y-4">
                    <div className="w-full max-w-[309px]">
                      <InputOTP maxLength={4} onChange={handleChange}>
                        <InputOTPGroup className="gap-[20.63px]">
                          {otpInputs.map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="w-[62px] h-[62px] rounded-[5.16px] border-[1.29px] text-black text-3xl font-bold active:scale-10 focus-visible:ring-0 focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 resize-none"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-[309px] font-medium text-neutral-950 text-xs pb-10">
                      <span>Resend code</span>
                      <span className="text-error-600">0:59</span>
                    </div>
                  </div>

                  <div className="bg-white mt-8 flex items-center justify-center px-6 lg:border-t-[0.5px] lg:border-t-neutral-200 h-[120px] rounded-bl-[20px] rounded-br-[20px]">
                    <div className="hidden md:block ">
                      <UIButton
                        type="submit"
                        className="w-full md:w-[416px] mt-16 md:mb-8 flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700 h-[56px]"
                      >
                        Verify
                        <Image
                          src="/assets/icons/arrow-right-white.svg"
                          alt="icon"
                          width={20}
                          height={10}
                        />
                      </UIButton>
                    </div>
                    <div className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6">
                      <UIButton
                        type="submit"
                        className="w-full md:w-[416px] mt-16 md:mb-8 flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700 h-[56px]"
                      >
                        Verify
                        <Image
                          src="/assets/icons/arrow-right-white.svg"
                          alt="icon"
                          width={20}
                          height={10}
                        />
                      </UIButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default VerifyOTPComponent;
