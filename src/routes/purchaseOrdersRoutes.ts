import express from 'express';
import {
    createPurchaseOrder,
    updatePurchaseOrder,
    getPurchaseOrderByOrderNumber,
    deletePurchaseOrder
} from '../controllers/purchaseOrdersController';  // Import the controller functions

const router = express.Router();

// Define routes for purchase orders
router.post('/', createPurchaseOrder);
router.put('/:orderNumber', updatePurchaseOrder);
router.get('/:orderNumber', getPurchaseOrderByOrderNumber);
router.delete('/:orderNumber', deletePurchaseOrder);

export default router;
