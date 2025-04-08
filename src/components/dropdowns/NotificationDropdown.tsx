import React from "react";
import { Button } from "../ui/button";
import Icon from "../reusables/AppIcon";
import { useRouter } from "next/navigation";

const NotificationDropdown = ({ closePop }: { closePop: () => void }) => {
  const router = useRouter();
  return (
    <div className="rounded-[8px] shadow shadow-black-500/15 font-sans">
      <div className="bg-neutral-100 px-7 py-6 flex justify-between items-center">
        <p className="font-semibold text-base/[24px] capitalize">
          notifications
        </p>
        <Button
          type="button"
          className="p-0"
          onClick={closePop}
          aria-label="Close notifications"
        >
          <Icon icon="close" width={24} height={24} />
        </Button>
      </div>

      <div className="bg-white">
        <ul>
          <li
            className="p-6 border-b border-neutral-100 flex gap-4 items-start cursor-pointer"
            onClick={() => router.push("notifications")}
          >
            <Icon icon="notification-drop" width={40} height={40} />
            <div className="space-y-4 max-w-[70%]">
              <p className="text-neutral-500 text-sm">
                Class reschedule request from
                <span className="font-medium text-neutral-950">
                  Monday, 24th Feb - 4pm to Wednesday, 26th Feb - 4pm
                </span>
              </p>
              <p className="text-neutral-500 text-sm">16 mins ago</p>
              <div className="flex gap-3">
                <Button className="rounded bg-primary-500 px-4 py-2 text-white text-sm capitalize">
                  accept
                </Button>
                <Button className="bg-white text-neutral-950 border border-neutral-100 text-sm capitalize">
                  view details
                </Button>
              </div>
            </div>
          </li>

          <li
            className="p-6 border-b border-neutral-100 flex gap-4 items-start cursor-pointer"
            onClick={() => router.push("notifications")}
          >
            <Icon icon="message-drop" width={40} height={40} />
            <div className="space-y-4 max-w-[70%]">
              <p className="text-neutral-500 text-sm">
                You’ve got a message from Jessica (Student)
              </p>
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

export default NotificationDropdown;
