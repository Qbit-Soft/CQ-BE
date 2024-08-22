import express from 'express';
import path from 'path';
import { Files, IncomingForm } from 'formidable';
import fs from 'fs';
import userRoutes from './routes/userRoutes';  // Asegúrate de ajustar la ruta según la estructura de tu proyecto

const app = express();
const outputPath = path.join(__dirname, 'outputFiles');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

async function startServer() {
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

      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      if (!file) {
        console.error('No HSE file uploaded.');
        res.status(400).send('No HSE file uploaded.');
        return;
      }

      const filePath = file.filepath;

      res.status(200).send(`HSE file ${filePath} processed successfully.`);
    });
  });

  app.use('/api', userRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
