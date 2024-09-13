import mongoose from 'mongoose';
import model from "../core/model";


const sendInvoiceSchema = new mongoose.Schema({
  originCity: String,
  destinationCity: String,
  serviceCode: String,
  recipientName: String,
  recipientAddress: String,
  recipientPhone: String,
  numberOfUnits: Number,
  realWeight: Number,
  volumeWeight: Number,
  declaredValue: Number,
  contains: String,
  guideText: String,
  noteAction: String,
  documentNumber: String,
  userModCode: String,
  observations: String,
});

const sendInvoiceModel = mongoose.model('SendInvoice', sendInvoiceSchema);

export default model(sendInvoiceModel);