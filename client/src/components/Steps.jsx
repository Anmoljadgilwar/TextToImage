import { assets } from "../assets/assets";
import { FaRegEye, FaMagic, FaDownload } from "react-icons/fa";

const Steps = () => {
  return (
    <div className=" w-full py-12 px-4">
      {/* How it works Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">How it works</h2>
        <p className="text-gray-500 text-base md:text-lg">
          Transform Words Into Stunning Images
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-6 mb-16">
        {/* Step 1 */}
        <div className="flex items-start bg-white rounded-xl shadow-sm p-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 mr-4 text-indigo-700 text-2xl">
            <FaRegEye />
          </span>
          <div>
            <div className="font-semibold text-lg mb-1">
              Describe Your Vision
            </div>
            <div className="text-gray-500 text-base">
              “Type a phrase, sentence, or paragraph that describes the image
              you want to create.”
            </div>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex items-start bg-white rounded-xl shadow-sm p-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 mr-4 text-indigo-700 text-2xl">
            <FaMagic />
          </span>
          <div>
            <div className="font-semibold text-lg mb-1">Watch the Magic</div>
            <div className="text-gray-500 text-base">
              “Our AI-powered engine will transform your text into a
              high-quality, unique image in seconds.”
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex items-start bg-white rounded-xl shadow-sm p-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 mr-4 text-indigo-700 text-2xl">
            <FaDownload />
          </span>
          <div>
            <div className="font-semibold text-lg mb-1">Download & Share</div>
            <div className="text-gray-500 text-base">
              “Instantly download your creation or share it with the world
              directly from our platform.”
            </div>
          </div>
        </div>
      </div>

      {/* AI Image Generator Intro Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-[350px] flex-shrink-0">
          {/* 
          <img 
            src={assets.your_image} 
            alt="AI Generated Example" 
            className="rounded-xl w-full shadow-md object-cover"
          />
          */}
          {/* Add your image asset above */}
          <div className="w-full aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            <img
              src={assets.temple}
              alt=""
              className="arounded-xl w-full shadow-md object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
            Introducing the AI-Powered Text to Image Generator
          </h3>
          <p className="text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don’t yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
