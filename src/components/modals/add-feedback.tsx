import { StarIcon } from "lucide-react";
import { AppModal } from "../reusables/AppModal";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { addFeedbackSchema, AddFeedbackFormValues } from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { AiFillInfoCircle } from "react-icons/ai";
import { Label } from "../ui/label";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import PendingReviewModal from "./pending-review";
import Icon from "../reusables/AppIcon";
import { Separator } from "../ui/separator";
// import Icon from "../reusables/AppIcon";


const AddFeedback = ({ closeModal }: { closeModal: () => void }) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AddFeedbackFormValues>({
    resolver: zodResolver(addFeedbackSchema),
    defaultValues: {
      feedback: "",
    },
  })
  const onSubmit: SubmitHandler<AddFeedbackFormValues> = (data) => {
    console.log(data);
    closeModal();
    setOpenReviewModal(true);
  };

  const handleButtonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = getValues();
    onSubmit(formData);
  };

  return (
    <>
      <AppModal
        title={"Add Feedback"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal text-neutral-600">
              Resources for your students
            </span>
          </>
        }
        primaryFn={closeModal}
        content={
          <div className="space-y-4 font-sans">
            <div className="flex items-center justify-between">
              <span className="text-neutral-950 font-normal text-sm">Rate the document</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <span>0.0</span>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="grid w-full gap-1.5">
                <Label className="text-[12px]/[16.8px] text-black-400 my-4">
                  Feedback
                </Label>
                <Textarea
                  className="text-black-500 border border-black-50 font-normal p-4  text-sm/[19.6px] placeholder:font-normal placeholder:text-black-300 placeholder:text-sm/[19.6px] focus-visible:ring-0 focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 resize-none h-[108px]"
                  placeholder="Enter your feedback for this document."
                  
                  {...register("feedback", { required: true, maxLength: 25 })}
                />
                <span className="text-black-400 font-normal text-[11px]/[15.4px] flex items-center gap-1.5 ">
                  <AiFillInfoCircle className="size-3" /> Not more than 25 words.
                </span>
                {errors.feedback?.message && <p className="text-red-500">Feedback is required</p>}
              </div>
              <div className="text-neutral-950 font-normal text-sm mt-4">Most recent feedback</div>
              
              <div className="flex flex-col rounded-md border border-1 border-neutral-200 mt-4">
                <div className="p-4 items-start justify-between flex flex-col sm:flex-row space-y-2 sm:space-y-0 border-b border-1 border-neutral-200 bg-neutral-50">
                  <div className="flex items-center gap-2">
                    <Icon icon="document-text-selected" width={18} height={18} />
                    <span className="text-neutral-950 font-normal text-xs sm:text-sm">Note by</span>
                    <span className="text-neutral-950 font-normal text-xs sm:text-sm">Jerry Sani</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="calendar-active" width={18} height={18} />
                    <span className="text-neutral-950 font-normal text-xs sm:text-sm">23rd Sept. 2024</span>
                    <Separator orientation="vertical" />
                    <span className="text-neutral-950 font-normal text-xs sm:text-sm">4.0</span>
                    <Icon icon="star" width={18} height={18} />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-neutral-500 font-normal text-xs">Thank you for uploading the document. The content is clear and well-structured, making it easier to understand the concepts.</span>
                </div>
              </div>
            </form>
          </div>
        }
        actions={
          <div className="w-full">
              <Button
                  type="button"
                  className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white px-6 sm:px-[52px]"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonSubmit(e)}
              >
                Submit
              </Button>
          </div>
        }
      >
      </AppModal>
      <Dialog open={openReviewModal} onOpenChange={setOpenReviewModal}>
        <PendingReviewModal 
          icon="guide" 
          title="Feedback Submitted is under review" 
          description="Your feedback will be reviewed within 24hours" 
          closePendingModal={() => setOpenReviewModal(false)} 
        />
      </Dialog>
    </>
  );
};

export default AddFeedback;

