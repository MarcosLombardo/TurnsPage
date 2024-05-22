import { Request, Response } from "express";
import {
    scheduleService,
    getAllTurnsService,
    getTurnByIdService,
    cancelService,
} from "../services/turnsService";
import { Turn } from "../entities/Turn";
import { UserModel } from "../config/data-source";

// Nuevo turno
export const schedule = async (req: Request, res: Response) => {
    try {
        const { date, time, description, userId } = req.body;

        // Verificar si el usuario existe en la base de datos
        const user = await UserModel.findOneBy({ id: userId });
        if (!user) {
            return res.status(404).json({
                message: `No existe el usuario con el ID ${userId}. (error desde turnsController.ts)`,
            });
        }

        // Crear y guardar el turno
        const newTurn: Turn = await scheduleService({
            date,
            time,
            description,
            userId,
        });
        res.status(201).json(newTurn);
    } catch (error) {
        res.status(400).json({
            message: (error as Error).message,
        });
    }
};

// Obtener todos los turnos
export const getAllTurns = async (req: Request, res: Response) => {
    try {
        const turns: Turn[] = await getAllTurnsService();
        res.status(200).json(turns);
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

// Obtener un turno por ID
export const getTurnById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const turnById: Turn | null = await getTurnByIdService(Number(id));
        res.status(200).json(turnById);
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};

// Cancelar un turno
export const cancel = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await cancelService(Number(id));
        res.status(200).json({ message: "Turno cancelado correctamente." });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
