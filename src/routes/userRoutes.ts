import express from 'express';
import { createUser } from '../controllers/userController';


const router = express.Router();

// Definir la ruta para crear un usuario
router.post('/users', createUser);

export default router;
