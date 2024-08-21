import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Purchase Order document
export interface IOrdenCompra extends Document {
  orderNumber: string;
  supplier: string;
  items: string[];
  uploadedFile?: string; // Path to the uploaded file
  splitPdfFiles?: string[]; // Paths to the split PDF files (if applicable)
}

// Define the schema for the Purchase Order
const OrdenCompraSchema: Schema = new Schema({
  orderNumber: { type: String, required: true },  // Purchase order number
  supplier: { type: String, required: true },     // Supplier name
  items: { type: [String], required: true },      // List of items in the purchase order
  uploadedFile: { type: String },                 // Path to the uploaded file
  splitPdfFiles: { type: [String] }               // Paths to the split PDF files
});

// Export the model based on the schema
export default mongoose.model<IOrdenCompra>('OrdenCompra', OrdenCompraSchema);
