"use client";
import { useState } from "react";
import AppInput from "@/components/reusables/AppInput";
import Link from "next/link";

import Image from "next/image";
import Button from "@/components/reusables/Button";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

const AppLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const loginHandler = useAuthStore((state) => state.loginHandler);

  const handleLogin = (membershipType: string) => {
    loginHandler({ isAuthenticated: true, membershipType: membershipType });
    router.push("/dashboard/overview");
  };

  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={24} height={24} />;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleLogin("parent");
  };

  const ActionBtn = ({ className }: { className: string }) => {
    return (
      <div className={`${className} mx-auto w-full`}>
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          className="w-full mt-5 mb-3"
          label="Continue"
          color="main"
          size="lg"
          icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })}
        />
        <div className="w-full flex items-center justify-center">
          <p className="font-medium text-base text-[#768796]">
            Don&#39;t have an account?
            <Link className="text-neutral-950" href="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <span className="text-2xl lg:text-3xl font-semibold text-neutral-950 tracking-[-2px]">
        Log into your account
      </span>
      <p className="font-normal text-xs lg:text-sm">
        You’ve been invited by your parent/guardian
      </p>
      <form action="" className="mt-8 flex flex-col mx-auto">
        <div>
          <AppInput
            label="Email address"
            type="email"
            placeholder="Ebenezer@test.com"
            className="mt-2"
            onChange={(value) => setEmail(value)}
            value={email}
          />
        </div>
        <div className="mt-6">
          <AppInput
            showPasswordIcon={true}
            iconText="Hide"
            label="Password"
            type="password"
            placeholder="Password@@01"
            className="mt-2"
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <div className="my-8 flex items-start justify-between">
          <div>
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                className="size-5 rounded-md border-gray-200 bg-white shadow-xs w-[16px] h-[16px] checked:border-1 checked:border-primary-500 checked:text-primary-500"
              />

              <span className="text-xs lg:text-sm font-semibold text-neutral-950">
                Keep me logged in
              </span>
            </label>
          </div>
          <div>
            <Link
              href="/forgotpassword"
              className="text-xs lg:text-base text-primary-500 font-normal underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <ActionBtn className="hidden md:block" />
        <ActionBtn className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6" />
      </form>
    </div>
  );
};

export default AppLogin;
