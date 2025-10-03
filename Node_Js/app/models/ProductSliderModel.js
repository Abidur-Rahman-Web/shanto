import mongoose, { Schema } from "mongoose";
const DataSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    des: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productmodels",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const ProductSliderModel = mongoose.model("productslidermodels", DataSchema);
export default ProductSliderModel;
