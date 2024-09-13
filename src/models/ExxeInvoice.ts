import mongoose, { Document, Schema } from 'mongoose';

export interface IPlantillaFacturaExce extends Document {
    idfactura_exxe: mongoose.Schema.Types.ObjectId;
    idplantilla: mongoose.Schema.Types.ObjectId;
}

const PlantillaFacturaExceSchema: Schema = new Schema({
    idfactura_exxe: { type: mongoose.Schema.Types.ObjectId, ref: 'FacturaExxe', required: true },
    idplantilla: { type: mongoose.Schema.Types.ObjectId, ref: 'PlantillaTransportadora', required: true }
});

export default mongoose.model<IPlantillaFacturaExce>('PlantillaFacturaExce', PlantillaFacturaExceSchema);
