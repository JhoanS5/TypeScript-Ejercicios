
import { login } from "./services/login";
import { ErrorUsuarioNoEncontrado } from "./errors/ErrorUsuarioNoEncontrado";
import { PasswordInvalidaError } from "./errors/PasswordInvalidaError";

function ejecutarLogin() {
    const email = "cliente@gmail.com";
    const password = "1235";

    try {
        const mensaje = login(email, password);
        console.log(mensaje);

    } catch (error) {
        if (error instanceof ErrorUsuarioNoEncontrado) {
            console.error("Usuario no encontrado:", error.message);

        } else if (error instanceof PasswordInvalidaError) {
            console.error("Contraseña incorrecta:", error.message);

        } else {
            console.error("Error general:", error);
        }
    }
}

ejecutarLogin();