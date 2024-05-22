import { UserModel } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialsService";

// Que un usuario pueda registrarse por primera vez - Hecha con TypeORM
export const registerService = async (userData: UserDto): Promise<User> => {
    // Si las credenciales son vállidas, continuar con el registro de usuario
    const newUser: User = await UserModel.create(userData);
    await UserModel.save(newUser);

    // Validar las credenciales
    const newCredential: Credential = await createCredentialsService({
        username: userData.username,
        password: userData.password,
    });

    newUser.credential = newCredential;
    UserModel.save(newUser);
    return newUser;
};

// Que un usuario registrado pueda loguearse - Hecha con TypeORM
export const loginService = async (
    credentialId: number
): Promise<User | null> => {
    const user: User | null = await UserModel.findOne({
        where: { credential: { id: credentialId } },
    });
    return user;
};

// Obtener todos los usuarios - Hecha con TypeORM
export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await UserModel.find({
        relations: {
            turns: true,
        },
    });
    return allUsers;
};

// Obtener un usuario por el ID - Hecha con TypeORM
export const getUserByIdService = async (id: number): Promise<User | null> => {
    const userById: User | null = await UserModel.findOne({
        where: { id },
        relations: ["turns"],
    });

    // Verificar si el usuario es null para determinar si el ID es válido
    if (!userById) {
        throw new Error(
            `No se encontró el turno con el ID: ${id}. (error desde usersService.ts)`
        );
    } else {
        return userById;
    }
};
