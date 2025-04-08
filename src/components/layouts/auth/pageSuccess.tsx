"use client";
import React from "react";
import { Button as UIButton } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SuccessPageComponent = () => {
  const router = useRouter();
  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={72} height={72} />;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <section className="flex flex-1 bg-white lg:bg-neutral-100 min-h-screen">
      <main className="w-full flex items-start lg:items-center justify-center lg:mt-[88px]">
        <div className="w-full flex min-h-[calc(100vh-88px)] items-center justify-center">
          <div className="w-full">
            <div className="flex flex-1 justify-center px-4">
              <div className="bg-white rounded-[20px] w-full max-w-[616px]">
                <div className="px-6 lg:px-[60px] pt-10 flex flex-col justify-center bg-neutral-25 border-b-[0.5px] border-b-neutral-200 rounded-tr-[20px] rounded-tl-[20px]">
                  <div className="flex flex-col items-center gap-y-2">
                    {svgIcon({ icon: "/assets/check.svg" })}
                    <span className="font-semibold text-lg/[27px] md:text-2xl tracking-[-2px] text-neutral-950 mb-4 mt-2">
                      Profile Successfully Created
                    </span>
                    <span className="font-normal text-neutral-600 text-xs/[16.8px] md:text-sm text-center pb-6">
                      Your profile has been created, you can now proceed to
                      login
                    </span>
                  </div>
                </div>

                <div className="bg-white flex items-center justify-center px-6  h-[120px] rounded-bl-[20px] rounded-br-[20px]">
                  <UIButton
                    onClick={handleClick}
                    className="w-full md:w-[416px] h-[56px] flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700"
                    size="lg"
                    type="submit"
                  >
                    Login to your account
                    <Image
                      src="/assets/icons/arrow-right-white.svg"
                      width={20}
                      height={10}
                      alt="arrow-right"
                    />
                  </UIButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default SuccessPageComponent;
