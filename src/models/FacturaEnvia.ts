import mongoose, { Document, Schema } from 'mongoose';

export interface IFacturaEnvia extends Document {
    ciud_origen: string;
    ciud_destino: string;
    cod_servicio: string;
    nom_destinatario: string;
    dir_destinatario: string;
    tel_destinatario: string;
    num_unidades: number;
    pesoreal_k: number;
    pesovolumen_k: number;
    valor_declarado: number;
    dice_contener: string;
    texto_guia: string;
    accion_notaguia: string;
    num_documento: string;
    cod_usr_mod: string;
    obs: string;
}

const FacturaEnviaSchema: Schema = new Schema({
    ciud_origen: { type: String, required: true },
    ciud_destino: { type: String, required: true },
    cod_servicio: { type: String, required: true },
    nom_destinatario: { type: String, required: true },
    dir_destinatario: { type: String, required: true },
    tel_destinatario: { type: String, required: true },
    num_unidades: { type: Number, required: true },
    pesoreal_k: { type: Number, required: true },
    pesovolumen_k: { type: Number, required: true },
    valor_declarado: { type: Number, required: true },
    dice_contener: { type: String, required: true },
    texto_guia: { type: String, required: true },
    accion_notaguia: { type: String, required: true },
    num_documento: { type: String, required: true },
    cod_usr_mod: { type: String, required: true },
    obs: { type: String, required: true }
});

export default mongoose.model<IFacturaEnvia>('FacturaEnvia', FacturaEnviaSchema);
