import { assets } from "../assets/assets";
import Steps from "./Steps";
import Testimonials from "./Testimonials";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20 ">
      <div className="text-stone-500 flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best AI Tool for your Image Genaration</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-5xl sm:max-w-[600px] mx-auto mt-10 text-center font-normal">
        Turn Your Text into Stunning{" "}
        <span className="text-blue-500">Images</span>
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - with just a few words.
      </p>

      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Ganarate Images
        <img className="h-6" src={assets.star_group} />
      </button>
      <div className="flex justify-center items-center gap-3 mt-12">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              className="w-70 rounded hover:scale-105 transition-all duration-600 cursor-pointer max-sm:w-60"
            />
          ))}
      </div>

      <p>generated images by Imagify</p>

      {/*  */}
      <Steps />

      <Testimonials />
    </div>
  );
};

export default Header;
