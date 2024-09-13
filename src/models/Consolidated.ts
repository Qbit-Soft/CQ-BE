import mongoose, { Document, Schema } from 'mongoose';

export interface IConsolidado extends Document {
    fecha: Date;
}

const ConsolidadoSchema: Schema = new Schema({
    fecha: { type: Date, required: true }
});

export default mongoose.model<IConsolidado>('Consolidado', ConsolidadoSchema);
