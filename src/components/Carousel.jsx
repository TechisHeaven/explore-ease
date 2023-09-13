import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  //auto run slider ref
  // useEffect(() => {
  //   let slidesAuto = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //   }, 3000);

  //   return () => {
  //     clearInterval(slidesAuto);
  //   };
  // }, []);

  return (
    <div className="relative overflow-hidden py-10">
      <div className="carousel max-w-[1280px] m-auto relative flex">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="carousel-inner overflow-hidden w-full relative rounded-3xl m-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="mx-auto h-[600px] w-full object-cover"
            />
            <div className="absolute top-0 left-[50%] translate-x-[-50%] py-6 w-full">
              <p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center capitalize mt-4 text-[#3f4579] font-semibold text-base"
              >
                All you need is exploreEase
              </p>
              <h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center text-6xl capitalize mt-4 font-bold text-[#423d44]"
              >
                Explore Beautiful places
              </h1>
            </div>
            <div className="place-items  items-center flex flex-row gap-4  absolute top-[30%] left-[50%] translate-x-[-50%]">
              <button
                onClick={prevSlide}
                className="back hover:scale-105  transition-all p-4 border-[#3f4579] border rounded-full text-[#423d44]"
              >
                <AiOutlineArrowLeft />
              </button>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-2xl capitalize text-[#423d44] font-semibold"
              >
                {slides[currentIndex].text}
              </motion.p>
              <button
                className="next hover:scale-105 transition-all rounded-full border p-4 border-[#3f4579]"
                onClick={nextSlide}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
