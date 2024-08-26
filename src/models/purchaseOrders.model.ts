import mongoose from "mongoose";
import model from "../core/model";

const purchaseOrderSchema = new mongoose.Schema({
  orderNumber: String,
  date: Date,
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
});

const purchaseOrderModel = mongoose.model('PurchaseOrder', purchaseOrderSchema);

export default model(purchaseOrderModel);