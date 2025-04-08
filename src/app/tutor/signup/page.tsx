/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import AppInput from "@/components/reusables/AppInput";
import { useForm } from 'react-hook-form';
import PhoneNumberInput from "@/components/reusables/PhoneNumberInput";
import FormActionBtn from "@/components/reusables/FormActionBtn";
import { useRouter } from "next/navigation";

const TutorSignUpPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [firstName ,setFirstName] = useState("");
    const [lastName ,setLastName] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState("");

    const countryCode = [
        { code: '+234', name: 'Nigeria', flag: '/assets/images/nigeria.png' },
    ];
    

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('some thing');
        localStorage.setItem('registrant', 'tutor');
        router.push('/verify-otp');
    }


    const onSubmit = (data: any) => {
        console.log(data);
        data.phoneNumber = `+234${selectedCountryCode}${phoneNumber}`;
        localStorage.setItem('type', 'tutor');
    };
    return (
        <div className="">
            <span className="text-2xl lg:text-3xl font-semibold text-neutral-950 tracking-[-2px]">
                Become a tutor
            </span>
            <p className="font-normal text-xs lg:text-sm">Improve your child&rsquo;s grades and confidence. <br />
            Sign up your wards. </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col mx-auto">
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
                        label="First Name"
                        type="text"
                        placeholder="Akin"
                        className="mt-2"
                        onChange={(value) => setFirstName(value)} 
                        value={firstName}
                    />
                </div>
                <div className="mt-6">
                    <AppInput
                        label="Last Name"
                        type="text"
                        placeholder="Ebenezer"
                        className="mt-2"
                        onChange={(value) => setLastName(value)} 
                        value={lastName}
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

                <FormActionBtn actionText="Already have an account? " url="/" clickableText="Log In" className="mt-6 hidden md:block" onSubmit={handleClick} />
                <FormActionBtn actionText="Already have an account? " url="/" clickableText="Log In" className="mt-6 block md:hidden px-4 absolute bottom-0 left-0 w-full pb-6" onSubmit={handleClick}/>
                {/* <FormActionBtn actionText="Don&#39;t have an account? " url="/signup" clickableText="Sign Up" className="mt-6 hidden md:block" onSubmit={handleClick} />
                <FormActionBtn actionText="Don&#39;t have an account? " url="/signup" clickableText="Sign Up" className="mt-6 block md:hidden px-4 absolute bottom-0 left-0 w-full pb-6" onSubmit={handleClick}/> */}
            </form>
        </div>
    );
}

export default TutorSignUpPage;