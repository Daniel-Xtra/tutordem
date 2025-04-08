"use client";
import React, { useState } from "react";
import { Button as UIButton } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppInput from "@/components/reusables/AppInput";

const SetNewPasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={16} height={16} />;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      password,
      confirmPassword,
    };
    console.log(payload);
    const registrant = localStorage.getItem("registrant");
    if (registrant === "parent") {
      return router.push("/signup/addward");
    }
    router.push("/success");
  };

  return (
    <section className="flex flex-1 bg-white lg:bg-neutral-100 min-h-screen">
      <main className="w-full flex items-start lg:items-center justify-center mt-28 mb-9">
        <div className="w-full flex items-start lg:items-center justify-center">
          <div className="w-full">
            <div className="flex flex-1 justify-center px-4">
              <div className="bg-white rounded-[20px] w-full max-w-[616px]">
                <div className="text-start py-10 lg:px-[32px] bg-neutral-25 rounded-tr-[20px] rounded-tl-[20px]">
                  <span className="text-2xl md:text-3xl mb-4 font-semibold text-neutral-950 mt-2 tracking-tighter">
                    Enter new password
                  </span>
                  <p className="font-normal text-xs md:text-sm mt-2">
                    Please create a new unique password
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-4 py-10 flex flex-col "
                >
                  <div className="lg:px-[32px]">
                    <AppInput
                      label="Password"
                      type="password"
                      placeholder="Password@@1"
                      showPasswordIcon={true}
                      iconText="Hide"
                      value={password}
                      className="mt-2"
                      onChange={(value) => setPassword(value)}
                    />

                    <div className="flex flex-row items-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                      <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                        <span>
                          {svgIcon({ icon: "/assets/shield-check.svg" })}
                        </span>
                        <span className="mt-1">8 Characters</span>
                      </div>
                      <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                        <span>
                          <span>
                            {svgIcon({ icon: "/assets/shield-check.svg" })}
                          </span>
                        </span>
                        <span className="mt-1">Numbers</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                      <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                        <span>
                          {svgIcon({ icon: "/assets/shield-check.svg" })}
                        </span>
                        <span className="mt-1">One special character</span>
                      </div>
                      <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                        <span>
                          <span>
                            {svgIcon({ icon: "/assets/shield-check.svg" })}
                          </span>
                        </span>
                        <span className="mt-1">One uppercase</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 lg:px-[32px]">
                    <AppInput
                      showPasswordIcon={true}
                      iconText="Show"
                      label="Confirm password"
                      type="password"
                      placeholder="Password@@01"
                      className="mt-2"
                      value={confirmPassword}
                      onChange={(value) => setConfirmPassword(value)}
                    />
                  </div>
                  <div className="bg-white mt-8  flex items-center justify-center px-6 border-t-[0.5px] border-t-neutral-200 h-[120px] rounded-b-[20px]">
                    {/* <ActionBtn className="hidden md:block" />
                                <ActionBtn className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6" /> */}

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

export default SetNewPasswordComponent;
