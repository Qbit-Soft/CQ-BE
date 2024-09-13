import express from 'express';
<<<<<<< HEAD
import { connectDB } from './config/db';  // MongoDB connection configuration
import invoicesRoutes from './routes/invoicesRoutes';  // Routes for invoices
import purchaseOrdersRoutes from './routes/purchaseOrdersRoutes';  // Routes for purchase orders

// Initialize express app
=======
import db from './config/db';
import invoicesRoute from './routes/invoices.route';
import productsRoute from './routes/products.route';
import transportersRoute from './routes/transporters.route';
import usersRoute from './routes/users.route';

const PORT = process.env.PORT || 3000;
>>>>>>> 1c3125762ce0fa790eee342b864e5c2ce3e70c29
const app = express();
const port = 3000;  // Define the port where the server will run

<<<<<<< HEAD
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
=======
async function startServer() {
  app.use(express.json());
  // --------------------- Load middleware here ---------------------

  // --------------------- Load routes here -------------------------
  invoicesRoute(app);
  productsRoute(app);
  transportersRoute(app);
  usersRoute(app);
  // ----------------------------------------------------------------

  await db.connect();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
>>>>>>> 1c3125762ce0fa790eee342b864e5c2ce3e70c29
});
