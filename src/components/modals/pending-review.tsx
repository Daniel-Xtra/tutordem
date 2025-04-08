import React from "react";
import { AppModal } from "../reusables/AppModal";
import Icon from "../reusables/AppIcon";

const PendingReviewModal
 = ({
  icon,
  title,
  description,
  closePendingModal,
  actions,
}: {
  icon: string;
  title: string;
  description: React.ReactNode;
  closePendingModal: () => void;
  actions?: React.ReactNode;
}) => {
  return (
    <div>
      <AppModal
        buttonText="Done"
        hideHeader
        primaryFn={closePendingModal}
        content={
          <>
            <div className="flex flex-col items-center gap-y-2 font-sans">
              <div className="flex items-center justify-center bg-warning-25 rounded-full p-4">
                <Icon icon={icon} width={32} height={32} />
              </div>
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

export default PendingReviewModal
;
