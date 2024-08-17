import express from 'express';
import { convertController } from '../controllers/convertHSE';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Hola mundo convert');
});

router.post('/', (_req, res) => {
    res.send('Saving a diary diaries');
});

// Ruta para subir y convertir el archivo HSE
router.post('/upload', convertController);

export default router;
