import React from "react";
import { AppModal } from "../reusables/AppModal";
import Icon from "../reusables/AppIcon";
import useAuthStore from "@/store/useAuthStore";

const SuccessModal = ({
  icon,
  title,
  description,
  closeModal,
  actions,
}: {
  icon: string;
  title: string;
  description: React.ReactNode;
  closeModal: () => void;
  actions?: React.ReactNode;
}) => {
  const user = useAuthStore((state) => state.user);
  return (
    <div>
      <AppModal
        buttonText="Done"
        hideHeader
        primaryFn={closeModal}
        content={
          <>
            <div className="flex flex-col items-center gap-y-2 font-sans">
              <Icon icon={icon} width={72} height={72} />
              <span className="font-semibold text-lg/[27px]  text-neutral-950">
                {title}
              </span>
              <span className="font-normal text-neutral-600 text-xs/[16.8px]">
                {description}
              </span>
            </div>
            {user.membershipType === "student" && (
              <div className="mt-4 p-[20px] bg-neutral-100 rounded-[8px] text-neutral-950 flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                  <Icon icon="dp" type="images" width={40} height={40} />
                  <div className="text-base font-normal">
                    <span className="font-bold">Jessica</span> Akin
                  </div>
                </div>
                <div>
                  <span className="text-sm font-normal">JSS 3</span>
                </div>
              </div>
            )}
          </>
        }
        actions={actions}
      />
    </div>
  );
};

export default SuccessModal;
