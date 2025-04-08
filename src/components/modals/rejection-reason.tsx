import React from "react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";

const RejectionReason = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <AppModal
        title={"Reason for Rejection"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Recourses for your students
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <div className="px-4 text-neutral-950 space-y-2">
            <h3 className=" font-semibold text-base">
              The document does not meet guideline
            </h3>

            <div className="font-normal text-xs space-y-4">
              <p>
                Your recent document upload was not approved due to the
                following:
              </p>

              <ol className="list-decimal px-3 space-y-4">
                <li>
                  Inaccurate Content: Contains errors or outdated information.
                </li>
                <li>
                  Formatting Issues: Does not follow our required structure.
                </li>
                <li>Incomplete Sections: Lacks key details for clarity.</li>
              </ol>

              <p>
                Please revise and resubmit. Feel free to reach out if you need
                further guidance.
              </p>

              <p>Best regards,</p>
            </div>
          </div>
        }
        actions={
          <>
            <Button
              type="button"
              className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
            >
              Edit document
            </Button>
          </>
        }
      />
    </div>
  );
};

export default RejectionReason;
