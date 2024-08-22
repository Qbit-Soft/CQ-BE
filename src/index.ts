import express from 'express';
import path from 'path';
import formidable, { File, Files, IncomingForm } from 'formidable';
import fs from 'fs';

const app = express();
const outputPath = path.join(__dirname, 'outputFiles');

async function startServer() {
    try {
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath);
        }

        app.post('/api/test-hse-upload', (req, res) => {
            const form = new IncomingForm({
                uploadDir: outputPath,
                keepExtensions: true,
            });

            form.parse(req, (err, fields, files: Files) => {
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
