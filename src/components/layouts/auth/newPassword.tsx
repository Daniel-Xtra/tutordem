
'use client';
import React, { useState } from "react";
import Button from "@/components/reusables/Button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import AppInput from "@/components/reusables/AppInput";

const SetNewPasswordComponent = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const svgIcon = ({ icon }: { icon: string }) => {
        return <Image src={icon} alt="icon" width={24} height={24} />
    }
    

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const type = localStorage.getItem('type');
        if (type === 'new-user') {
            return router.push('/parent/addward')
        }
        router.push('/success');
    }


    const ActionBtn = ({ className }: { className: string; }) => {
        return (
            <div className={`${className} mx-auto`}>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)} className="w-full md:w-[556px] mt-16 md:mb-8" color="main" size="md" label="Continue" icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })} />
            </div>
        )
    }
    return (
        <div className="lg:min-h-[calc(100vh-88px)] flex items-start lg:items-center justify-center bg-neutral-100 overflow-hidden font-sans">
            <div className="bg-white rounded-[20px] w-full max-w-[616px]">
                <div className="text-start py-10 px-4 lg:px-[32px] bg-neutral-25 rounded-tr-[20px] rounded-tl-[20px]">
                    <span className="text-2xl md:text-3xl mb-4 font-semibold text-neutral-950 mt-2 tracking-tighter">
                        Enter new password
                    </span>
                    <p className="font-normal text-xs md:text-sm mt-2">Please create a new unique password</p>
                </div>

                <form action="" className="mt-4 py-10 flex flex-col ">
                    <div className="px-4 lg:px-[32px]">
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
                                <span>{ svgIcon({ icon: "/assets/shield-check.svg" }) }</span>
                                <span className="mt-1">8 Characters</span>
                            </div>
                            <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                                <span>
                                    <span>{ svgIcon({ icon: "/assets/shield-check.svg" }) }</span>
                                </span>
                                <span className="mt-1">Numbers</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                            <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                                <span>{ svgIcon({ icon: "/assets/shield-check.svg" }) }</span>
                                <span className="mt-1">One special character</span>
                            </div>
                            <div className="flex items-start justify-start space-x-2 mt-2 text-[11px] font-normal text-success-800">
                                <span>
                                    <span>{ svgIcon({ icon: "/assets/shield-check.svg" }) }</span>
                                </span>
                                <span className="mt-1">One uppercase</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 px-4 lg:px-[32px]">
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
                        <ActionBtn className="hidden md:block" />
                        <ActionBtn className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SetNewPasswordComponent;