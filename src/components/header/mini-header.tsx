"use client";

import React, { useCallback, useMemo } from "react";
import cssClasses from "./header.module.scss";
import { Button } from "../ui/button";
import CompleteProfile from "../dropdowns/CompleteProfileDropdown";
import { NavLinks } from "@/models/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import Icon from "../reusables/AppIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "@/hooks/useClickOutside";

const navLinks: NavLinks[] = [
  {
    path: "/dashboard/overview",
    name: "overview",
    icon: "overview",
    activeIcon: "overview-active",
    roles: ["parent", "tutor", "student"],
  },
  {
    path: "/dashboard/calendar",
    name: "calendar",
    icon: "calendar",
    activeIcon: "calendar-active",
    roles: ["parent", "tutor", "student"],
  },
  {
    path: "/dashboard/resources",
    name: "resources",
    icon: "resources-light",
    activeIcon: "resources-active",
    roles: ["tutor", "student"],
  },
  {
    path: "/dashboard/tutors",
    name: "tutors",
    icon: "tutors",
    activeIcon: "tutors-active",
    roles: ["student"],
  },
  {
    path: "/dashboard/session",
    name: "session",
    icon: "user-session",
    activeIcon: "session-active",
    roles: ["parent", "tutor", "student"],
  },
  {
    path: "/dashboard/payment",
    name: "payment",
    icon: "payment",
    activeIcon: "payment-active",
    roles: ["parent", "tutor", "student"],
  },
  {
    path: "/dashboard/settings",
    name: "settings",
    icon: "settings",
    activeIcon: "settings-active",
    roles: ["parent", "tutor", "student"],
  },
  {
    path: "/dashboard/support",
    name: "support",
    icon: "support",
    activeIcon: "support-active",
    roles: ["parent", "tutor", "student"],
  },
];

const MiniHeader = () => {
  const menuRef = useClickOutside("complete_proile");

  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const isActive = useCallback(
    (href: string) => pathname.startsWith(href),
    [pathname]
  );

  const filteredLinks = useMemo(() => {
    return navLinks.filter((link) =>
      link?.roles?.includes(user?.membershipType ?? "")
    );
  }, [user?.membershipType]);

  return (
    <div className={cssClasses["mini-header"]}>
      <ul className="flex overflow-x-auto scrollbar-thin">
        {filteredLinks.map((link) => (
          <li
            key={link.path}
            className={cn(
              "flex gap-x-2 items-center",
              isActive(link.path) &&
                "capitalize font-medium text-neutral-950 border-b-2 border-b-primary-500 md:border-b-0",
              "text-neutral-500 font-normal"
            )}
          >
            <Link href={link.path} className="flex gap-x-2 items-center">
              <div className="size-5">
                <Icon
                  icon={isActive(link.path) ? link.activeIcon : link.icon}
                  width={20}
                  height={20}
                />
              </div>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="relative"
        ref={menuRef.dropdownRef}
        onClick={menuRef.handleClick}
      >
        <Button
          type="button"
          className="h-[68px] px-[22px] bg-warning-25 rounded-none font-medium text-sm/[19.6px] text-warning-700 hidden md:flex"
        >
          Complete profile
          <span className="size-5">
            <Icon icon="arrow-right" height={20} width={20} />
          </span>
        </Button>

        <AnimatePresence>
          {menuRef.isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut", bounce: 0.2 }}
              className="absolute top-16 right-0 z-50 min-w-[220px] rounded-md p-2"
            >
              <CompleteProfile closePop={menuRef.handleClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MiniHeader;
