'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import cssClasses from "./header.module.scss";

const AuthHeader = () => {
    const router = useRouter();
    function svgIcon({ icon, size }: { icon: string; size: number }) {
        return <Image src={icon} alt="icon" width={size} height={size} />;
    }
    function handleNavigation(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        router.push('/signup');
    }
    return (
        <div>
            <header className={cssClasses.header}>
                <div className={cssClasses.container}>
                    <Link href="/">
                        <div className="font-semibold text-[20px] md:text-[28px]/[31.08px] tracking-[-2px] text-neutral-950 ">
                            tutordem
                        </div>
                    </Link>
                    <div>
                        <Button
                            className="h-[56px] px-[20px] py-[18px] w-full bg-primary-500 rounded-[4px] font-medium text-xs/[16.8px] text-white flex justify-between items-center"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavigation(e)}
                        >
                            <span> Get started </span>
                            <span>{svgIcon({ icon: "/assets/icons/arrow-right-white.svg", size: 24 })}</span>
                        </Button>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}

export default AuthHeader;