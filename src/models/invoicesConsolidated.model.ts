import mongoose from'mongoose';
import model from '../core/model';

const invoiceConsolidatedSchema = new mongoose.Schema({
  consolidated: { type: mongoose.Schema.Types.ObjectId, ref: 'Consolidated' },
  invoice: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
});

const invoiceConsolidatedModel = mongoose.model('InvoiceConsolidated', invoiceConsolidatedSchema);

export default model(invoiceConsolidatedModel);