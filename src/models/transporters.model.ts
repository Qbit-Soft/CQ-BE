import mongoose from "mongoose";
import model from "../core/model";

const transporterSchema = new mongoose.Schema({
  name: String,
  conditions: String,
});

const transportersModel = mongoose.model('Transporter', transporterSchema);

export default model(transportersModel);