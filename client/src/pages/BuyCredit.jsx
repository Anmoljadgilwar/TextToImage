import { assets, plans } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  // const initPay = async (order) => {
  //   const options = {
  //     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //     amount: order.amount,
  //     currency: "INR",
  //     name: "Credits Payment",
  //     description: "Credits Payment",
  //     order_id: order.id,
  //     receipt: order.receipt,
  //     handler: async (response) => {
  //       try {
  //         // Verify payment on server
  //         const { data } = await axios.post(
  //           backendUrl + "/api/user/verifyRazorpay",
  //           response,
  //           { headers: { token } }
  //         );

  //         if (data.success) {
  //           await loadCreditData();
  //           navigate("/");
  //           toast.success("Payment successful! Credits added to your account.");
  //         } else {
  //           toast.error(data.message || "Payment verification failed");
  //         }
  //       } catch (error) {
  //         toast.error("Payment verification failed");
  //         console.error("Payment verification error:", error);
  //       }
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log("Razorpay response:", response);
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verifyRazorpay",
            { razorpay_payment_id, razorpay_order_id, razorpay_signature },
            { headers: { token } }
          );

          if (data.success) {
            await loadCreditData();
            navigate("/");
            toast.success("Payment successful! Credits added to your account.");
          } else {
            toast.error(data.message || "Payment verification failed");
          }
        } catch (error) {
          toast.error("Payment verification failed");
          console.error("Payment verification error:", error);
        }
      },
      modal: {
        ondismiss: () => {
          toast.error("Payment cancelled or not completed.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/razorpay",
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message || "Failed to create payment order");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error(
        error.response?.data?.message || error.message || "Payment failed"
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 140 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
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
            <img src={assets.logo} style={{ height: "40px" }} />

            <p className="mt-4 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-2xl font-medium"> ₹{item.price}</span> /
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full mt-8 py-2 bg-black text-white min-w-52 rounded-md text-sm"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
