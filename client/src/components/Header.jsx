import { assets } from "../assets/assets";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import GenerateBtn from "./GenerateBtn";
import { motion, scale } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
      // document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <ThemeToggle />
      </div>
      <div className="flex flex-col justify-center items-center text-center my-20 ">
        <motion.div
          className="text-stone-600 flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>Best AI Tool for your Image Genaration</p>
          <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1
          className="text-4xl max-w-[300px] sm:text-5xl sm:max-w-[600px] mx-auto mt-10 text-center font-normal"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 2 }}
          animate={{ opacity: 1 }}
        >
          Turn Your Text into Stunning{" "}
          <span className="text-blue-500">Images</span>
        </motion.h1>
        <motion.p
          className="text-center max-w-xl mx-auto mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds - with just a few words.
        </motion.p>

        <motion.button
          onClick={onClickHandler}
          className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            default: { duration: 0.5 },
            opacity: { delay: 0.8, duration: 1 },
          }}
        >
          Ganarate Images
          <img className="h-6" src={assets.star_group} />
        </motion.button>

        <motion.div
          className="flex overflow-x-auto scrollbar-hide justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {Array(6)
            .fill("")
            .map((item, index) => (
              <img
                src={
                  index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                }
                alt=""
                key={index}
                className="w-46 rounded hover:scale-105 transition-all duration-600 cursor-pointer max-sm:w-60"
              />
            ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          generated images by Quick-Visual
        </motion.p>

        <Steps />
        <Testimonials />
        <GenerateBtn />
      </div>
    </motion.div>
  );
};

export default Header;
