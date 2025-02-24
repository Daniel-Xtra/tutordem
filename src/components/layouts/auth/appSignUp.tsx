"use client";
import AppInput from "@/components/reusables/AppInput";
import ProfileCard from "@/components/reusables/ProfileCard";
import Link from "next/link";
import Button from "@/components/reusables/Button";
import Image from "next/image";

const AppSignup = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Handle signup here');
    }

    const svgIcon = ({ icon }: { icon: string }) => {
        return <Image src={icon} alt="icon" width={24} height={24} />
    }

    const ActionBtn = ({ className }: { className: string; }) => {
        return (
            <div className={`${className} mx-auto w-full`}>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)} className="w-full mt-16 md:mb-4" label="Get started" color="main" size="lg" icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })} />
                <div className="w-full flex items-center justify-center">
                    <span className="font-medium text-base text-[#768796]">
                    Already have an have an account? {' '}
                    <Link className="text-neutral-950" href="/">Log in</Link>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <span className="text-2xl mt-4 lg:text-3xl font-semibold text-neutral-950 tracking-[-2px]">
                You&rsquo;ve been invited
            </span>
            <div className="space-y-4">
                <p className="font-normal text-xs lg:text-sm mt-2">You’ve been invited by your parent/guardian </p>

                <div className="">
                    <ProfileCard letter="E" name={"Ebenezer Akinmayowa"} email={"ebenezer@test.com"} />
                </div>

                <form action="" className="mt-4 flex flex-col mx-auto">
                    <div>
                        <AppInput label="Email address" type="email" placeholder="Ebenezer@test.com" className="mt-2" value="" onChange={() => {}} />
                    </div>
                    <div className="mt-4">
                        <AppInput showPasswordIcon={true} iconText="Hide" label="Password" type="password" placeholder="Password@@01" className="mt-2" value="" onChange={() => {}} />
                    </div>
                    <ActionBtn className="hidden md:block" />
                    <ActionBtn className="block md:hidden absolute px-4 bottom-0 left-0 w-full pb-6" />
                </form>
            </div>
        </div>
    )
}

export default AppSignup;