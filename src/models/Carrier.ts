import mongoose, { Document, Schema } from 'mongoose';

export interface ITransportadora extends Document {
    nombre: string;
    condiciones: string;
}

const TransportadoraSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    condiciones: { type: String, required: true }
});

export default mongoose.model<ITransportadora>('Transportadora', TransportadoraSchema);
