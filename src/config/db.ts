import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file

const uri = process.env.MONGO_URI || '';  // Load MongoDB URI from environment variable
if (!uri) {
    throw new Error("MongoDB connection URI is missing.");
}

export const client = new MongoClient(uri);

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Cluster-Qbit");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}
