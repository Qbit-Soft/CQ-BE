import mongoose from "mongoose";
import model from "../core/model";

const conveyorsSchema = new mongoose.Schema({
  name: String,
  conditions: String,
});

const conveyorsModel = mongoose.model('conveyors', conveyorsSchema);

export default model(conveyorsModel);