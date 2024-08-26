import mongoose from "mongoose";
import model from "../core/model";

const exxeInvoiceSchema = new mongoose.Schema({
  company: String,
  document: String,
  number: String,
  origin: String,
  destination: String,
  city: String,
  recipient: String,
  address: String,
  phone: String,
  units: Number,
  kilos: Number,
  declaredValue: Number,
  observation: String,
  mainNumber: String,
  guide: String,
});

const exxeInvoiceModel = mongoose.model('ExxeInvoice', exxeInvoiceSchema);

export default model(exxeInvoiceModel);