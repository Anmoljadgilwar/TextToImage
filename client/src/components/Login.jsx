import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser, loadCreditData } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          // Load credit data after successful login
          setTimeout(() => loadCreditData(), 100);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          // Load credit data after successful registration
          setTimeout(() => loadCreditData(), 100);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 z-10 backdrop-blur-sm flex items-center justify-center bg-black/30 ">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        action=""
        className="relative bg-white text-slate-600 p-10 rounded-2xl"
      >
        <h1 className="text-2xl font-semibold text-center">{state}</h1>
        {state === "Login" ? (
          <p className="text-sm text-center">
            Welcome back! Log in to your account
          </p>
        ) : (
          <p className="text-sm text-center">Sign Up to Create Your Account</p>
        )}

        {state !== "Login" && (
          <div className="border flex px-2 py-2 items-center gap-1 rounded-full mt-5">
            <img src={assets.profile_icon} alt="" width={28} />
            <input
              type="text"
              id=""
              placeholder="Full Name"
              required
              className="outline-none text-sm"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-4 right-4 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;
