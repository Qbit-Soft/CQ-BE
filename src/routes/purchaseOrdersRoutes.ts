import { Router } from 'express';
import { createPurchaseOrder, getPurchaseOrders } from '../controllers/purchaseOrdersController';

const router = Router();

// Route to create a new purchase order
router.post('/', createPurchaseOrder);

// Route to get all purchase orders
router.get('/', getPurchaseOrders);

export default router;
