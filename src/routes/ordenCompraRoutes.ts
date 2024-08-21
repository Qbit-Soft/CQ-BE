import { Router } from 'express';
import { convertController } from '../controllers/ordenCompraController';
import {splitPdf } from '../controllers/ordenCompraController';

const router = Router();

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

export default router;

