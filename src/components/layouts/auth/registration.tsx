/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AppInput from "@/components/reusables/AppInput";
import Image from "next/image";
import { useState } from "react";
import PhoneNumberInput from "@/components/reusables/PhoneNumberInput";

import { Checkbox } from "@/components/ui/checkbox";
import FormActionBtn from "@/components/reusables/FormActionBtn";
import AppSelect from "@/components/reusables/AppSelect";
const RegistrationComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedCountryCode, setSelectedCountryCode] = useState(0);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");

  const countryCode = [
    { code: "+234", name: "Nigeria", flag: "/assets/images/nigeria.png" },
  ];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem("type", "new-user");
    router.push("/newpassword/verify-otp");
  };
  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={24} height={24} />;
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="font-sans">
      <span className="text-2xl mt-4 lg:text-3xl font-semibold text-neutral-950 tracking-tighter">
        Create an account
      </span>
      <div className="space-y-4 mt-4">
        <p className="font-normal text-xs lg:text-sm">
          Improve your child&rsquo;s grades and confidence. Sign up your wards.
        </p>
      </div>
      <Tabs defaultValue="account" className="w-full mt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="account"
            className="
                        w-full
                        data-[state=active]:border-4
                        data-[state=active]:border-[1px]
                        data-[state=active]:border-primary-500
                        data-[state=active]:bg-primary-25
                        data-[state=active]:shadow-none
                        hover:bg-transparent
                        px-[16px]
                        py-[12px]
                        data-[state=active]:text-foreground
                        data-[state=active]:ring-4
                        data-[state=active]:font-semibold
                        ring-primary-25
                        ring-offset-0
                        inset-0
                        transition-all
                        duration-300
                    "
          >
            <span className="">As a parent</span>
            <span className="text-xs text-neutral-700 font-normal">
              Sign up your wards
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="
                        w-full
                        data-[state=active]:border-4
                        data-[state=active]:border-[1px]
                        data-[state=active]:border-primary-500
                        data-[state=active]:bg-primary-25
                        data-[state=active]:shadow-none
                        hover:bg-transparent
                        px-[16px]
                        py-[12px]
                        data-[state=active]:text-foreground
                        data-[state=active]:ring-4
                        data-[state=active]:font-semibold
                        ring-primary-25
                        ring-offset-0
                        inset-0
                        transition-all
                        duration-300
                    "
          >
            <span className="">As a student</span>
            <span className="text-xs text-neutral-700 font-normal">
              Sign Up
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col mx-auto"
          >
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
              />
            </div>
            <div className="">
              <AppSelect
                label="State"
                value={state}
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
            <div className="my-4 flex items-center space-x-2">
              <Checkbox
                id="terms"
                className="appearance-none checked:bg-primary-25 checked:border-primary-500 "
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-black-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept{" "}
                <span className="text-primary-500 font-bold">
                  terms and conditions
                </span>{" "}
                and{" "}
                <span className="text-primary-500 font-bold">
                  privay policy
                </span>
              </label>
            </div>
            <FormActionBtn
              actionText="Already have an account? "
              url="/"
              clickableText="Log In"
              className="mt-6 hidden md:block"
              onSubmit={handleClick}
            />
            <FormActionBtn
              actionText="Already have an account? "
              url="/"
              clickableText="Log In"
              className="mt-6 block md:hidden bottom-0 left-0 w-full pb-6"
              onSubmit={handleClick}
            />
          </form>
        </TabsContent>
        <TabsContent value="password">
          <form action="" className="mt-8 flex flex-col mx-auto">
            <FormActionBtn
              actionText="Already have an account? "
              url="/"
              clickableText="Log In"
              className="mt-6 hidden md:block"
              onSubmit={handleClick}
            />
            <FormActionBtn
              actionText="Already have an account? "
              url="/"
              clickableText="Log In"
              className="mt-6 block md:hidden bottom-0 left-0 w-full pb-6"
              onSubmit={handleClick}
            />
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegistrationComponent;
