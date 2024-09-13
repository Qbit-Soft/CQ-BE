import mongoose, { Document, Schema } from 'mongoose';

export interface IPlantillaTransportadora extends Document {
    fecha: Date;
    idtransportadora: mongoose.Schema.Types.ObjectId;
}

const PlantillaTransportadoraSchema: Schema = new Schema({
    fecha: { type: Date, required: true },
    idtransportadora: { type: mongoose.Schema.Types.ObjectId, ref: 'Transportadora', required: true }
});

export default mongoose.model<IPlantillaTransportadora>('PlantillaTransportadora', PlantillaTransportadoraSchema);
