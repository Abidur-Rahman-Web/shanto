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
    color: { type: String, required: true },
    size: { type: String, required: true },
    qty: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const CartModels = mongoose.model("cartmodels", DataSchema);
export default CartModels;
