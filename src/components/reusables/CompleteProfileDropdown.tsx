import Image from "next/image";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { PiCaretRightBold } from "react-icons/pi";
import { Dialog, DialogTrigger } from "../ui/dialog";
import NumberVerification from "../modals/number-verification";
import KycVerification from "../modals/kyc-verification";
import ProfileCompletion from "../modals/profile-completion";
import CompleteStudentProfile from "../modals/complete-student-profile";
import { Button } from "../ui/button";

import TutorProfileCompletion from "../modals/tutor-profile-completion";
import AccountDetails from "../modals/account-details";
import useAuthStore from "@/store/useAuthStore";
import StudentProfileCompletion from "../modals/student-profile-completion";

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

const RenderModal = ({ type, closeModal }: {  type: string; closeModal: () => void }) => {
  if (type === 'student') {
    return <StudentProfileCompletion closeModal={closeModal} />
  }

  if (type === 'tutor') {
    return <TutorProfileCompletion closeModal={closeModal} />
  }

  if (type === 'parent') {
    return <ProfileCompletion closeModal={closeModal} />
  }
}

const CompleteProfileDropdown = ({ closePop }: { closePop: () => void }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [studentProfileOpen, setStudentProfileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { user } = useAuthStore();
  return (
    <div className="rounded-[8px] md:w-[375px] shadow shadow-black-500/15 font-sans">
      <div className="bg-neutral-100 px-7 py-6 flex gap-x-11 justify-between items-center">
        <p className="font-semibold text-base/[24px] capitalize">
          complete profile
        </p>
        <Button className="p-0" onClick={closePop}>
          {svgIcon({ icon: "close", size: 24 })}
        </Button>
      </div>
      <div className="bg-[#FFFFFF] px-7 py-6 space-y-5">
        <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex justify-between items-center rounded-sm">
              <div className="space-y-1.5">
                <p className="font-medium text-xs/[16.8px] text-neutral-800">
                  Phone Number Verification
                </p>
                <p className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  This will be used to
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
                  pending
                </Badge>
                <PiCaretRightBold />
              </div>
            </div>
          </DialogTrigger>
          <NumberVerification closeModal={() => setPhoneOpen(false)} />
        </Dialog>

        <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex justify-between items-center rounded-sm">
              <div className="space-y-1.5">
                <p className="font-medium text-xs/[16.8px] text-neutral-800">
                  Complete your Profile
                </p>
                <p className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  Upload picture,
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
                  pending
                </Badge>
                <PiCaretRightBold />
              </div>
            </div>
          </DialogTrigger>

          {/* {user?.membershipType === "student" && <StudentProfileCompletion closeModal={() => setProfileOpen(false)} />} */}
          <RenderModal type={user?.membershipType} closeModal={() => setProfileOpen(false)} />
          {/* {user?.membershipType === "parent" ? (
            <ProfileCompletion
              closeModal={() => {
                setProfileOpen(false);
              }}
            />
          ) : (
            <TutorProfileCompletion
              closeModal={() => {
                setProfileOpen(false);
              }}
            />
          )
          } */}
        </Dialog>

        <Dialog open={kycOpen} onOpenChange={setKycOpen}>
          <DialogTrigger className="cursor-pointer" asChild>
            <div className="flex justify-between items-center rounded-sm ">
              <div className="space-y-1.5">
                <p className="font-medium text-xs/[16.8px] text-neutral-800">
                  Complete KYC
                </p>
                <p className="font-normal text-[11px]/[15.4px] text-neutral-500">
                  NIN, BVN, Utility bill
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
                  pending
                </Badge>
                <PiCaretRightBold />
              </div>
            </div>
          </DialogTrigger>
          <KycVerification closeModal={() => setKycOpen(false)} />
        </Dialog>

        {user?.membershipType == "parent" && (
          <Dialog
            open={studentProfileOpen}
            onOpenChange={setStudentProfileOpen}
          >
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex justify-between items-center rounded-sm ">
                <div className="space-y-1.5">
                  <p className="font-medium text-xs/[16.8px] text-neutral-800">
                    Complete Jessica’s Profile
                  </p>
                  <p className="font-normal text-[11px]/[15.4px] text-neutral-500">
                    Start a Class for your kids
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
                    pending
                  </Badge>
                  <PiCaretRightBold />
                </div>
              </div>
            </DialogTrigger>
            <CompleteStudentProfile
              closeModal={() => setStudentProfileOpen(false)}
            />
          </Dialog>
        )}

        {user?.membershipType == "tutor" && (
          <Dialog open={accountOpen} onOpenChange={setAccountOpen}>
            <DialogTrigger className="cursor-pointer" asChild>
              <div className="flex justify-between items-center rounded-sm ">
                <div className="space-y-1.5">
                  <p className="font-medium text-xs/[16.8px] text-neutral-800">
                    Account Details
                  </p>
                  <p className="font-normal text-[11px]/[15.4px] text-neutral-500">
                    Bank details for withdrawal
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Badge className="font-normal text-[10px]/[12px] capitalize text-warning-500 bg-warning-25 py-1.5 px-3 rounded-[22px]">
                    pending
                  </Badge>
                  <PiCaretRightBold />
                </div>
              </div>
            </DialogTrigger>
            <AccountDetails closeModal={() => setAccountOpen(false)} />
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default CompleteProfileDropdown;
