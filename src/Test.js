const { MongoClient } = require('mongodb');

// URL de conexión a MongoDB Atlas
const uri = "mongodb+srv://Isa_tm_22:1234@cluster-qbit.pb6em.mongodb.net/Qbit-Test?retryWrites=true&w=majority";

// Crear una nueva instancia de MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndCreateUser() {
    try {
        // Conectar al cliente
        await client.connect();
        console.log("Connected to MongoDB");

        // Seleccionar la base de datos y la colección
        const database = client.db('Qbit-Test');
        const collection = database.collection('usuarios');

        // Crear un nuevo usuario
        const newUser = {
            name: "John Doe",
            email: "john.doe@example.com"
        };

        // Insertar el nuevo usuario en la colección
        const result = await collection.insertOne(newUser);
        console.log(`User created with the following id: ${result.insertedId}`);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        // Cerrar la conexión cuando termines
        await client.close();
    }
}

// Ejecutar la función
connectAndCreateUser().catch(console.error);
