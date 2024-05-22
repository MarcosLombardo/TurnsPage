import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    register,
    login,
} from "../controllers/usersController";

const usersRouter: Router = Router();

// POST /users/register => Crear un nuevo usuario
usersRouter.post("/register", register);

// POST /users/register => Crear un nuevo usuario
usersRouter.post("/login", login);

// GET /users => Obtener todos los usuarios
usersRouter.get("/", getAllUsers);

// GET /users/:id => Obtener un usuario por ID
usersRouter.get("/:id", getUserById);

export default usersRouter;
