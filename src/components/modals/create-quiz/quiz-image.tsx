"use client";
import AppFormInput from "@/components/reusables/AppFormInput";
import { AppModal } from "../../reusables/AppModal";
import { Button } from "../../ui/button";
import DocumentUpload from "@/components/reusables/DocumentUpload";

const QuizImage = ({
  closeModal,
  onSetImage,
}: {
  closeModal?: () => void;
  onSetImage: (image_url: string) => void;
}) => {
  return (
    <div>
      <AppModal
        title={"Add new image"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Please complete the profile with the right details
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <form className="space-y-6 font-sans">
            <DocumentUpload document_name="image" />
            <div className="space-y-3">
              <label className="font-normal text-xs/[16.8px] text-neutral-400">
                Image Description
              </label>
              <AppFormInput
                type="text"
                placeholder="Description of the image uploaded"
              />
            </div>
          </form>
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
              onClick={() => onSetImage("image")}
            >
              Add Image
            </Button>
          </>
        }
      />
    </div>
  );
};

export default QuizImage;
