"use client";
import BookATutor from "@/components/modals/book-a-tutor";
import AppFormInput from "@/components/reusables/AppFormInput";
import Icon from "@/components/reusables/AppIcon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

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

const tutors: Tutor[] = [
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  },
  {
    firstName: 'Ebenezer',
    lastName: 'Akin',
    rating: 4.0,
    ratingCount: 15,
    experience: 5,
    grade: '1-6',
    major: 'Jamb',
    location: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    stats: {
      students: 24,
      classes: 64
    }
  }
]

const TutorCard = ({ tutor }: { tutor: Tutor }) => {
  const [openViewProfile, setOpenViewProfile] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const handleOpenViewProfile = () => {
    setSelectedTutor(tutor);
    setOpenViewProfile(true);
  }
  return (
    <>
      <div className="bg-neutral-50 rounded-[8px]  flex flex-col border border-neutral-100 space-y-4">
        <div className=" flex flex-col py-[28px] px-[24px] space-y-4">
          <div className="flex items-start gap-x-3 font-sans">
            <div>
              <Icon
                icon={"dp"}
                type="images"
                className="rounded"
                width={62}
                height={62}
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="flex gap-2 items-center">
                    <span className="block font-normal text-xs md:text-base/[15.4px] tracking-[-1px] capitalize text-neutral-950">
                      <b className="font-semibold"> {tutor.firstName}</b> {tutor.lastName}
                    </span>
                    <Icon icon={"shield-star"} width={16} height={16} />
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold flex items-center gap-2">{tutor.rating} <Icon icon="star" width={18} height={18} /> ({tutor.ratingCount})</span>
                  </p>
                </div>
              </div>
              <div>
                <span className="font-normal text-[12px] text-neutral-700">
                  {tutor.experience} years of experience | Grade {tutor.grade}, {tutor.major}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-1.5 pt-2">
            <div className="flex flex-col space-y-4">
              <div>
                <span className="text-[11px] text-neutral-400 font-normal">Location</span>
              </div>
              <div>
                <span className="text-[12px] text-neutral-950">{tutor.location}, {tutor.state}, {tutor.country}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <span className="text-[11px] text-neutral-400 font-normal">Stats</span>
              </div>
              <div>
                <div className="flex flex-row items-center space-x-4 text-[12px] text-neutral-950">
                  <span>{tutor.stats.students} Students</span>
                  <GoDotFill className="text-neutral-700" />
                  <span>{tutor.stats.classes} Classes</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-[28px] px-[24px]">
          <div className="flex flex-row gap-x-4">
            <Button className="bg-[#783BF933] opacity-[0.8] flex p-[20px] rounded-[4px] h-[52px]">
              <span className="text-primary-500 font-bold">Book Tutor</span> <Icon icon="stars" width={24} height={24} />
            </Button>
            <Button className="bg-neutral-100 opacity-[0.8] flex p-[20px] rounded-[4px] h-[52px]">
              <Icon icon="chat-line" width={16} height={16} />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                  <Button onClick={handleOpenViewProfile} className="bg-transparent flex p-[20px] rounded-[4px] h-[52px]">
                    <span className="text-neutral-900">View profile</span> <Icon icon="arrow-right-black" width={16} height={16} />
                  </Button>
              </DialogTrigger>

              {openViewProfile && (
                <BookATutor tutor={selectedTutor} closeModal={() => setOpenViewProfile(false)} />
              )}
            </Dialog>
            
          </div>
        </div>
      </div>
    </>
  )
}

const TutorsFeature = () => {
  return (
    <>
      <div className="py-8 font-sans flex flex-col md:flex-row md:items-center md:justify-between mx-5 xl:mx-[136px]">
        <div className="space-y-1 w-full md:w-1/2">
          <h2 className="font-medium md:font-semibold text-sm/[19.6px] md:text-lg/[25.2px] capitalize text-neutral-950">
            tutors
          </h2>
          <p className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400">
            Track and manage information and activities.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-2 w-full md:w-1/2 space-y-2 md:space-y-0 pt-4 md:pt-0">
          <div className="w-full md:max-w-[300px] lg:max-w-[400px]">
            <AppFormInput
              placeholder="Search for tutors"
              showRightIcon={true}
              rightIcon={
                <CiSearch className="mr-2 h-4 w-4 shrink-0  text-neutral-950" />
              }
            />
          </div>
          <div className="w-full md:w-auto">
            <Button className="w-full bg-primary-25 text-primary-500 p-[16px] h-[52px] rounded-sm">Search</Button>
          </div>
          <div className="w-full md:w-auto">
            <Button className="w-full text-neutral-950 p-[16px] h-[52px] rounded-sm flex border border-neutral-200">
              Filter <Icon icon="filter" width={18} height={18} />
            </Button>
          </div>
        </div>
      </div>

      <p className="font-medium text-sm/[19.6px] text-neutral-950 mx-5 xl:mx-[136px] flex items-center gap-2">
        <span className="font-semibold">Top Rated Tutors</span>
        <span><Icon icon="line" width={18} height={18} /></span>
        <span className="font-semibold flex items-center gap-2">4.0 <Icon icon="star" width={18} height={18} /></span>
      </p>

      <div className="mx-5 xl:mx-[136px] mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TutorsFeature;
