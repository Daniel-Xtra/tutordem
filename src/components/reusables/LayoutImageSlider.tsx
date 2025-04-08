import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlidesInterface {
  title: React.ReactNode;
  description: string;
  image?: string;
}

const LayoutImageSlider = ({
  slides: slides,
}: {
  slides: SlidesInterface[];
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentBgImage, setCurrentBgImage] = React.useState(
    "/assets/images/bg1.png"
  );

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setCurrentBgImage(slides[index].image || "/assets/images/bg1.png");
    console.log(currentBgImage);
  };

  return (
    <section className="hidden lg:w-5/12 h-screen lg:flex items-center justify-center fixed left-0">
      <AnimatePresence mode="wait">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${currentBgImage})`,
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundPosition: "bottom center",
          }}
        >
          <div className="relative h-full bg-black bg-opacity-40">
            <div className="py-12 md:py-16 text-white mt-16 mx-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="slide-content px-4 lg:px-8 xl:px-[78px] pt-6 xl:pt-16"
                >
                  {slides[currentSlide].title}
                  <div className="my-2 text-sm lg:text-[16px] leading-relaxed">
                    {slides[currentSlide].description}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center px-4 lg:px-8 xl:px-[78px] space-x-2 mt-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer ${
                      currentSlide === index
                        ? "bg-white p-2 w-4 h-4 rounded-full flex items-center justify-center"
                        : "bg-white p-1 w-2 h-2 rounded-full"
                    }`}
                    onClick={() => handleSlideChange(index)}
                  >
                    {currentSlide === index && (
                      <div className="border-primary-500 border-2 bg-white p-1 rounded-full w-2 h-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default LayoutImageSlider;
