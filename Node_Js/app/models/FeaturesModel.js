import mongoose, { Schema } from "mongoose";
const DataSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const FeaturesModel = mongoose.model("featuresmodels", DataSchema);
export default FeaturesModel;
