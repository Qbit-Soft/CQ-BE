import mongoose, { Document, Schema } from 'mongoose';

export interface IProducto extends Document {
    codigo: string;
    descripcion: string;
    lote: string;
}

const ProductoSchema: Schema = new Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    lote: { type: String, required: true }
});

export default mongoose.model<IProducto>('Producto', ProductoSchema);
