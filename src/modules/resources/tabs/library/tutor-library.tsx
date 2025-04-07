import RejectionReason from "@/components/modals/rejection-reason";
import Icon from "@/components/reusables/AppIcon";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getStatusColor } from "@/lib/utils";
import { LibraryResource } from "@/models/types";
import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const resources: LibraryResource[] = [
  {
    title: "organic chemistry",
    documentType: "PDF",
    subject: "Chemistry",
    class: "SSS 3",
    rating: "4.5",
    numberOfStars: "15",
    isBookmarked: false,
    status: "approved",
  },
  {
    title: "further mathematics",
    documentType: "PDF",
    subject: "mathematics",
    class: "SSS 3",
    rating: "4.5",
    numberOfStars: "15",
    isBookmarked: false,
    status: "rejected",
  },
  {
    title: "respiratory system",
    documentType: "PDF",
    subject: "biology",
    class: "SSS 3",
    rating: "4.5",
    numberOfStars: "15",
    isBookmarked: false,
    status: "draft",
  },
];

const LibraryCard = ({ resource }: { resource: LibraryResource }) => {
  const [reasonOpen, setReasonOpen] = useState(false);
  return (
    <div>
      <Dialog open={reasonOpen} onOpenChange={setReasonOpen}>
        <DialogTrigger asChild>
          <div className=" cursor-pointer font-sans border col-span-1 border-neutral-200 rounded bg-neutral-50 relative">
            <div
              className={`flex items-center gap-[10px] py-3 px-4 absolute right-0 top-0 ${getStatusColor(
                resource?.status || "unknown"
              )}`}
            >
              <span className="font-medium text-sm capitalize">
                {resource.status}
              </span>
              {resource.status === "rejected" && (
                <AiFillInfoCircle className="size-[18px]" />
              )}
            </div>

            <div className="p-8 space-y-6">
              <Icon
                icon="document"
                width={32}
                height={33.58}
                className="-ms-2 -pt-8"
              />

              <div className="space-y-2">
                <span className="font-bold text-sm md:text-base text-primary-950 capitalize">
                  {resource.title}
                </span>

                <div className="flex items-center font-normal text-sm gap-2 text-neutral-600">
                  <span>{resource.documentType}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span className="capitalize">{resource.subject}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span className="">{resource.class}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="font-normal text-sm text-neutral-600">
                    02 days ago
                  </p>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <p className="font-normal text-sm text-neutral-950">
                    {resource.rating}
                  </p>
                  <Icon icon="star" width={12} height={12} />
                  <p className="font-normal text-sm text-neutral-950">
                    ({resource.numberOfStars})
                  </p>
                </div>
                <div>
                  <Icon icon="arrow-right-black" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <RejectionReason closeModal={() => setReasonOpen(false)} />
      </Dialog>
    </div>
  );
};

const TutorLibrary = () => {
  return (
    <>
      <div className="mx-5 xl:mx-[136px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {resources.map((resource, index) => (
            <LibraryCard resource={resource} key={index} />
          ))}
        </div>
      </div>

      {/* <AppTable border={false}>
        <EmptyState
          title="No records"
          message="You have no records at the moment"
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
                  Create Document
                </Button>
              </DialogTrigger>
              <UploadResources closeModal={() => setOpenModal(false)} />
            </Dialog>
          }
        />
      </AppTable> */}
    </>
  );
};

export default TutorLibrary;
