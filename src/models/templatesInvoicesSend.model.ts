import mongoose from "mongoose";
import model from "../core/model";

const templatesInvoicesSchema = new mongoose.Schema({
  date: Date,
});

const templatesInvoicesModel = mongoose.model('templatesInvoices', templatesInvoicesSchema);

export default model(templatesInvoicesModel);