import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "https://quick-visual.onrender.com";

  const navigate = useNavigate();

  const loadCreditData = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
        //  token: localStorage.getItem("token"),
      });

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        console.log("Credit API failed:", data.message);
        setCredit(0);
      }
    } catch (error) {
      console.log("Credit API error:", error.response?.data || error.message);
      setCredit(0);
      toast.error(error.response?.data?.message || error.message);
    }
  }, [token, backendUrl]);

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        await loadCreditData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        await loadCreditData();
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setCredit(null);
  };

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
