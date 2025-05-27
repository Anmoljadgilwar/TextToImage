import { React, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <div>
        <Link to="/">
          <img src={assets.logo} alt="" className="w-25 sm:w-32 lg:w-40" />
        </Link>
      </div>

      <div>
        {user ? (
          <div className="div"></div>
        ) : (
          <div className="div">
            <p>Pricing</p>
            <button>Login</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
