import React from "react";
import { AiOutlineSmile } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { LuSend } from "react-icons/lu";

const AboutHome = () => {
  return (
    <div className="max-w-[1280px] m-auto p-12 py-32 flex flex-col gap-12 sm:flex-col md:flex-row items-center">
      <div className="img-container flex-1 relative">
        <div className="qoutes">
          <div className="item-1 hover:shadow-2xl transition-all capitalize item shadow-lg text-[#423d44] flex items-start gap-2 p-4 pr-12 top-0 sm:top-10 -left-10 absolute">
            <div className="icon bg-gray-200 text-2xl rounded-md p-2">
              <AiOutlineSmile />
            </div>
            <div>
              <p className="font-bold text-3xl ">5000+</p>

              <p className="text-base">customers</p>
            </div>
          </div>
          <div className="item-2 hover:shadow-2xl transition-all capitalize item shadow-lg text-[#423d44] flex items-start gap-2 p-4 pl-12 right-0 sm:right-10 top-[50%] absolute">
            <div className="icon bg-gray-200 text-2xl rounded-md p-2">
              <LuSend />
            </div>
            <div>
              <p className="font-bold text-3xl">600+</p>

              <p className="text-base">destinations</p>
            </div>
          </div>
          <div className="item-3 hover:shadow-2xl transition-all capitalize item shadow-lg text-[#423d44] flex items-start gap-2 p-6 pr-4 -left-10 -bottom-10 absolute">
            <div className="icon bg-gray-200 text-2xl rounded-md p-2">
              <BsFlag />
            </div>
            <div>
              <p className="font-bold text-3xl">100+</p>

              <p className="text-base break-words w-40">
                proffesional tour guide
              </p>
            </div>
          </div>
        </div>
        <img className="w-[500px]" src="./about-home.webp" alt="about-home" />
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-4xl text-[#444046]">
          Why Choose <span className="text-[#3f4579]">Explore</span>Ease?
        </h1>
        <p className="py-4 xl:text-xl lg:text-base  text-[#999999]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sit,
          laboriosam rem dicta impedit eveniet nulla et maiores, molestias
          voluptas doloribus sunt. Corrupti maxime adipisci autem, voluptates
          tempore odit minima? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nihil consectetur corrupti quia eligendi, molestiae
          expedita consequuntur odio autem optio molestias pariatur, architecto
          alias culpa. Quam et modi iure eligendi earum.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
