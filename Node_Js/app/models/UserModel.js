import mongoose, { Schema } from "mongoose";

const DataSchema = new Schema(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const UserModels = mongoose.model("usermodels", DataSchema);
export default UserModels;
