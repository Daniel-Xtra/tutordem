import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from 'framer-motion';
import LayoutImageSlider from "@/components/reusables/LayoutImageSlider";
import LayoutTextSlider from "@/components/reusables/LayoutTextSlider";

interface SlidesInterface {
  title: React.ReactNode;
  description: string;
  image?: string;
}

const firstSlideTitle = () => {
  return (
    <h2 className="text-2xl lg:text-[28px] font-semibold font-sans">
      Teach and earn with TutorDem
    </h2>
  );
};

const secondSlideTitle = () => {
  return (
    <h2 className="text-2xl lg:text-[28px] font-semibold font-sans">
      Teach and earn with TutorDem
    </h2>
  );
};

const thirdSlideTitle = () => {
  return (
    <h2 className="text-2xl lg:text-[28px] font-semibold font-sans">
      Teach and earn with TutorDem
    </h2>
  );
};

const slides: SlidesInterface[] = [
  {
    title: firstSlideTitle(),
    description: "Create gamified quizzes becomes simple",
    image: "/assets/images/bg1.png",
  },
  {
    title: secondSlideTitle(),
    description: "Create gamified quizzes becomes simple",
    image: "/assets/images/bg2.png",
  },
  {
    title: thirdSlideTitle(),
    description: "Create gamified quizzes becomes simple",
    image: "/assets/images/bg2.png",
  },
];

const LayoutWithBg = ({ children }: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  if (!currentPath) return null;

  return (
    <section className="flex flex-1">
      {currentPath === "/" && <LayoutTextSlider slides={slides} />}
      {currentPath !== "/" && <LayoutImageSlider slides={slides} />}
      {/* Form Section */}
      <main className="w-full lg:w-7/12 ml-auto h-screen ">
        <div className="px-5 lg:px-[145px] mx-auto pt-28 lg:pt-40 pb-10">
          {children}
        </div>
      </main>
    </section>
  );
};

export default LayoutWithBg;
