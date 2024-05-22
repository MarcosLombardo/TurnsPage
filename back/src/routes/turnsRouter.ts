import { Router } from "express";
import {
    cancel,
    schedule,
    getAllTurns,
    getTurnById,
} from "../controllers/turnsController";

const turnsRouter: Router = Router();

// POST /turns/schedule => Crear un nuevo turno
turnsRouter.post("/schedule", schedule);

// GET /turns => Obtener todos los turnos
turnsRouter.get("/", getAllTurns);

// GET /turns/:id => Obtener un turno por ID
turnsRouter.get("/:id", getTurnById);

// PUT /turns/cancel => Cancelar un turno
turnsRouter.put("/cancel/:id", cancel);

export default turnsRouter;
