
import { usuariosRegistrados } from "../data/usuarios";
import { ErrorUsuarioNoEncontrado } from "../errors/ErrorUsuarioNoEncontrado";
import { PasswordInvalidaError } from "../errors/PasswordInvalidaError";

export function login(email: string, password: string): string {
    const user = usuariosRegistrados.find(usuario => usuario.email === email);

    if (!user) {
        throw new ErrorUsuarioNoEncontrado("El usuario no existe en el sistema.");
    }
    if (user.password !== password) {
        throw new PasswordInvalidaError("La contraseña es incorrecta.");
    }

    return `Bienvenido ${user.nombre}`;
}