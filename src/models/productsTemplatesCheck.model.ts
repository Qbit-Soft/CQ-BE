import mongoose from "mongoose";
import model from "../core/model";

const productTemplateCheckSchema = new mongoose.Schema({
  consolidatedId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consolidated' },
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
});

const productTemplateCheckModel = mongoose.model('ProductTemplateCheck', productTemplateCheckSchema);

export default model(productTemplateCheckModel);