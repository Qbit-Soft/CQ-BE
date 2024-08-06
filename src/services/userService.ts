import express from "express";
import { createUser, getUsers, great } from "../controllers/userController";

const router = express.Router();

router.post('/', createUser);
router.get("/", getUsers);
router.get("/:great", great); //prueba


export default router;
