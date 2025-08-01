import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, required: true },
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  payments: { type: Boolean, default: false },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed", "failed"],
  },
  paymentId: { type: String },
  date: { type: Number },
});

const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionSchema);

export default transactionModel;
