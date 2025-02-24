import Button from "@/components/reusables/Button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyOTPComponent = () => {
    const router = useRouter();

    const otpInputs = Array(4).fill("");

    const svgIcon = ({ icon }: { icon: string }) => {
        return <Image src={icon} alt="icon" width={24} height={24} />;
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const type = localStorage.getItem('type');
        if (type === 'new-user') {
            return router.push('/newpassword/new');
        }
        router.push('/forgotpassword/new');
    }

    const ActionBtn = ({ className }: { className: string; }) => {
        return (
            <div className={`${className} mx-auto`}>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)} className="w-full md:w-[416px] mt-16 md:mb-8" color="main" size="md" label="Verify" icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })} />
            </div>
        );
    }

    return (
        <div>
            <div className="lg:min-h-[calc(100vh-88px)] flex items-start lg:items-center justify-center bg-neutral-100 overflow-hidden font-sans">
            <div className="bg-white rounded-[20px] w-full max-w-[616px]">
                <div className="text-neutral-950 text-start py-10 px-6 lg:px-[32px] bg-neutral-25 rounded-tr-[20px] rounded-tl-[20px] flex flex-col justify-center md:text-center">
                    <span className="text-2xl md:text-3xl font-semibold  tracking-[-2px]">
                        OTP Verification
                    </span>
                    <p className="font-medium text-xs md:text-sm mt-2">
                        Please enter the OTP sent to <br />
                        <span className="text-primary-500">ebenezer@email.com</span>
                    </p>
                </div>


                <form action="" className="mt-4 py-10 flex flex-col bg-white">
                    <div className="flex flex-col items-center lg:pt-[80px] lg:px-[60px] justify-center space-y-4">
                        <div className="w-full max-w-[309px]">
                            <InputOTP maxLength={4}>
                                <InputOTPGroup className="gap-[20.63px]">
                                    {otpInputs.map((_, index) => (
                                        <InputOTPSlot
                                            key={index}
                                            index={index}
                                            className="w-[62px] h-[62px] rounded-[5.16px] border-[1.29px] text-black text-3xl font-bold active:scale-10"
                                        />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                        <div className="flex items-center justify-between w-full max-w-[309px] font-medium text-neutral-950 text-xs pb-10">
                            <span>Resend code</span>
                            <span className="text-error-600">0:59</span>
                        </div>
                    </div>

                    
                    <div className="bg-white mt-8 flex items-center justify-center px-6 lg:border-t-[0.5px] lg:border-t-neutral-200 h-[120px] rounded-bl-[20px] rounded-br-[20px]">
                        <ActionBtn className="hidden md:block " />
                        <ActionBtn className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6" />
                    </div>
                </form>
            </div>
        </div>

        </div>
        
    );
}

export default VerifyOTPComponent;
