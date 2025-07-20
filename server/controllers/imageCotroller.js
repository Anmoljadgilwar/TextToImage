import userModel from "../models/userModel";

export const generateImage = async () => {
  try {
    const { userId, prompt } = req.body;

    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No credit balance",
        creditBalance: user.creditBalance,
      });
    }
  } catch (error) {
    console.log(error);
    resizeBy.json({ success: false, message: error.message });
  }
};

