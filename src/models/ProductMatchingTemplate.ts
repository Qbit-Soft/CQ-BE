import mongoose, { Document, Schema } from 'mongoose';

export interface IProductoPlanillaCuadre extends Document {
    idconsolidado: mongoose.Schema.Types.ObjectId;
    idfactura: mongoose.Schema.Types.ObjectId;
}

const ProductoPlanillaCuadreSchema: Schema = new Schema({
    idconsolidado: { type: mongoose.Schema.Types.ObjectId, ref: 'Consolidado', required: true },
    idfactura: { type: mongoose.Schema.Types.ObjectId, ref: 'Factura', required: true }
});

export default mongoose.model<IProductoPlanillaCuadre>('ProductoPlanillaCuadre', ProductoPlanillaCuadreSchema);
