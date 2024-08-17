import express from 'express';
import { client } from './config/db'; // Importa el cliente de MongoDB
import userRoutes from './routes/userRoutes';
import convertRouter from './services/convertHSE';

const app = express();

// Función para iniciar el servidor y manejar la conexión a MongoDB
async function startServer() {
    try {
        // Conectarse a MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Middleware para parsear JSON
        app.use(express.json());

        // Montar las rutas
        app.use('/api', userRoutes);
        app.use('/api/convert', convertRouter);

        // Iniciar el servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        // Manejar la desconexión de MongoDB al cerrar la aplicación
        process.on('SIGINT', async () => {
            await client.close();
            console.log('Disconnected from MongoDB');
            process.exit(0);
        });

    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Terminar la aplicación si no puede conectarse a MongoDB
    }
}

// Iniciar la conexión a MongoDB y arrancar el servidor
startServer();
