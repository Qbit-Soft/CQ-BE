import express from 'express';
import { createUser, getUsers, updateUser } from '../controllers/userController';


const router = express.Router();

// Definir la ruta para crear un usuario
router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);

export default router;
