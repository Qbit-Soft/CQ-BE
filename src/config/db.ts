<<<<<<< HEAD
import 'dotenv/config';  // Load environment variables from .env
import { MongoClient } from 'mongodb';

// MongoDB connection URI from environment variables
export const uri = process.env.DB_URI as string;
=======
import 'dotenv/config';
import mongoose from 'mongoose';

// MongoDB Atlas connection URL using the environment variable
const uri = process.env.DB_URI!;
>>>>>>> 1c3125762ce0fa790eee342b864e5c2ce3e70c29

mongoose.set('strictQuery', true);

<<<<<<< HEAD
// Function to connect to MongoDB
export async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
=======
export default {
  async connect() {
    try {
      // Connect to the client
      await mongoose.connect(uri);
      console.log('Connected to MongoDB');
>>>>>>> 1c3125762ce0fa790eee342b864e5c2ce3e70c29
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
<<<<<<< HEAD
}
=======
  }
};
>>>>>>> 1c3125762ce0fa790eee342b864e5c2ce3e70c29
