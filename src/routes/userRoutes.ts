import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

// Define the route to create a user
router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



export default router;
