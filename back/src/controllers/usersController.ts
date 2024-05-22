import { Request, Response } from "express";
import {
    getAllUsersService,
    getUserByIdService,
    registerService,
    loginService,
} from "../services/usersService";
import { User } from "../entities/User";
import UserDto from "../dto/UserDto";
import { validateCredentialsService } from "../services/credentialsService";

// Registro de usuario
export const register = async (req: Request, res: Response) => {
    try {
        const { name, nDni, email, birthdate, username, password }: UserDto =
            req.body;
        const newUser: User = await registerService({
            name,
            nDni,
            email,
            birthdate,
            username,
            password,
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        });
    }
};

// Loguearse
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const credentialId = await validateCredentialsService({
            username,
            password,
        });
        const user = await loginService(credentialId);
        res.status(200).json({
            login: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        });
    }
};

// Obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userById: User | null = await getUserByIdService(Number(id));
        res.status(200).json(userById);
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
