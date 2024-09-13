import mongoose from "mongoose";
import model from "../core/model";

const templateCheckSchema = new mongoose.Schema({
  date: Date,
});

const templateCheckModel = mongoose.model('TemplateCheck', templateCheckSchema);

export default model(templateCheckModel);