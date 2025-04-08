import React from "react";
import { Button } from "../ui/button";
import Icon from "../reusables/AppIcon";
import MiniProfileCard from "../reusables/MiniProfileCard";
import { useRouter } from "next/navigation";

const MessageDropdown = ({ closePop }: { closePop: () => void }) => {
  const router = useRouter();
  return (
    <div className="rounded-[8px] shadow shadow-black-500/15 font-sans">
      <div className="bg-neutral-100 px-7 py-6 flex justify-between items-center">
        <p className="font-semibold text-base/[24px] capitalize">messages</p>
        <Button
          type="button"
          className="p-0"
          onClick={closePop}
          aria-label="Close messages"
        >
          <Icon icon="close" width={24} height={24} />
        </Button>
      </div>

      <div className="bg-white">
        <ul>
          <li
            className="p-6 border-b border-neutral-100 flex gap-4 items-start cursor-pointer"
            onClick={() => router.push("messages")}
          >
            <Icon icon="message-drop" width={40} height={40} />
            <div className="space-y-4 w-full">
              <div className="flex items-start justify-between">
                <MiniProfileCard
                  src={"dp"}
                  name={"Michael John"}
                  content={"Tutor"}
                />
                <div className="flex flex-col gap-y-1 font-normal text-sm items-end">
                  <span className=" capitalize text-[#219653]">new</span>
                  <div className="rounded bg-neutral-950 text-white w-max px-2 text-[10px] py-[0.3px] text-center">
                    1
                  </div>
                </div>
              </div>
              <p className="text-neutral-500 text-sm">24 mins ago</p>
              <div className="flex gap-3">
                <Button className="rounded bg-primary-500 px-4 py-2 text-white text-sm capitalize">
                  reply
                </Button>
                <Button className="bg-white text-neutral-950 border border-neutral-100 text-sm capitalize">
                  dismiss
                </Button>
              </div>
            </div>
          </li>
          <li
            className="p-6 border-b border-neutral-100 flex gap-4 items-start cursor-pointer"
            onClick={() => router.push("messages")}
          >
            <Icon icon="message-drop" width={40} height={40} />
            <div className="space-y-4 w-full">
              <div className="flex items-start justify-between">
                <MiniProfileCard
                  src={"dp"}
                  name={"Michael John"}
                  content={"Tutor"}
                />
                <div className="flex flex-col gap-y-1 font-normal text-sm items-end">
                  <span className=" capitalize text-[#219653]">new</span>
                  <div className="rounded bg-neutral-950 text-white w-max px-2 text-[10px] py-[0.3px] text-center">
                    1
                  </div>
                </div>
              </div>
              <p className="text-neutral-500 text-sm">24 mins ago</p>
              <div className="flex gap-3">
                <Button className="rounded bg-primary-500 px-4 py-2 text-white text-sm capitalize">
                  reply
                </Button>
                <Button className="bg-white text-neutral-950 border border-neutral-100 text-sm capitalize">
                  dismiss
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MessageDropdown;
