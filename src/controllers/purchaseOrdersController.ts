import { Request, Response } from 'express';
import { client } from '../config/db';
import { PurchaseOrder } from '../models/PurchaseOrder';

const database = client.db('qbit');  // Connect to the 'qbit' database
const collection = database.collection<PurchaseOrder>('PurchaseOrders');  // Collection for purchase orders

// Create a new purchase order
export async function createPurchaseOrder(req: Request, res: Response): Promise<void> {
    try {
        const newPurchaseOrder: PurchaseOrder = req.body;  // Expect the purchase order data in the request body
        const result = await collection.insertOne(newPurchaseOrder);  // Insert into MongoDB
        res.status(201).json(result);
    } catch (error) {
        console.error('Error while creating purchase order:', error);
        res.status(500).json({ error: 'Error creating purchase order' });
    }
}

// Get all purchase orders
export async function getPurchaseOrders(req: Request, res: Response): Promise<void> {
    try {
        const purchaseOrders = await collection.find().toArray();
        res.status(200).json(purchaseOrders);
    } catch (error) {
        console.error('Error while fetching purchase orders:', error);
        res.status(500).json({ error: 'Error fetching purchase orders' });
    }
}
