import { CredentialModel } from "../config/data-source";
import CredentialsDto from "../dto/CredentialsDto";
import { Credential } from "../entities/Credential";

// Crear una credencial de usuario
export const createCredentialsService = async (
    CredentialsDto: CredentialsDto
): Promise<Credential> => {
    const newCredential = await CredentialModel.create(CredentialsDto);
    await CredentialModel.save(newCredential);
    return newCredential;
};

// Validar la credencial de usuario
export const validateCredentialsService = async (
    params: CredentialsDto
): Promise<number> => {
    const { username, password } = params;
    const foundCredentials = await CredentialModel.findOneBy({
        username,
        password,
    });
    if (foundCredentials) {
        return foundCredentials.id;
    } else {
        throw new Error("Credenciales incorrectas");
    }
};
