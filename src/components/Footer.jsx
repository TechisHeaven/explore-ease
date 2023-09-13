import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="wrapper text-center sm:text-left max-w-[1280px] m-auto px-12 py-12 flex flex-col sm:flex-row justify-between">
        <div className="heading text-[#999999] flex gap-4 flex-col">
          <h1 className="text-[#3f4579] font-semibold text-2xl">ExploreEase</h1>
          <p>Enjoy the touring with ExploreEase</p>
          <div className="icons flex justify-center sm:justify-start gap-2 text-xl">
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoInstagram />
          </div>
        </div>
        <div className="menus capitalize flex flex-col sm:flex-row justify-between w-full text-[#999999] ">
          <div className="item ">
            <h1 className="text-lg text-[#444046] font-semibold">Menu</h1>
            <p>Home</p>
            <p>About us</p>
          </div>
          <div className="item">
            <h1 className="text-lg text-[#444046] font-semibold">
              Booking Plan
            </h1>
            <p>Personal Trip</p>
            <p>Group Trip</p>
          </div>
          <div className="item">
            <h1 className="text-lg text-[#444046] font-semibold">
              Furture Information
            </h1>
            <p>Term and conditions</p>
            <p>Privacy policy</p>
          </div>
          <div className="item">
            <h1 className="text-lg text-[#444046] font-semibold">Get App</h1>
            <p>App Store</p>
            <p>Google play store</p>
          </div>
        </div>
      </div>
      <div className="copyright capitalize flex  items-center  text-center justify-center gap-1 text-lg text-[#444046] p-4">
        copyright <AiOutlineCopyrightCircle /> {new Date().getFullYear()}{" "}
        ExploreEase. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
