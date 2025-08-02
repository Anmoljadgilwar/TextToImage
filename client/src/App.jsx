import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <>
      <div className="min-h-screen ">
        <ToastContainer position="top-right" />
        <Navbar />

        {showLogin && <Login />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
