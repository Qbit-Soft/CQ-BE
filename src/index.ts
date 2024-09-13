import express from 'express';
import purchaseOrdersRoutes from './routes/purchaseOrdersRoutes';  // Import the routes
import { connectToDatabase } from './config/db';  // Import the MongoDB connection function

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // Ensure Express can parse JSON

// Register the purchaseOrders routes
app.use('/purchaseOrders', purchaseOrdersRoutes);  // This will map the routes to /purchaseOrders

// Connect to MongoDB and then start the server
connectToDatabase().then(() => {
  console.log('MongoDB connected successfully!');  // Log message if connected successfully
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);  // Log error if connection fails
});
