import { plans } from "../assets/assets";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className=" border border-gray-400 rounded-full mb-6 px-10 py-2">
        Our Plans
      </button>
      <h1 className="text-3xl font-medium text-center mb-6 sm:mb-10 ">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-md border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-4 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-2xl font-medium"> ${item.price}</span> /
              {item.credits} credits
            </p>
            <button className="w-full mt-8 py-2 bg-black text-white bg-gray-800 min-w-52 rounded-md text-sm">
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
