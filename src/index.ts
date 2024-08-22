import express, { Request, Response } from 'express';
import path from 'path';
import formidable, { File, Files, IncomingForm } from 'formidable';
import fs from 'fs';
import userRoutes from './routes/userRoutes';  // Rutas de usuario
import orderRoutes from './routes/orderRoutes';  // Rutas de orden de compra

const app = express();
const outputPath = path.join(__dirname, 'outputFiles');

// Middleware para parsear cuerpos JSON (necesario para manejar datos de usuarios)
app.use(express.json());

async function startServer() {
    try {
        // Crear directorio de salida si no existe
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath);
        }

        // Ruta para subir archivos HSE
        app.post('/api/test-hse-upload', (req: Request, res: Response) => {
            const form = new IncomingForm({
                uploadDir: outputPath,
                keepExtensions: true,
            });

            form.parse(req, (err: any, fields: formidable.Fields, files: Files) => {
                if (err) {
                    console.error('Error parsing the form:', err);
                    res.status(500).send('Error parsing the form');
                    return;
                }

                console.log('Fields:', fields);  // Log the fields received
                console.log('Files:', files);    // Log the files received

                const fileArray = files.file as File[] | File;
                const file = Array.isArray(fileArray) ? fileArray[0] : fileArray;

                if (!file) {
                    console.error('No HSE file uploaded.');
                    res.status(400).send('No HSE file uploaded.');
                    return;
                }

                const filePath = file.filepath;
                console.log('HSE File Path:', filePath); // Log the path of the uploaded file

                res.status(200).send(`HSE file ${filePath} processed successfully.`);
            });
        });

        // Montar las rutas de usuarios
        app.use('/api/users', userRoutes);  // Prefijo '/api/users' para las rutas de usuario

        // Montar las rutas de orden de compra
        app.use('/api/orders', orderRoutes);  // Prefijo '/api/orders' para las rutas de orden de compra

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}

startServer();
