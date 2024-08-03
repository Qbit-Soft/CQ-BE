import mongoose, { Document, Schema } from 'mongoose';

export interface IPlanillaCuadre extends Document {
    fecha: Date;
}

const PlanillaCuadreSchema: Schema = new Schema({
    fecha: { type: Date, required: true }
});

export default mongoose.model<IPlanillaCuadre>('PlanillaCuadre', PlanillaCuadreSchema);
