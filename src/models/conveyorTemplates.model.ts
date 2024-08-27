import mongoose from "mongoose";
import model from "../core/model";

const conveyorTemplatesSchema = new mongoose.Schema({
  date: Date,
  idConveyor: String,
});

const conveyorTemplatesModel = mongoose.model('conveyorTemplates', conveyorTemplatesSchema);

export default model(conveyorTemplatesModel);