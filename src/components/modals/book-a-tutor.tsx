"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AppModal } from "../reusables/AppModal";

import { Badge } from "../ui/badge";
import Icon from "../reusables/AppIcon";
import { Dialog, DialogTrigger } from "../ui/dialog";
import SendTutorMessage from "./send-tutor-message";


type Stat = {
    students: number;
    classes: number;
}

interface Tutor {
    firstName: string;
    lastName: string;
    rating: number;
    ratingCount: number;
    experience: number;
    grade: string;
    major: string;
    location: string;
    state: string;
    country: string;
    stats: Stat
}

interface Subject {
  name: string;
}

interface PageProps {
    closeModal: () => void,
    tutor: Tutor | null
}



const subjects: Subject[] = [{ name: "mathematics" }, { name: "english" }];

const BookATutor = ({
  closeModal,
  tutor
}: PageProps) => {
  const [openMessage, setOpenMessage] = useState(false);
  
  const handleOpenMessageModal = () => {
    setOpenMessage(true)
  }
  return (
    <div>
      <AppModal
        title={'Tutors Profile'}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
              Resources for your students
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
            <div>
                <div className="bg-neutral-50 border border-neutral-100">
                    <div className="p-[28px]">

                        <div className="flex items-start gap-x-3 font-sans">
                            <Icon
                            icon={"dp"}
                            type="images"
                            className="rounded"
                                width={64}
                                height={64}
                            />
                            <div className="flex flex-col divide-y justify-between ">
                                <div className="pb-2 flex flex-wrap items-end gap-2">
                                    <div>
                                    <p className="flex gap-2 items-center">
                                        <span className="block font-normal text-xs md:text-base/[15.4px] tracking-[-1px] capitalize text-neutral-950">
                                        <b className="font-semibold"> {tutor?.firstName}</b> {tutor?.lastName}
                                        </span>
                                        <Icon icon={"shield-star"} width={16} height={16} />
                                    </p>
                                    <span className="font-normal text-[11px]/[15.4px] text-neutral-700">
                                        {tutor?.experience} years of experience
                                    </span>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="mt-8">
                            <p className="text-[11px] text-neutral-400 pb-2">Subjects of expertise</p>
                            <div className="flex items-center flex-wrap gap-1">
                            {subjects.map((subject) => (
                                <Badge
                                    className="bg-neutral-100 rounded-full py-[4.1px] px-[6.83px] font-normal text-[8px]/[11.2px] text-neutral-950 capitalize"
                                    key={subject.name}
                                >
                                    {subject.name}
                                </Badge>
                            ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <p className="text-[11px] text-neutral-400 pb-2">About you and your approach</p>
                            <p className="text-[12px] text-neutral-950 font-semibold">I am a teacher with 5 years of experience with expertise in communication</p>
                        </div>

                        <div className="mt-4">
                            <p className="text-[11px] text-neutral-400 pb-2">Location</p>
                            <p className="text-[12px] text-neutral-950 font-semibold">{tutor?.location}, {tutor?.state}, {tutor?.country}</p>
                        </div>

                    </div>
                    <div className="bg-white">
                        <div className="p-[28px]">
                            <div className="">
                                <p className="text-[11px] text-neutral-400 pb-2">Credential</p>
                                <p className="text-[12px] text-neutral-950 font-semibold">UNILAG, BSc. Mathematics, UNILSG, MSc. Mathematics</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-[11px] text-neutral-400 pb-2">Location</p>
                                <p className="text-[12px] text-neutral-950 font-semibold">{tutor?.location}, {tutor?.state}, {tutor?.country}</p>
                            </div>

                            <div className="flex items-start sm:items-center justify-between flex-row gap-1.5 pt-2">
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <span className="text-[11px] text-neutral-400 font-normal">Teaches</span>
                                    </div>
                                    <div>
                                        <span className="text-[12px] text-neutral-950 font-semibold">Grade {tutor?.grade} {tutor?.major}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <span className="text-[11px] text-neutral-400 font-normal">Hourly rate</span>
                                    </div>
                                    <div>
                                        <div className="text-[12px] text-neutral-950 font-semibold">
                                            <span>N3,500</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-[11px] text-neutral-400 pb-2">Available days & Time</p>
                                <p className="text-[12px] text-neutral-950 font-semibold">Mondays 3pm, Thursdays 12pm, Fridays 4pm</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button onClick={handleOpenMessageModal} className="w-full flex items-center justify-center bg-primary-50 rounded-[4px] p-[20px] h-[52px] text-primary-500">
                                Send a Message <Icon icon="dialog-bubble" width={16} height={16} />
                            </Button>
                        </DialogTrigger>

                        {openMessage && <SendTutorMessage closeModal={() => setOpenMessage(false)} />}
                    </Dialog>
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
              Book Tutor
            </Button>
          </>
        }
      />
    </div>
  );
};

export default BookATutor;
