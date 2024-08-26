import mongoose from "mongoose";
import model from "../core/model";

const productSchema = new mongoose.Schema({
  code: String,
  description: String,
  batch: String,
});

const productModel = mongoose.model('Product', productSchema);

export default model(productModel);