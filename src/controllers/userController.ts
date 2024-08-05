import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { usuario, contrasena, iniciales, rol, estado } = req.body;
        const nuevoUsuario = new Usuario({usuario, contrasena, iniciales, rol, estado });
        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario creado', usuario: nuevoUsuario });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
};

//prueba
export const great = async (_req: Request, res: Response) => {
    res.send("buenas tardes")
};
