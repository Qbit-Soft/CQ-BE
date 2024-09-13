import { Request, Response } from "express";
import { client } from "../config/db";  // Import the MongoDB client
import { Invoice } from "../models/Invoice";  // Import the Invoice model

const database = client.db("Qbit-Test");  // Make sure the database name is correct
const collection = database.collection<Invoice>("invoices");  // Make sure the collection name matches

// Create a new invoice
export async function createInvoice(req: Request, res: Response): Promise<void> {
    try {
        console.log("Request Body:", req.body);  // Log the incoming request to ensure it's coming through
        const newInvoice: Invoice = req.body;  // Extract the invoice from the request body
        const result = await collection.insertOne(newInvoice);  // Insert into MongoDB
        console.log("Insertion Result:", result);  // Log the result of the insertion
        res.status(201).json(result);
    } catch (error) {
        console.error("Error while creating invoice:", error);  // Log any errors that occur
        res.status(500).json({ error: "Error creating invoice" });
    }
}


// Update an existing invoice by invoiceNumber
export async function updateInvoice(req: Request, res: Response): Promise<void> {
    try {
        const invoiceNumber = req.params.invoiceNumber;  // Extract invoiceNumber from the URL
        const updatedInvoice: Partial<Invoice> = req.body;  // Get the updated fields from the request body

        const result = await collection.updateOne(
            { invoiceNumber: invoiceNumber },  // Find the invoice by its invoiceNumber
            { $set: updatedInvoice }  // Update the invoice with the new fields
        );

        if (result.matchedCount === 0) {
            res.status(404).json({ error: "Invoice not found" });  // If no invoice was found
        } else {
            res.status(200).json(result);  // Return the result of the update
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating invoice" });
    }
}
