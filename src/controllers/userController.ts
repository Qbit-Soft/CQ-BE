import { Request, Response } from 'express';
import { client } from '../config/db';
import { Usuario } from '../models/Usuario';

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('Qbit-Test');
        const collection = database.collection<Usuario>('usuarios');

        const newUser: Usuario = {
            usuario: req.body.usuario,
            contrasena: req.body.contrasena,
            iniciales: req.body.iniciales,
            rol: req.body.rol,
            estado: req.body.estado,
        };

        const result = await collection.insertOne(newUser);
        console.log(`User created with the following id: ${result.insertedId}`);
        res.status(201).json({ message: 'User created', userId: result.insertedId });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
    } finally {
        await client.close();
    }
}
