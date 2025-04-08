"use client";
import AppInput from "@/components/reusables/AppInput";
import { useRouter } from "next/navigation";
import FormActionBtn from "@/components/reusables/FormActionBtn";
import { useState } from "react";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem("type", "old-user");
    router.push("/verify-otp");
  };

  return (
    <div className="px-4">
      <span className="text-2xl lg:text-3xl font-semibold text-neutral-950 tracking-[-2px]">
        Forgot Password
      </span>
      <p className="font-normal text-xs lg:text-sm mt-2">
        Enter your registered email address to receive
        <span className="text-neutral-950">OTP</span>
      </p>

      <form className="mt-8 flex flex-col mx-auto">
        <div className="mb-8">
          <AppInput
            label="Email address"
            type="email"
            placeholder="Ebenezer@test.com"
            className="mt-2"
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </div>
        <FormActionBtn
          actionText="Already have an account? "
          url="/"
          clickableText="Log in"
          className="mt-6 hidden md:block"
          onSubmit={handleClick}
        />
        <FormActionBtn
          actionText="Already have an account? "
          url="/"
          clickableText="Log in"
          className="py-10 block md:hidden absolute bottom-0 left-0 w-full px-4 border-t-[0.5px] border-t-neutral-200"
          onSubmit={handleClick}
        />
      </form>
    </div>
  );
};

export default ForgotPasswordComponent;
