import React from "react";
import { AppModal } from "../reusables/AppModal";
import Icon from "../reusables/AppIcon";

const DeleteResource = ({
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
  return (
    <div>
      <AppModal
        buttonText="Done"
        hideHeader
        primaryFn={closeModal}
        content={
          <>
            <div className="flex flex-col items-center gap-y-2 font-sans bg-neutral-25">
              <Icon icon={icon} width={72} height={72} />
              <span className="font-semibold text-lg/[27px]  text-neutral-950">
                {title}
              </span>
              <span className="font-normal text-neutral-600 text-xs/[16.8px]">
                {description}
              </span>
            </div>
          </>
        }
        actions={actions}
      />
    </div>
  );
};

export default DeleteResource;
