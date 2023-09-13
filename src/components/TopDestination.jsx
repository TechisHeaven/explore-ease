import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const TopDestination = () => {
  const destination = [
    { img: "./1.png" },
    {
      img: "./2.png",
    },
    {
      img: "./3.png",
    },
    {
      img: "./1.png",
    },
    {
      img: "./2.png",
    },
  ];

  useEffect(() => {
    // Preload images
    destination.forEach((item) => {
      const image = new Image();
      image.src = item.img;
    });
  }, [destination]);

  return (
    <div className="max-w-[1280px] m-auto p-0 sm:p-12 text-center">
      <div className="heading capitalize">
        <h1
          className="text-5xl font-bold 
        p-4 text-[#444046]"
        >
          Top Destination for you
        </h1>
        <p>
          much places suit your mood. Explore somewhere interesting and enjoy
          the vibes!
        </p>
      </div>
      <div className="cards grid p-12 py-16">
        {destination.map((item, index) => {
          return (
            <div
              key={index}
              className="card bg-white p-4 border shadow-lg rounded-lg relative"
            >
              <div className="wrapper w-full aspect-square text-start flex flex-col gap-2">
                <img
                  className="aspect-square object-cover"
                  src={item.img}
                  loading="lazy"
                  alt="beach"
                />
                <h1 className="font-semibold text-xl">Lavender fields</h1>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consetur adipisicing elit.
                </p>
                <div className="flex justify-between text-sm text-[#3f4579]">
                  <div className="flex items-center">
                    <ImLocation />
                    <p className="mx-1">Drome,France</p>
                  </div>
                  <div className="flex items-center">
                    <BiSolidDollarCircle />
                    <p>
                      <span className="text-base font-semibold mx-1">150</span>
                      /package
                    </p>
                  </div>
                </div>
                <div className="planTrip bg-[#3f4579] absolute -bottom-14 items-center text-center justify-center gap-2 capitalize rounded-b-xl w-full left-0 text-white flex p-4">
                  <p>plan trip now</p>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-white bg-[#3f4579] px-8 p-4 rounded-xl hover:shadow-xl transition-shadow">
        view all destination
      </button>
    </div>
  );
};

export default TopDestination;
