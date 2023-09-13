import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RiSearch2Line } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";

const SearchFilter = () => {
  const [guestCount, setGuestCount] = useState("add guest");
  return (
    <div className="searchFilter -translate-y-20 w-[100%] fixed bg-white  bottom-0 sm:relative md:w-[90%] transition-all lg:w-[80%] m-auto max-w-[1200px] mx-auto">
      <div className="wrapper bg-white shadow-lg hover:shadow-xl hidden sm:flex transition-shadow rounded-xl px-10 py-6">
        <div className="location capitalize flex-1">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className=" rounded-full bg-gray-300 p-2">
              <CiLocationOn />
            </div>
            <p>location</p>
          </div>
          <input
            className="outline-none text-lg pt-4"
            type="text"
            placeholder="where you want to go?"
          />
        </div>
        <div className="date flex-1">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className=" rounded-full bg-gray-300 p-2">
              <BsCalendarDate />
            </div>
            <p>Date</p>
          </div>
          <input
            className="text-lg pt-4 outline-none"
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="guests capitalize flex-1">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="rounded-full bg-gray-300 p-2">
              <BiMaleFemale />
            </div>
            <p>guests</p>
          </div>
          <div className="flex gap-2 text-lg pt-4 ">
            <button
              onClick={() => setGuestCount(guestCount > 0 ? guestCount - 1 : 0)}
            >
              <AiOutlineMinus />
            </button>
            <p className="text-[#999999]">{guestCount}</p>
            <button
              onClick={() =>
                setGuestCount(guestCount !== "add guest" ? guestCount + 1 : 1)
              }
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className="search mx-4 flex bg-[#2d3156] text-white p-4 rounded-md">
          <button>
            <RiSearch2Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
