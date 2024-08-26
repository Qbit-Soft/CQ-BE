import mongoose from 'mongoose';
import model from '../core/model';

const consolidatedSchema = new mongoose.Schema({
  date: Date,
});

const consolidatedModel = mongoose.model('Consolidated', consolidatedSchema);

export default model(consolidatedModel);