import { Router } from 'express';
import { convertController } from '../controllers/ordenCompraController';
import {splitPdf } from '../controllers/ordenCompraController';

import { Files, IncomingForm } from 'formidable';

import path from 'path';
import fs from 'fs';

const router = Router();

const outputPath = path.join(__dirname, 'outputFiles');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}


router.post('/upload', convertController);

// New route for splitting PDF
router.post('/split-pdf', async (req, res) => {
  try {
    const inputPath = req.body.inputPath; // Path to the PDF file provided in the request body
    await splitPdf(inputPath);
    res.status(200).send('PDF split successfully');
  } catch (err) {
    console.error('Error splitting PDF:', err);
    res.status(500).send('Error splitting PDF');
  }
});

router.post('/test-hse-upload', (req, res) => {
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

export default router;

