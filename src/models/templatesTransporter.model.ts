import mongoose from 'mongoose';
import model from '../core/model';

const templateTransporterSchema = new mongoose.Schema({
  date: Date,
  transporter: { type: mongoose.Schema.Types.ObjectId, ref: 'Transporter' },
});

const templateTransporterModel = mongoose.model('TemplateTransporter', templateTransporterSchema);

export default model(templateTransporterModel);