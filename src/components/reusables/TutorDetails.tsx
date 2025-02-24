import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";

interface Subject {
  name: string;
}
const subjects: Subject[] = [
  { name: "mathematics" },
  { name: "english" },
  { name: "physics" },
  { name: "chemistry" },
];

const TutorDetails = ({ height, width }: { height: number; width: number }) => {
  return (
    <div className="flex items-start gap-x-3 font-sans">
      <Image
        src={"/assets/images/dp.png"}
        className="rounded"
        width={width}
        height={height}
        alt="tutor-image"
      />
      <div className="flex flex-col divide-y justify-between ">
        <div className="pb-2 flex flex-wrap items-end gap-2">
          <div>
            <p className="flex gap-2 items-center">
              <span className="block font-normal text-xs md:text-base/[15.4px] tracking-[-1px] capitalize text-neutral-950">
                <b className="font-semibold"> Ebenezer</b> Akin
              </span>
              <Image
                src={"/assets/icons/shield-star.png"}
                alt="bage"
                width={16}
                height={16}
              />
            </p>
            <span className="font-normal text-[11px]/[15.4px] text-neutral-700">
              5 years of experience
            </span>
          </div>
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
        <div className="flex items-center flex-wrap gap-1.5 pt-2">
          <p className="flex items-center gap-1">
            <span className="font-normal text-[10px]/[14px] text-neutral-500">
              BSc. Mathematics
            </span>
            <Image
              src={"/assets/icons/line.png"}
              width={12}
              height={12}
              alt="line"
            />
            <span className="font-normal text-[11px]/[15.4px] text-neutral-950 uppercase">
              unilag
            </span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-normal text-[10px]/[14px] text-neutral-500 capitalize">
              teaches
            </span>
            <Image
              src={"/assets/icons/line.png"}
              width={12}
              height={12}
              alt="line"
            />
            <span className="font-normal text-[11px]/[15.4px] text-neutral-950 uppercase">
              grade 1-6
            </span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-normal text-[10px]/[14px] text-neutral-500">
              Hourly rate
            </span>
            <Image
              src={"/assets/icons/line.png"}
              width={12}
              height={12}
              alt="line"
            />
            <span className="font-semibold text-[11px]/[15.4px] text-primary-500">
              N3,500
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
