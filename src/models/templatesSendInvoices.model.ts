import mongoose from "mongoose";
import model from "../core/model";

const templateSendInvoiceSchema = new mongoose.Schema({
  sendInvoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'SendInvoice' },
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: 'TemplateTransporter' },
});

const templateSendInvoiceModel = mongoose.model('TemplateSendInvoice', templateSendInvoiceSchema);

export default model(templateSendInvoiceModel);
