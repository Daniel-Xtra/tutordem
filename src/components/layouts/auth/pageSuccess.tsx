/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from "react";
import Button from "@/components/reusables/Button";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const SuccessPageComponent = () => {
    const router = useRouter();
    const svgIcon = ({ icon }: { icon: string }) => {
        return <Image src={icon} alt="icon" width={72} height={72} />
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/');
    }

    const ActionBtn = ({ className }: { className: string; }) => {
        return (
            <div className={`${className} w-full flex justify-center`}>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)} className="w-full md:w-[516px]" color="main" size="md" label="Login to your account" icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })} />
            </div>
        )
    }
    return (
        <div className="h-screen w-full flex items-center justify-center p-0 bg-neutral-100 shadow-lg overflow-hidden">
            <div className="w-full flex items-center justify-center font-sans">
                <div className="pt-10 bg-neutral-25 rounded-[20px] w-full mx-4 lg:mx-0 lg:max-w-[616px] flex flex-col">
                    <div className="px-6 sm:px-[60px] pt-10 flex flex-col justify-center">
                        <div className="flex flex-col items-center gap-y-2 font-sans">
                            {svgIcon({icon: '/assets/check.svg'})}
                            <span className="font-semibold text-lg/[27px] tracking-[-2px] text-neutral-950 mb-4 mt-2">
                                Profile Successfully Created
                            </span>
                            <span className="font-normal text-neutral-600 text-xs/[16.8px] text-center">
                                Your profile has been created, you can now proceed to login
                            </span>
                        </div>
                    </div>

                    <form action="" className="bg-white mt-8 flex items-center justify-center px-6 border-t-[0.5px] border-t-neutral-200 h-[120px] rounded-b-[20px]">
                        <ActionBtn className="font-sans font-semibold text-sm/[19.6px]" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SuccessPageComponent;