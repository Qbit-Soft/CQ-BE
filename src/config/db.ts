import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
// Get the password from the environment variable
const password = process.env.MONGO_PASSWORD;
const user = process.env.MONGO_USER;
const database = process.env.MONGO_DATABASE;

// MongoDB Atlas connection URL using the environment variable
export const uri = `mongodb+srv://${user}:${password}@cluster-qbit.pb6em.mongodb.net/${database}?retryWrites=true&w=majority`;

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
