import React from "react";
import { assets } from "../assets/assets";

const GenerateBtn = () => {
  return (
    <>
      <div className="pd-16">
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl mt-4 py-6 md:py-16">
          See the magic, try now
        </p>

        <button className="inline-flex items-center gap-2 md:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-600">
          Generate Images
          <img src={assets.star_group} alt="" className="h-6" />
        </button>
      </div>
    </>
  );
};

export default GenerateBtn;
