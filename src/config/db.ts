import 'dotenv/config';
import { MongoClient } from 'mongodb';

// MongoDB Atlas connection URL using the environment variable
export const uri = process.env.DB_URI as string;

// Create a new instance of MongoClient
export const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        // Connect to the client
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

// Call the function to connect
connectToMongo();
