import { TurnModel, UserModel } from "../config/data-source";
import TurnDto from "../dto/TurnDto";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";

// Que se pueda sacar un turno
export const scheduleService = async (turnData: TurnDto): Promise<Turn> => {
    // Crear y guardar el nuevo turno
    const newTurn = await TurnModel.create(turnData);
    await TurnModel.save(newTurn);

    // Busco el usuario para asociar el turno
    const user: User | null = await UserModel.findOneBy({
        id: turnData.userId,
    });

    // Validar y asociar el turno al usuario
    if (!user) {
        throw new Error(
            `No se encuentra el usuario solicitado con el ID ${turnData.userId}. (error desde turnsServices.ts)`
        );
    } else {
        newTurn.user = user;
        TurnModel.save(newTurn);
    }

    return newTurn;
};

// Que se puedan obtener todos los turnos
export const getAllTurnsService = async (): Promise<Turn[]> => {
    const turns = await TurnModel.find({
        relations: {
            user: true,
        },
    });
    return turns;
};

// Que se pueda obtener un turno por su ID
export const getTurnByIdService = async (id: number): Promise<Turn | null> => {
    const turnById = await TurnModel.findOneBy({ id });

    // Verificar si el ID solicitado existe
    if (!turnById) {
        throw new Error(
            `No se encuentra el turno solicitado con el ID ${id}. (error desde turnsServices.ts)`
        );
    } else {
        return turnById;
    }
};

// Que se pueda cancelar un turno
export const cancelService = async (id: number): Promise<void> => {
    const turn = await TurnModel.findOneBy({ id });

    // Verificar si el turno con ese ID existe
    if (!turn) {
        throw new Error(
            `No se encontró el turno con el ID: ${id}. (error desde turnsServices.ts)`
        );
    } else if (turn.status === "cancelled") {
        // Verificar si el turno ya está cancelado
        throw new Error("El turno ya está cancelado");
    } else {
        // Cancelar el turno
        turn.status = "cancelled";
        await TurnModel.save(turn);
    }
};
