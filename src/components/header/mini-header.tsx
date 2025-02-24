"use client";

import React, { useRef, useState } from "react";
import cssClasses from "./header.module.scss";
import Image from "next/image";
import { Button } from "../ui/button";
import UseClickOutside from "@/hooks/useClickOutside";
import CompleteProfile from "../reusables/CompleteProfileDropdown";
import { NavLinks } from "@/models/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function svgIcon({ icon }: { icon: string }) {
  return (
    <Image
      src={`/assets/icons/${icon}.png`}
      alt="icon"
      width={20}
      height={20}
    />
  );
}

const navLinks: NavLinks[] = [
  {
    path: "/dashboard/overview",
    name: "overview",
    icon: "overview",
    activeIcon: "overview-active",
  },
  {
    path: "/dashboard/calender",
    name: "calender",
    icon: "calender",
    activeIcon: "calender-active",
  },
  {
    path: "/dashboard/session",
    name: "session",
    icon: "user-session",
    activeIcon: "session-active",
  },
  {
    path: "/dashboard/payment",
    name: "payment",
    icon: "payment",
    activeIcon: "payment-active",
  },
  {
    path: "/dashboard/settings",
    name: "settings",
    icon: "settings",
    activeIcon: "settings-active",
  },
  {
    path: "/dashboard/support",
    name: "support",
    icon: "support",
    activeIcon: "support-active",
  },
];

const MiniHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = useRef<HTMLDivElement | null>(null);
  UseClickOutside(menu, () => setIsMenuOpen(false));
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className={cssClasses["mini-header"]}>
      <ul className="flex overflow-x-auto">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={cn(
              "flex gap-x-2 items-center",
              isActive(link.path) &&
                `capitalize font-medium text-neutral-950  border-b-2 border-b-primary-500 md:border-b-0`,
              `text-neutral-500 font-normal`
            )}
          >
            <Link href={link.path} className="flex gap-x-2 items-center">
              <div className="size-5">
                {svgIcon({
                  icon: isActive(link.path)
                    ? `${link.activeIcon}`
                    : `${link.icon}`,
                })}
              </div>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative" ref={menu}>
        <Button
          className="h-[68px] px-[22px] bg-warning-25 rounded-none font-medium text-sm/[19.6px] text-warning-700 hidden md:flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Complete profile
          <span>{svgIcon({ icon: "arrow-right" })}</span>
        </Button>

        <div className={isMenuOpen ? cssClasses["dropdown-menu"] : "hidden"}>
          <CompleteProfile closePop={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
