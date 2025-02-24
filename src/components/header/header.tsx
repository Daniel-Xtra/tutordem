"use client";
import Link from "next/link";
import cssClasses from "./header.module.scss";

import { CircleX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import UseClickOutside from "@/hooks/useClickOutside";
import { useAuth } from "@/contexts/auth.context";

function svgIcon({ icon }: { icon: string }) {
  return <Image src={icon} alt="icon" width={24} height={24} />;
}

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { logoutHandler, membership_type } = useAuth();

  UseClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <nav className={cssClasses.nav}>
      <div className={cssClasses.container}>
        <Link href="/dashboard/overview">
          <div className="font-semibold text-[20px] md:text-[28px]/[31.08px] tracking-[-2px] text-neutral-950 ">
            tutordem
          </div>
        </Link>

        <div className={cssClasses.menu}>
          <div className="items-center gap-8 hidden md:flex">
            <Button className="rounded-full py-3 px-4 bg-primary-25 font-medium text-xs/[16.8px] text-primary-500 hidden md:flex">
              Become a Tutor
            </Button>
            {svgIcon({ icon: "/assets/icons/letter.png" })}
            {svgIcon({ icon: "/assets/icons/notification.png" })}
            <div className="h-9 bg-neutral-300 w-[0.5px] border-neutral-300"></div>
          </div>
          <div className="flex items-center gap-8 relative">
            <div className="hidden md:block">
              {svgIcon({ icon: "/assets/icons/settings.png" })}
            </div>
          </div>

          <div className="relative" ref={menuRef}>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-[#FFFFFF] text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
                E
              </div>
              <div>
                <span className="block font-normal text-xs md:text-base/[22.4px] capitalize">
                  <b className="font-bold"> Ebenezer</b> Akin
                </span>
                <span className="block font-normal text-left text-xs md:text-sm/[19.6px] capitalize">
                  {membership_type}
                </span>
              </div>
              <div className="hidden md:block">
                {svgIcon({ icon: "/assets/icons/arrow-down.png" })}
              </div>
            </div>
            <div
              className={isMenuOpen ? cssClasses["dropdown-menu"] : "hidden"}
            >
              <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-sm cursor-pointer">
                <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-[#FFFFFF] text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
                  I
                </div>
                <div>
                  <span className="block font-normal text-xs/[22.4px] capitalize mr-16">
                    <b className="font-bold"> Ifeoluwa</b> Akindeyin
                  </span>
                  <span className="block font-normal text-left text-xs/[19.6px] capitalize">
                    child
                  </span>
                </div>
              </div>
              <Button
                className="font-medium text-xs/[16.8px] p-4 font-sans capitalize text-error-600 w-full flex justify-between"
                onClick={() => logoutHandler()}
              >
                <span> logout</span>
                {svgIcon({ icon: "/assets/icons/logout.png" })}
              </Button>
            </div>
          </div>

          <div className="inset-y-0 items-center left-0 block md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center md:hidden"
              aria-expanded="false"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {svgIcon({ icon: "/assets/icons/hamburger.png" })}
            </button>

            <div
              className={
                isSidebarOpen
                  ? ` translate-x-0 ${cssClasses.sidebar}`
                  : `translate-x-full ${cssClasses.sidebar}`
              }
            >
              <div className="flex justify-end">
                <CircleX onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              </div>
              <div className="">
                <div className="mt-4">
                  <ul className="block space-y-6"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
