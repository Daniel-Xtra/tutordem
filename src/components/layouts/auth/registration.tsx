/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AppInput from "@/components/reusables/AppInput";
import Image from "next/image";
import { useState } from "react";
import PhoneNumberInput from "@/components/reusables/PhoneNumberInput";

import { Checkbox } from "@/components/ui/checkbox";
import AppSelect from "@/components/reusables/AppSelect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Icon from "@/components/reusables/AppIcon";
import { cn } from "@/lib/utils";

const RegistrationComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const initialTab = "account";
  const [selectedCountryCode, setSelectedCountryCode] = useState(0);
  const [activeTab, setActiveTab] = useState(initialTab);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const countryCode = [
    { code: "+234", name: "Nigeria", flag: "/assets/images/nigeria.png" },
  ];

  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={24} height={24} />;
  };
  const onSubmit = (data: any) => {
    data.phoneNumber = `+234${selectedCountryCode}${phoneNumber}`;
    console.log(data);
    if (activeTab === "account") {
      localStorage.setItem("registrant", "parent");
    } else {
      localStorage.setItem("registrant", "student");
    }
    router.push("/verify-otp");
  };

  const updateTabs = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="font-sans">
      <span className="text-2xl lg:text-3xl font-semibold text-neutral-950 tracking-tighter">
        Create an account
      </span>

      <p className="font-normal text-xs lg:text-sm py-4">
        Improve your child&rsquo;s grades and confidence. Sign up your wards.
      </p>

      <div className="flex items-center gap-3 text-neutral-950 cursor-pointer">
        <div
          onClick={() => updateTabs("account")}
          className={cn(
            "border py-3 px-4 rounded w-full relative overflow-hidden",
            activeTab === "account"
              ? "border-primary-500 bg-primary-25 ring-offset-[3px] ring-1 ring-transparent  ring-offset-primary-100"
              : "bg-white border-neutral-100"
          )}
        >
          <span
            className={cn(
              "block text-sm font-normal",
              activeTab === "account" && "font-semibold "
            )}
          >
            As a parent
          </span>
          <span className="text-xs text-neutral-700 font-normal block">
            Sign up your wards
          </span>
          {activeTab === "account" && (
            <Icon
              className="absolute bottom-0 right-0"
              height={50}
              width={50}
              icon={"tab-active"}
            />
          )}
        </div>
        <div
          onClick={() => updateTabs("student")}
          className={cn(
            "border py-3 px-4 rounded w-full relative overflow-hidden",
            activeTab === "student"
              ? "border-primary-500 bg-primary-25 ring-offset-[3px] ring-1 ring-transparent  ring-offset-primary-100"
              : "bg-white border-neutral-100"
          )}
        >
          <span
            className={cn(
              "block text-sm font-normal",
              activeTab === "student" && "font-semibold "
            )}
          >
            As a Student
          </span>
          <span className="text-xs text-neutral-700 font-normal block">
            Sign up your wards
          </span>
          {activeTab === "student" && (
            <Icon
              className="absolute bottom-0 right-0"
              height={50}
              width={50}
              icon={"tab-active"}
            />
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
        <div>
          <AppInput
            label="Email address"
            type="email"
            placeholder="ebenezer@test.com"
            className="mt-2"
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div>
          <AppInput
            label="First name"
            type="text"
            placeholder="Akin"
            className="mt-2"
            value={firstName}
            onChange={(value) => setFirstName(value)}
          />
        </div>
        <div>
          <AppInput
            label="Last name"
            type="text"
            placeholder="Ebenezer"
            className="mt-2"
            value={lastName}
            onChange={(value) => setLastName(value)}
          />
        </div>
        <div>
          <PhoneNumberInput
            form={{ register, formState: { errors } }}
            formName="phoneNumber"
            disable={false}
            countryCode={countryCode}
            selectedCountryCode={selectedCountryCode}
            onCountryCodeChange={setSelectedCountryCode}
            label="Phone number"
            onChange={setPhoneNumber}
          />
        </div>
        <div className="">
          <AppSelect
            label="State"
            value={state}
            className="mt-2"
            options={[
              { label: "Lagos", value: "lagos" },
              { label: "Kaduna", value: "kaduna" },
            ]}
            placeholder="Lagos state"
            onChange={(value) => setState(value)}
          />
        </div>
        <div>
          <AppInput
            label="Address"
            type="text"
            placeholder="12, Botanical garden, ebute-meta"
            className="mt-2"
            value={address}
            onChange={(value) => setAddress(value)}
            showPasswordIcon={true}
            icon={svgIcon({ icon: "/assets/images/map-point.png" })}
          />
        </div>

        <div className="my-4 flex items-center gap-4">
          <Checkbox
            id="terms"
            className="aspect-square size-4 rounded border border-black-200 text-primary-500 ring-1 ring-offset-[6px] ring-[#EDEDF3] outline-none focus:ring-offset-primary-25 focus:outline-none focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 "
          />
          <label
            htmlFor="terms"
            className="text-sm  font-medium leading-none text-black-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept
            <span className="text-primary-500 px-1 font-bold">
              terms and conditions
            </span>
            and
            <span className="text-primary-500 pl-1 font-bold">
              privay policy
            </span>
          </label>
        </div>
        <div className="w-full">
          <Button
            className="flex items-center justify-center w-full h-[56px] mt-12 bg-primary-500 hover:bg-primary-700 text-white"
            size="lg"
            type="submit"
          >
            Get Started
            <Image
              src="/assets/icons/arrow-right-white.svg"
              width={20}
              height={10}
              alt="arrow-right"
            />
          </Button>
          <div className="w-full text-center pt-3">
            <p className="font-medium text-base text-[#768796]">
              Already have an account?
              <Link className="text-neutral-950 pl-1" href="/">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationComponent;
