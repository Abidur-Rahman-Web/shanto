import mongoose, { Schema } from "mongoose";
const DataSchema = new Schema(
  {
    userID: {
      type: mongoose.Schema.type.objectId,
      ref: "usermodels",
      required: true,
    },
    productID: { type: mongoose.Schema.Types.ObjectId, ref: "productmodels" },
    invoiceID: { type: mongoose.Schema.Types.ObjectId, ref: "invoicemodels" },
    qty: { type: String, required: true },
    price: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const InboiceProductsModels = mongoose.model(
  "invoiceproductmodels",
  DataSchema
);
export default InboiceProductsModels;
