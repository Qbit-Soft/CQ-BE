import { Request, Response } from 'express';
import { client } from '../config/db';
import { ObjectId } from 'mongodb';

import { Usuario } from '../models/Usuario';


// create a user
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

// list of all users
export async function getUsers(req: Request, res: Response): Promise<void> {
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('Qbit-Test');
        const collection = database.collection<Usuario>('usuarios');
        const users = await collection.find().toArray();
        res.status(200).json(users);
    } catch (err){
        console.error('Error Extracting user:', err);
        res.status(500).json({ error: 'Error Extracting user' });
    } finally {
        await client.close();
    }
}


// doesn't work (i don't know why)
export async function updateUser(req: Request, res: Response): Promise<void> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('Qbit-Test');

        const collection = database.collection<Usuario>('usuarios');

        const { usuario, contrasena, iniciales, rol, estado } = req.body;
        console.log('Request body:', req.body);
        const newData: Usuario = { usuario, contrasena, iniciales, rol, estado };

        const userId = new ObjectId(req.params.id);
        const result = await collection.updateOne(
            { _id: userId },
            { $set: newData },
        );

        if (result.matchedCount  === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Search updated document
        const updatedUser = await collection.findOne({ _id: userId });

        if (updatedUser) {
            res.status(200).json({ message: "User successfully updated", user: updatedUser });
        } else {
            res.status(404).json({ error: 'User not found' });
        }

    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}