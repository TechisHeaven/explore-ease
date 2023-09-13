import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-[1280px] w-full m-auto p-2 py-6">
      <div className="logo text-2xl font-bold text-gradient">ExploreEase</div>
      <div className="nav-items hidden sm:block">
        <ul className="flex gap-4 font-normal text-[#999999] text-base">
          <li className="text-[#3f4579] font-semibold active">Home</li>
          <li>Booking form </li>
          <li>Category</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="login font-semibold">
        <button className=" loginbtn mr-2 py-2 px-6 text-[#3f4579] rounded-md">
          Log in
        </button>
        <button className="py-2 px-6 rounded-md text-white  bg-[#3f4579] hover:bg-[#2d3156] transition-colors">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
