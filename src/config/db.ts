import 'dotenv/config';  // Load environment variables from .env
import { MongoClient } from 'mongodb';

// MongoDB connection URI from environment variables
export const uri = process.env.DB_URI as string;

// Create a new instance of MongoClient
export const client = new MongoClient(uri);

// Function to connect to MongoDB
export async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}
