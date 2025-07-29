// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";

// const Result = () => {
//   const [image, setImage] = React.useState(assets.sample_img_1);
//   const [isImageLoaded, setIsImageLoaded] = React.useState(true);
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [input, setInput] = React.useState("");

//   const { generateImage } = useContext(AppContext);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (input) {
//       const img = await generateImage(input);
//       if (img) {
//         setImage(img);
//         setIsImageLoaded(true);
//       }
//     }

//     setIsLoading(false);
//   };

//   return (
//     <>
//       <motion.form
//         initial={{ opacity: 0.2, y: 100 }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         action=""
//         className="flex flex-col items-center justify-center min-h-[90vh] mt-8 "
//       >
//         <div>
//           <div className="relative">
//             <img src={image} alt="" className="max-w-sm rounded" />
//             <span
//               className={`absolute bottom-0 left-0 h-1 bg-blue-400 ${
//                 isLoading ? "w-full transition-all duration-[10s]" : "w-0"
//               } `}
//             />
//           </div>
//           <p className={isLoading ? "" : "hidden"}>Loading....</p>
//         </div>
//         {!isImageLoaded && (
//           <div className=" flex w-full max-w-xl bg-neutral-600 rounded-full mt-10 p-0.5 text-white ">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Describe what you want to generate"
//               className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
//             />
//             <button
//               type="submit"
//               className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-red-200 hover:scale-105 transition-all duration-400 "
//             >
//               Generate
//             </button>
//           </div>
//         )}

//         {isImageLoaded && (
//           <div className="flex gap-2 flex-wrap justify-center mt-10 text-white rounded-full ">
//             <p
//               className="bg-transparent border border-zinc-900 text-black px-8 py-2 rounded-full cursor-pointer"
//               onClick={() => {
//                 setIsImageLoaded(false);
//               }}
//             >
//               Generate Another
//             </p>
//             <a
//               href={image}
//               download
//               className="bg-zinc-800 text-white px-8 py-2 rounded-full cursor-pointer"
//             >
//               Download
//             </a>
//           </div>
//         )}
//       </motion.form>
//     </>
//   );
// };

// export default Result;

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Result = () => {
  const { generateImage } = useContext(AppContext); // ✅ fixed context usage

  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // ✅ better default
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const img = await generateImage(input);
      if (img) {
        setImage(img);
        setIsImageLoaded(true);
      }
    } catch (err) {
      console.error("Image generation failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-[90vh] mt-8"
    >
      {/* Image Display */}
      <div className="relative">
        <img src={image} alt="Generated" className="max-w-sm rounded" />
        {/* Loading progress bar */}
        <span
          className={`absolute bottom-0 left-0 h-1 bg-blue-400 ${
            isLoading ? "w-full animate-pulse" : "w-0"
          }`}
        />
      </div>
      {/* Loading text */}
      {isLoading && <p className="text-sm text-gray-600 mt-2">Loading...</p>}

      {/* Input form */}
      {!isImageLoaded && (
        <form
          onSubmit={onSubmitHandler}
          className="flex w-full max-w-xl bg-neutral-600 rounded-full mt-10 p-0.5 text-white"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-white"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-red-200 hover:scale-105 transition-all duration-400"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </form>
      )}

      {/* After image is loaded */}
      {isImageLoaded && !isLoading && (
        <div className="flex gap-2 flex-wrap justify-center mt-10 text-white">
          <p
            className="bg-transparent border border-zinc-900 text-black px-8 py-2 rounded-full cursor-pointer"
            onClick={() => setIsImageLoaded(false)}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-800 text-white px-8 py-2 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default Result;
