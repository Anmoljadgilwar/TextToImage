import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId; // ✅ use from middleware

    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing data" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credit balance",
        credit: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $inc: { creditBalance: -1 } },
      { new: true }
    );

    res.json({
      success: true,
      message: "Image generated",
      credit: updatedUser.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
