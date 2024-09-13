import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { client } from "../config/db";  // Import the MongoDB client
import { PurchaseOrder } from "../models/PurchaseOrder";  // Import the PurchaseOrder interface

const database = client.db("Qbit-Test");  // Ensure the database name is correct
const collection = database.collection<PurchaseOrder>("purchaseOrders");  // Use the correct collection name

// Create a new purchase order
export async function createPurchaseOrder(req: Request, res: Response): Promise<void> {
    try {
        console.log("Request Body:", req.body);  // Log the incoming request to ensure it's coming through
        const newOrder: PurchaseOrder = req.body;  // Extract the purchase order from the request body
        newOrder.createdAt = new Date();  // Add createdAt timestamp
        const result = await collection.insertOne(newOrder);  // Insert into MongoDB
        console.log("Insertion Result:", result);  // Log the result of the insertion
        res.status(201).json(result);  // Send the insertion result
    } catch (error) {
        console.error("Error while creating purchase order:", error);  // Log any errors that occur
        res.status(500).json({ error: "Error creating purchase order" });
    }
}

// Update an existing purchase order by orderNumber
export async function updatePurchaseOrder(req: Request, res: Response): Promise<void> {
    try {
        const orderNumber = req.params.orderNumber;  // Extract orderNumber from the URL
        const updatedOrder: Partial<PurchaseOrder> = req.body;  // Get the updated fields from the request body

        const result = await collection.updateOne(
            { "order.orderNumber": orderNumber },  // Find the purchase order by its orderNumber
            { $set: updatedOrder }  // Update the purchase order with the new fields
        );

        if (result.matchedCount === 0) {
            res.status(404).json({ error: "Purchase order not found" });  // If no purchase order was found
        } else {
            res.status(200).json(result);  // Return the result of the update
        }
    } catch (error) {
        console.error("Error while updating purchase order:", error);  // Log any errors that occur
        res.status(500).json({ error: "Error updating purchase order" });
    }
}

// Get a purchase order by orderNumber
export async function getPurchaseOrderByOrderNumber(req: Request, res: Response): Promise<void> {
    try {
        const orderNumber = req.params.orderNumber;  // Extract orderNumber from the URL

        const order = await collection.findOne({ "order.orderNumber": orderNumber });  // Find the purchase order by its orderNumber

        if (!order) {
            res.status(404).json({ error: "Purchase order not found" });  // If no purchase order was found
        } else {
            res.status(200).json(order);  // Return the purchase order
        }
    } catch (error) {
        console.error("Error while fetching purchase order:", error);  // Log any errors that occur
        res.status(500).json({ error: "Error fetching purchase order" });
    }
}

// Delete a purchase order by orderNumber
export async function deletePurchaseOrder(req: Request, res: Response): Promise<void> {
    try {
        const orderNumber = req.params.orderNumber;  // Extract orderNumber from the URL

        const result = await collection.deleteOne({ "order.orderNumber": orderNumber });  // Delete the purchase order by its orderNumber

        if (result.deletedCount === 0) {
            res.status(404).json({ error: "Purchase order not found" });  // If no purchase order was found
        } else {
            res.status(200).json({ message: "Purchase order deleted successfully" });  // Confirm deletion
        }
    } catch (error) {
        console.error("Error while deleting purchase order:", error);  // Log any errors that occur
        res.status(500).json({ error: "Error deleting purchase order" });
    }
}
