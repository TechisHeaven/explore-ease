import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";

const Catogery = () => {
  let catogeryItem = [
    {
      name: "Beach",
      img: "https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
    {
      name: "Temple",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg",
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const controls = useAnimation();

  const scrollToItem = async (itemIndex) => {
    await controls.start({ x: itemIndex * -10 + "vw" }); // Adjust the scroll distance
    setCurrentItem(itemIndex);
  };
  const nextItem = () => {
    const nextIndex = (currentItem + 1) % catogeryItem.length;
    scrollToItem(nextIndex);
  };

  const prevItem = () => {
    const prevIndex =
      currentItem === 0 ? catogeryItem.length - 1 : currentItem - 1;
    scrollToItem(prevIndex);
  };

  useEffect(() => {
    scrollToItem(currentItem);
  }, [currentItem]);

  return (
    <div className=" bg-[#f4edf7]">
      <div className="main max-w-[1280px] flex-col  sm:flex-row p-12 m-auto flex justify-between">
        <div className="headings">
          <h1 className="font-bold text-4xl text-[#423d44] p-2">Catogories</h1>
          <p className="text-base sm:text-lg capitalize text-[#423d44] p-2 break-words w-[100%] sm:w-[430px]">
            much destinations here don't be confuse! it's already grouped by
            category
          </p>
        </div>
        <div className="buttons">
          <button
            onClick={prevItem}
            duration={500}
            className="back m-2 focus:bg-[#3f4579] focus:text-white hover:scale-105 hover:bg-[#3f4579] hover:text-white  transition-all p-4 border-[#3f4579] border rounded-full text-[#423d44]"
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={nextItem}
            className="next  m-2 hover:scale-105 focus:bg-[#3f4579] focus:text-white hover:bg-[#3f4579] hover:text-white transition-all rounded-full border p-4 border-[#3f4579]"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="catog-item flex gap-8 overflow-hidden max-w-[1280px] m-auto px-12">
        {catogeryItem.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ x: index === 0 ? 0 : "100vw" }}
              animate={controls}
              className="item w-40 h-56 aspect-square flex items-center flex-col gap-2"
            >
              <img
                src={item.img}
                initial={{ x: index === 0 ? 0 : "100vw" }}
                animate={controls}
                className="aspect-square rounded-t-full object-cover"
                alt="image catogery"
              />
              <p className="beach text-2xl font-semibold text-[#423d44]">
                {item.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Catogery;
