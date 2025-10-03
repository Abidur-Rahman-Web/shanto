import mongoose, { Schema } from "mongoose";

const DataSchema = new Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodels",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productmodels",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const WishModel = mongoose.model("wishs", DataSchema);
export default WishModel;
