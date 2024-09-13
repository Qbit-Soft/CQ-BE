import mongoose from "mongoose";
import model from "../core/model";

const templateExxeInvoiceSchema = new mongoose.Schema({
  exxeInvoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'ExxeInvoice' },
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'TemplateTransporter' },
});

const templateExxeInvoiceModel = mongoose.model('TemplateExxeInvoice', templateExxeInvoiceSchema);

export default model(templateExxeInvoiceModel);