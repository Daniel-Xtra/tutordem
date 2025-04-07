import CreateQuiz from "@/components/modals/create-quiz/create-quiz";
import AppTable from "@/components/reusables/AppTable";
import EmptyState from "@/components/reusables/EmptyState";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";

const TutorQuiz = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans px-5 xl:px-[136px]">
        <div className=" cursor-pointer col-span-1 rounded bg-neutral-25 border border-neutral-200 relative">
          <div className="flex items-center justify-start md:justify-end gap-[10px] py-3 px-4 w-full absolute left-2 right-0 top-0 text-warning-600">
            <span className="font-medium text-sm capitalize">Rejected</span>

            <AiFillInfoCircle className="size-[18px]" />
          </div>
          <div className="p-6 md:p-8 space-y-6 mt-5 md:mt-2">
            <div className="space-y-2">
              <span className="font-semibold text-sm md:text-base text-primary-950 capitalize">
                Adjective Assessment
              </span>

              <div className="flex items-center font-normal text-sm gap-2 text-neutral-600">
                <span className="capitalize">english</span>
                <GoDotFill className="size-1.5 text-primary-500" />
                <span className="uppercase">sss1</span>
                <GoDotFill className="size-1.5 text-primary-500" />
                <span className="capitalize">40 questions</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <p className="font-normal text-sm text-neutral-600">
                  02 days ago
                </p>
                <GoDotFill className="size-1.5 text-primary-500" />
                <p className="font-normal text-sm text-primary-500">0 plays</p>
              </div>
              <div>
                <Icon icon="arrow-right-black" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <AppTable border={false}>
        <EmptyState
          title="No quiz"
          message="You have no quiz at the moment"
          icon="empty-state"
          width={68}
          height={68}
          action={
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="bg-primary-50 p-5 rounded h-14 w-[299px] font-bold text-sm/[19.6px] text-primary-500"
                >
                  Create Quiz
                </Button>
              </DialogTrigger>
              <CreateQuiz closeModal={() => setOpenModal(false)} />
            </Dialog>
          }
        />
      </AppTable>
    </>
  );
};

export default TutorQuiz;
