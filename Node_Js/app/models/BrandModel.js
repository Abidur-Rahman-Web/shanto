import mongoose, { Schema } from "mongoose";

const DataSchema = new Schema(
  {
    brandName: { type: String, unique: true, required: true },
    brandImage: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const BrandModel = mongoose.model("brandmodel", DataSchema);
export default BrandModel;
