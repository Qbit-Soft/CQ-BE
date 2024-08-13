import { MongoClient } from 'mongodb';

// URL de conexión a MongoDB Atlas
export const uri = "mongodb+srv://Isa_tm_22:1234@cluster-qbit.pb6em.mongodb.net/Qbit-Test?retryWrites=true&w=majority";

// Crear una nueva instancia de MongoClient
export const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        // Conectarse al cliente
        await client.connect();
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

// Llamar a la función para conectarse
connectToMongo();
