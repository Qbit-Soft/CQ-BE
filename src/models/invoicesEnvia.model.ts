import mongoose from "mongoose";
import model from "../core/model";

const invoicesEnviaSchema = new mongoose.Schema({
  date: Date,
});

const invoicesEnviaModel = mongoose.model('invoicesEnvia', invoicesEnviaSchema);

export default model(invoicesEnviaModel);