/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import { useState } from "react";
import { Button as UIButton } from "@/components/ui/button";
import Button from "@/components/reusables/Button";
import { FilePenLine, Plus } from "lucide-react";
import { Button as ShadBtn } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/reusables/ProfileCard";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddChild from "@/components/modals/add-child";
import { Student } from "@/models/types";

const StudentView = ({ students }: { students: Student[] }) => {
  if (students) {
    return (
      <div className="flex flex-col gap-4 px-[20px] py-[32px] lg:px-[60px] mt-4 lg:py-[48px]">
        {students.map((student, index) => (
          <ProfileCard
            key={index}
            letter={student.shortName}
            name={student.firstName + " " + student.lastName}
            email={student.email}
            showActionBtns={true}
          />
        ))}
      </div>
    );
  }
};

const AddWard = () => {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/success");
  };

  const handleAddChild = (newStudent: Student) => {
    console.log("at what point???", newStudent);
    setStudents([...students, newStudent]);
    setAddChildOpen(false);
  };

  const [addChildOpen, setAddChildOpen] = useState(false);

  return (
    <section className="flex flex-1 bg-white lg:bg-neutral-100 min-h-screen">
      <main className="w-full flex items-start lg:items-center justify-center mt-28 mb-9">
        <div className="w-full flex items-start lg:items-center justify-center">
          <div className="bg-white rounded-[20px] w-full max-w-[616px]">
            <div className=" py-[32px] lg:py-[48px] px-4 lg:px-[60px] bg-neutral-25 lg:rounded-tr-[20px] lg:rounded-tl-[20px]">
              <span className="text-2xl md:text-3xl mb-4 font-semibold text-neutral-950 mt-2 tracking-tighter">
                Add your child/ward
              </span>
              <p className="font-normal text-xs md:text-sm mt-2">
                Every child learns differently
              </p>
            </div>

            {students.length === 0 && (
              <div className="px-4 sm:px-8 md:px-[60px] py-6 sm:py-8 md:py-[28px] flex flex-col bg-white">
                <div className="flex sm:flex-row items-center justify-between p-4 sm:p-6 md:p-[24px] border border-[#E4E7EC] rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-100 rounded-md">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-primary-500 rounded-full">
                        <Plus color="#1c274c" />
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-950 text-sm sm:text-[15px] md:text-[16px] font-semibold">
                        Add your first child/ward
                      </p>
                    </div>
                  </div>

                  <div>
                    <ShadBtn className="border text-neutral-300">
                      <FilePenLine />
                      <span className="hidden md:block">Edit</span>
                    </ShadBtn>
                  </div>
                </div>
              </div>
            )}

            <StudentView students={students} />

            <Dialog open={addChildOpen} onOpenChange={setAddChildOpen}>
              <DialogTrigger className="cursor-pointer" asChild>
                <div className="flex items-center justify-center space-x-2 md:bg-white ">
                  <span className="text-primary-500 font-semibold cursor-pointer">
                    Add child
                  </span>
                  <div className="cursor-pointer flex items-center justify-center w-[13.33px] h-[13.33px] bg-primary-500 opacity-50 rounded-full">
                    <Plus color="#DBD3FD" />
                  </div>
                </div>
              </DialogTrigger>
              <AddChild
                closeModal={() => setAddChildOpen(false)}
                onSubmit={handleAddChild}
              />
            </Dialog>

            <div className="bg-white mt-8  flex items-center justify-center px-6 lg:border-t-[0.5px] lg:border-t-neutral-200 h-[120px] rounded-b-[20px]">
              <div className="hidden md:block ">
                <UIButton
                  disabled={!students.length}
                  type="button"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleClick(e)
                  }
                  className="w-full md:w-[516px] mt-6 md:mb-8 flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700 disabled:bg-neutral-300 disabled:opacity-80 h-[56px]"
                >
                  Continue
                  <Image
                    src="/assets/icons/arrow-right-white.svg"
                    alt="icon"
                    width={20}
                    height={10}
                  />
                </UIButton>
              </div>
              <div className="block md:hidden absolute px-4 bottom-2 left-0 w-full pb-6">
                <UIButton
                  disabled={!students.length}
                  type="button"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleClick(e)
                  }
                  className="w-full md:w-[516px] mt-6 md:mb-8 flex items-center justify-center bg-primary-500 text-white text-sm hover:bg-primary-700 disabled:bg-neutral-300 disabled:opacity-80 h-[56px]"
                >
                  Continue
                  <Image
                    src="/assets/icons/arrow-right-white.svg"
                    alt="icon"
                    width={20}
                    height={10}
                  />
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AddWard;
