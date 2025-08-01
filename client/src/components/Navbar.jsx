import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import "../index.css";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex px-6 py-1 bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-300 text-black">
        <div className="mr-auto flex items-center gap-2 bg-gradient-to-br from-violet-200 via-purple-500 to-indigo-300 px-2 rounded-3xl">
          <Link to="/">
            <img src={assets.logo} alt="" className=" w-8 sm:w-10 lg:w-10" />
          </Link>
          <Link to="/">
            <p className="name">Quick Visuals</p>
          </Link>
        </div>

        <div>
          {user ? (
            <div className="creditsbtn flex items-center gap-2 sm:gap-3 ">
              <button
                onClick={() => navigate("/buy")}
                className="flex items-center gap-2 sm:gap-3 bg-violet-300  px-4 sm:px-6 py-0 sm:py-2 rounded-full transition-all duration-700 hover:scale-105 "
              >
                <img alt="" src={assets.credit_star} className="w-5 " />
                <p>credit left: {credit}</p>
              </button>
              <p className="text-black pl-4 max-sm:hidden  ">
                {" "}
                Hi, {user.name}
              </p>
              <div className="relative group ">
                <img
                  src={assets.profile_icon}
                  className="w-10 drop-shadow "
                  alt=""
                />
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                  <ul>
                    <li
                      onClick={logout}
                      className="bg-violet-100 rounded-b-sm cursor-pointer p-1"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-5 mt-0.5 md:mt-1 mr-2">
              <p onClick={() => navigate("/buy")} className="cursor-pointer ">
                Pricing
              </p>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-zinc-800 text-white py-1 px-7 md:py-2 rounded-full sm:px-8 text-sm"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
