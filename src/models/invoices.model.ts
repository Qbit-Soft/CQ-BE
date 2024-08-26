import mongoose from "mongoose";
import model from "../core/model";

const invoiceSchema = new mongoose.Schema({
  documentNumber: String,
  destinationCity: String,
  branch: String,
  address: String,
  phone: String,
  orderNumber: String,
  orderRequestNumber: String,
  packingDate: Date,
  numberOfBoxes: Number,
  initials: String,
});

const invoiceModel = mongoose.model('Invoice', invoiceSchema);

export default model(invoiceModel);