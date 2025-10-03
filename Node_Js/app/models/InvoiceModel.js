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
    payable: { type: String, required: true },
    cus_details: { type: String, required: true },
    ship_details: { type: String, required: true },
    tran_id: { type: String, required: true },
    val_id: { type: String, required: true },
    delivery_status: { type: String, required: true },
    payment_status: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const InvoiceModels = mongoose.model("invoicemodels", DataSchema);
export default InvoiceModels;
