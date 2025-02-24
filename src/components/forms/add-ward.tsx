/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Check } from "lucide-react";
import AppInput from "../reusables/AppInput";
import PhoneNumberInput from "../reusables/PhoneNumberInput";
const AddWardForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedCountryCode, setSelectedCountryCode] = useState(0);
    const [selected, setSelected] = useState("male");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    const [access, setAccess] = useState(false);
    const countryCode = [
        { code: '+234', name: 'Nigeria', flag: '/assets/images/nigeria.png' },
    ];
    const [students, setStudents] = useState([
        { id: 1, name: "John Doe", shortName: "J", email: "qBp8o@example.com" },
    ]);

    const onSubmit = (data: any) => {
        console.log(data);
        setStudents([
            ...students,
            {
                id: students.length + 1,
                name: 'Akoke Anto',
                shortName: 'A',
                email: 'antoakoke@gmail.com',
            },
        ])
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 font-sans">
                {/* Form fields go here */}
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">Gender</span>
                    {["Male", "Female"].map((gender) => (
                        <div key={gender} className="flex items-center space-x-3">
                            <label
                                className={`flex items-center justify-center cursor-pointer rounded-[12px] h-[36px] w-[36px] border ${
                                selected === gender ? "bg-primary-25" : ""
                                } transition-all`}
                            >
                                <input
                                type="checkbox"
                                checked={selected === gender}
                                onChange={() => setSelected(gender)}
                                className="hidden"
                                />
                                <div
                                className={`w-[16px] h-[16px] flex items-center justify-center rounded-md border ${
                                    selected === gender
                                    ? "border-primary-500 bg-white"
                                    : "border-black-50 bg-white"
                                }`}
                                >
                                {selected === gender && <Check className="w-3 h-3" />}
                                </div>
                            </label>
                            <span className="text-[16px] text-neutral-950 font-semibold">
                                {gender}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Add more form fields here */}
                <div className="space-y-3">
                    <AppInput
                        label="Student's First Name"
                        type="text"
                        placeholder="Akin"
                        className="mt-2"
                        onChange={(value) => setFirstName(value)}
                        value={firstName}
                    />
                </div>
                <div className="space-y-3">
                    <AppInput
                        label="Student's Last Name"
                        type="text"
                        placeholder="Ebenezer"
                        className="mt-2"
                        onChange={(value) => setLastName(value)}
                        value={lastName}
                    />
                </div>
                <div className="space-y-3">
                    <AppInput
                        label="Email Address"
                        type="text"
                        placeholder="Ebenezer@test.com"
                        className="mt-2"
                        onChange={(value) => setEmail(value)}
                        value={email}
                    />
                </div>
                <div className="space-y-3">
                    <AppInput
                        label="Date of Birth"
                        type="date"
                        placeholder="01-03-2024"
                        className="mt-2"
                        onChange={(value) => setDob(value)}
                        value={dob}
                    />
                </div>
                <div className="space-y-3">
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
                <div className="mt-4">
                    <span className="text-gray-500">Grant student access to dashboard</span>
                    <div className="flex items-center space-x-4 mt-4">
                        {["Yes", "No"].map((accessName) => (
                        <div key={accessName} className="flex items-center space-x-3">
                            <label
                            className={`flex items-center justify-center cursor-pointer rounded-[12px] h-[36px] w-[36px] border ${
                                access ? "bg-primary-25" : ""
                            } transition-all`}
                            >
                            <input
                                type="checkbox"
                                checked={access}
                                onChange={() => setAccess(!accessName)}
                                className="hidden"
                            />
                            <div
                                className={`w-[16px] h-[16px] flex items-center justify-center rounded-md border ${
                                accessName
                                    ? "border-primary-500 bg-white"
                                    : "border-black-50 bg-white"
                                }`}
                            >
                                {accessName && <Check className="w-3 h-3" />}
                            </div>
                            </label>
                            <span className="text-[16px] text-neutral-950 font-semibold">
                            {accessName}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddWardForm;