"use client";
import Link from "next/link";
import cssClasses from "./header.module.scss";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Icon from "../reusables/AppIcon";
import NotificationDropdown from "../dropdowns/NotificationDropdown";
import { AnimatePresence, motion } from "framer-motion";
import MessageDropdown from "../dropdowns/MessageDropdown";
import { useClickOutside } from "@/hooks/useClickOutside";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useClickOutside("profile");
  const notificationRef = useClickOutside("notification");
  const messageRef = useClickOutside("message");
  const { user, logoutHandler } = useAuthStore();
  const router = useRouter();

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
            {user?.membershipType === "tutor" && (
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <span className="font-sans text-neutral-500 text-sm/[19.6px]  font-normal">
                  Availability
                </span>
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bottom-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-primary-500 "></div>
              </label>
            )}

            {user?.membershipType === "parent" && (
              <Button
                type="button"
                className="rounded-full py-3 px-4 bg-primary-25 font-medium text-xs/[16.8px] text-primary-500 hidden md:flex"
              >
                Become a Tutor
              </Button>
            )}

            <div
              className="relative"
              ref={messageRef.dropdownRef}
              onMouseEnter={messageRef.handleMouseEnter}
              onMouseLeave={messageRef.handleMouseLeave}
            >
              <Icon
                icon="letter"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={messageRef.handleClick}
              />

              <AnimatePresence>
                {messageRef.isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 50 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.y > 40) messageRef.handleMouseLeave();
                    }}
                    className="absolute top-10 -right-72 z-50 min-w-[512px] rounded-md p-2"
                  >
                    <MessageDropdown closePop={messageRef.handleClick} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              ref={notificationRef.dropdownRef}
              onMouseEnter={notificationRef.handleMouseEnter}
              onMouseLeave={notificationRef.handleMouseLeave}
            >
              <Icon
                icon="notification"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={notificationRef.handleClick}
              />

              <AnimatePresence>
                {notificationRef.isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 50 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.y > 40)
                        notificationRef.handleMouseLeave();
                    }}
                    className="absolute top-10 -right-72 z-50 min-w-[512px] rounded-md p-2"
                  >
                    <NotificationDropdown
                      closePop={notificationRef.handleClick}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-9 bg-neutral-300 w-[0.5px] border-neutral-300"></div>
          </div>

          <div className=" items-center gap-8 relative">
            <div className="hidden md:block">
              <Link href="/dashboard/settings">
                <Icon icon="settings" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div
            className="relative"
            ref={menuRef.dropdownRef}
            onMouseEnter={menuRef.handleMouseEnter}
            onMouseLeave={menuRef.handleMouseLeave}
          >
            <Button
              className="flex items-center gap-3 cursor-pointer"
              onClick={menuRef.handleClick}
            >
              <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-white text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
                E
              </div>
              <div>
                <span className="block font-normal text-xs md:text-base/[22.4px] capitalize">
                  <b className="font-bold"> Ebenezer</b> Akin
                </span>
                <span className="block font-normal text-left text-xs md:text-sm/[19.6px] capitalize">
                  {user?.membershipType}
                </span>
              </div>
              <div>
                <Icon icon="arrow-down" width={24} height={24} />
              </div>
            </Button>

            <AnimatePresence>
              {menuRef.isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut", bounce: 0.2 }}
                  className="absolute top-12 right-0 z-50  min-w-60 w-max bg-white shadow-lg rounded-md p-2"
                >
                  {user?.membershipType === "parent" && (
                    <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-sm cursor-pointer">
                      <div className="size-8 md:size-11 bg-neutral-950 flex justify-center items-center text-white text-sm md:text-2xl/[33.6px] font-bold  md:font-semibold rounded-sm">
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
                  )}
                  <Button
                    type="button"
                    className="font-medium text-xs/[16.8px] p-4 font-sans capitalize text-error-600 w-full flex justify-between"
                    onClick={() => {
                      router.push("/auth");
                      logoutHandler();
                    }}
                  >
                    <span>Logout</span>
                    <Icon icon="logout" width={24} height={24} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="inset-y-0 items-center left-0 block -ml-2 md:hidden">
            <Button
              type="button"
              className="inline-flex items-center justify-center md:hidden p-0"
              aria-expanded="false"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Icon icon="hamburger" width={24} height={24} />
            </Button>

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
              <div>
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
