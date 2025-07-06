import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = React.useState("Login");

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 z-12 backdrop-blur-sm flex items-center justify-center bg-black/30 ">
      <form
        action=""
        className="relative bg-white text-slate-600 p-10 rounded-2xl"
      >
        <h1 className="text-2xl font-semibold text-center">{state}</h1>
        <p className="text-sm text-center">
          Welcome back! Sign Up to your account{" "}
        </p>

        {state !== "Login" && (
          <div className="border flex px-2 py-2 items-center gap-1 rounded-full mt-5">
            <img src={assets.profile_icon} alt="" width={28} />
            <input
              type="text"
              id=""
              placeholder="Full Name"
              required
              className="outline-none text-sm"
            />
          </div>
        )}

        <div className="border flex px-2 py-2 items-center gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" width={20} />
          <input
            type="email"
            id=""
            placeholder="Email"
            required
            className="outline-none text-sm"
          />
        </div>

        <div className="border flex px-2 py-2 items-center gap-2 rounded-full mt-5">
          <img src={assets.lock_icon} alt="" width={15} />
          <input
            type="password"
            id=""
            placeholder="Password"
            required
            className="outline-none text-sm"
          />
        </div>
        {state === "Login" && (
          <p className="text-sm mt-6 text-blue-600 cursor-pointer text-right">
            Forgot Password{" "}
          </p>
        )}

        <button className="bg-blue-500 text-white w-full py-2 mt-6 rounded-full">
          {state !== "Login" ? "Create Account" : "Login"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center" onClick={() => setState("Sign Up")}>
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
