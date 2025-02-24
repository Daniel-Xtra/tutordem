import React from "react";
import { AppModal } from "../reusables/AppModal";
import Image from "next/image";

function svgIcon({ icon, size }: { icon: string; size: number }) {
  return (
    <Image
      src={`/assets/icons/${icon}.png`}
      alt="icon"
      width={size}
      height={size}
    />
  );
}

const SuccessModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <AppModal
        buttonText="Done"
        primaryFn={closeModal}
        content={
          <div className="flex flex-col items-center gap-y-2 font-sans">
            {svgIcon({ icon: "success-icon", size: 72 })}
            <span className="font-semibold text-lg/[27px] tracking-[-2px] text-neutral-950">
              OTP Verification Successful
            </span>
            <span className="font-normal text-neutral-600 text-xs/[16.8px]">
              Your OTP has been Successful
            </span>
          </div>
        }
      />
    </div>
  );
};

export default SuccessModal;
