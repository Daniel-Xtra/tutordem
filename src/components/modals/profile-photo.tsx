"use client";
import React from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";
import Upload from "../reusables/upload";

const ProfilePhoto = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <AppModal
        title={"Change profile photo"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal text-neutral-600">
              Change the picture on your profile
            </span>
          </>
        }
        primaryFn={() => {}}
        content={<Upload />}
        actions={
          <>
            <Button
              className="bg-transparent p-5 rounded-sm h-14 font-sans w-full font-semibold text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button className="bg-primary-500 p-5 rounded-sm h-14 font-sans w-full font-semibold text-sm/[19.6px] text-[#FFFFFF]">
              Save
            </Button>
          </>
        }
      />
    </div>
  );
};

export default ProfilePhoto;
