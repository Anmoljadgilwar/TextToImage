import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white sm:flex flex-row  items-center justify-center py-4  md:gap-160 mt-20 w-full ">
      <div className="">
        <img src={assets.logo} alt="" width={140} />
        <p>Copyright © 2025 TextToImage | All rights reserved</p>
      </div>

      <div className="flex  gap-2.5 text-sm max-sm:inline-table">
        <img src={assets.facebook_icon} alt="" width={40} />
        <img src={assets.twitter_icon} alt="" width={40} />
        <img src={assets.instagram_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
