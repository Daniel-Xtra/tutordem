"use client";
import { useState } from "react";
import { AppModal } from "../../reusables/AppModal";
import { Button } from "../../ui/button";
import AppTextarea from "@/components/reusables/AppTextarea";

const QuizParagraph = ({
  closeModal,
  onSetParagraph,
}: {
  closeModal?: () => void;
  onSetParagraph: (text: string) => void;
}) => {
  const [paragraph, setParagraph] = useState("");
  return (
    <div>
      <AppModal
        title={"Add paragraph"}
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
            <div className="space-y-3">
              <label className="font-normal text-xs/[16.8px] text-neutral-400">
                Paragraph Description
              </label>
              <AppTextarea
                placeholder="Your text goes here"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
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
              onClick={() => onSetParagraph("paragraph")}
            >
              Add Paragraph
            </Button>
          </>
        }
      />
    </div>
  );
};

export default QuizParagraph;
