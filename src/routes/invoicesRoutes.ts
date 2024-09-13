import express from "express";
import { createInvoice, updateInvoice } from "../controllers/invoicesController";  // Import controller functions

const router = express.Router();

// POST route to create a new invoice
router.post("/invoices", createInvoice);

// PUT route to update an existing invoice by its invoiceNumber
router.put("/invoices/:invoiceNumber", updateInvoice);

export default router;
