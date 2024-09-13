import express from 'express';
import { connectDB } from './config/db';  // MongoDB connection configuration
import invoicesRoutes from './routes/invoicesRoutes';  // Routes for invoices
import purchaseOrdersRoutes from './routes/purchaseOrdersRoutes';  // Routes for purchase orders

// Initialize express app
const app = express();
const port = 3000;  // Define the port where the server will run

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the invoice routes for any requests related to invoices
app.use('/invoices', invoicesRoutes);

// Use the purchase orders routes for any requests related to purchase orders
app.use('/purchaseOrders', purchaseOrdersRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
