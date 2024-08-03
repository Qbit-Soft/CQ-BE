import mongoose, { Document, Schema } from 'mongoose';

export interface IFactura extends Document {
    num_oc: string;
    num_documento: string;
    ciudad_destino: string;
    sucursal: string;
    direccion: string;
    telefono: string;
    num_pedido: string;
    fecha_empaque: Date;
    num_cajas: number;
    iniciales: string;
}

const FacturaSchema: Schema = new Schema({
    num_oc: { type: String, required: true },
    num_documento: { type: String, required: true },
    ciudad_destino: { type: String, required: true },
    sucursal: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    num_pedido: { type: String, required: true },
    fecha_empaque: { type: Date, required: true },
    num_cajas: { type: Number, required: true },
    iniciales: { type: String, required: true }
});

export default mongoose.model<IFactura>('Factura', FacturaSchema);
