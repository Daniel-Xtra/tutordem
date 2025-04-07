import React, { useState } from "react";

import { Dialog } from "../ui/dialog";
import NumberVerification from "../modals/number-verification";
import KycVerification from "../modals/kyc-verification";
import ProfileCompletion from "../modals/profile-completion";
import CompleteStudentProfile from "../modals/complete-student-profile";
import { Button } from "../ui/button";

import TutorProfileCompletion from "../modals/tutor-profile-completion";
import AccountDetails from "../modals/account-details";
import useAuthStore from "@/store/useAuthStore";
import Icon from "../reusables/AppIcon";
import AppDialogTrigger from "../reusables/AppDialogTrigger";
// import StudentProfileCompletion from "../modals/student-profile-completion";

const CompleteProfileDropdown = ({ closePop }: { closePop: () => void }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [studentProfileOpen, setStudentProfileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <div
      className="rounded-[8px] md:w-[375px] shadow shadow-black-500/15 font-sans"
      onClick={(e) => e.stopPropagation()} // PREVENT CLOSING WHEN CLICKING INSIDE
    >
      <div className="bg-neutral-100 px-7 py-6 flex gap-x-11 justify-between items-center">
        <p className="font-semibold text-base/[24px] capitalize">
          complete profile
        </p>
        <Button type="button" className="p-0" onClick={closePop}>
          <Icon icon="close" width={24} height={24} />
        </Button>
      </div>
      <div className="bg-white px-7 py-6 space-y-5">
        <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
          <div onClick={(e) => e.stopPropagation()}>
            <AppDialogTrigger
              title=" Phone Number Verification"
              description="This will be used to"
              onClick={() => setPhoneOpen(true)}
            />
            <NumberVerification closeModal={() => setPhoneOpen(false)} />
          </div>
        </Dialog>

        <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
          <div onClick={(e) => e.stopPropagation()}>
            <AppDialogTrigger
              title=" Complete your Profile"
              description="Upload picture,"
              onClick={() => setProfileOpen(true)}
            />
            {user?.membershipType === "parent" && (
              <ProfileCompletion closeModal={() => setProfileOpen(false)} />
            )}
            {user?.membershipType === "tutor" && (
              <TutorProfileCompletion
                closeModal={() => setProfileOpen(false)}
              />
            )}
            {user?.membershipType === "student" && (
              <CompleteStudentProfile
                closeModal={() => setProfileOpen(false)}
              />
            )}
          </div>
        </Dialog>

        <Dialog open={kycOpen} onOpenChange={setKycOpen}>
          <div onClick={(e) => e.stopPropagation()}>
            <AppDialogTrigger
              title="Complete KYC"
              description="NIN, BVN, Utility bill"
              onClick={() => setKycOpen(true)}
            />
            <KycVerification closeModal={() => setKycOpen(false)} />
          </div>
        </Dialog>

        {user?.membershipType === "parent" && (
          <Dialog
            open={studentProfileOpen}
            onOpenChange={setStudentProfileOpen}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <AppDialogTrigger
                title="Complete Jessica’s Profile"
                description="Start a Class for your kids"
                onClick={() => setStudentProfileOpen(true)}
              />
              <CompleteStudentProfile
                closeModal={() => setStudentProfileOpen(false)}
              />
            </div>
          </Dialog>
        )}

        {user?.membershipType === "tutor" && (
          <Dialog open={accountOpen} onOpenChange={setAccountOpen}>
            <div onClick={(e) => e.stopPropagation()}>
              <AppDialogTrigger
                title=" Account Details"
                description="Bank details for withdrawal"
                onClick={() => setAccountOpen(true)}
              />
              <AccountDetails closeModal={() => setAccountOpen(false)} />
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default CompleteProfileDropdown;
