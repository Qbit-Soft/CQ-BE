import express from 'express';
import { createUser } from '../controllers/userController';

const router = express.Router();

// Define the route to create a user
router.post('/users', createUser);

export default router;
