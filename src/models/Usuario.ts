import mongoose, { Document, Schema } from 'mongoose';

export interface IUsuario extends Document {
  usuario: string;
  contrasena: string;
  iniciales: string;
  rol: string;
  estado: string;
}

const UsuarioSchema: Schema = new Schema({
  usuario: { type: String, required: true },
  contrasena: { type: String, required: true },
  iniciales: { type: String, required: true },
  rol: { type: String, required: true },
  estado: { type: String, required: true }
});

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);
