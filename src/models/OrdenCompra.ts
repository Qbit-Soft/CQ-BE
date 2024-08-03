import mongoose, { Document, Schema } from 'mongoose';

export interface IOrdenCompra extends Document {
    num_orden: string;
    fecha: Date;
    idfactura: mongoose.Schema.Types.ObjectId;
}

const OrdenCompraSchema: Schema = new Schema({
    num_orden: { type: String, required: true },
    fecha: { type: Date, required: true },
    idfactura: { type: mongoose.Schema.Types.ObjectId, ref: 'Factura', required: true }
});

export default mongoose.model<IOrdenCompra>('OrdenCompra', OrdenCompraSchema);
