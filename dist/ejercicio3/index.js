"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./services/login");
const ErrorUsuarioNoEncontrado_1 = require("./errors/ErrorUsuarioNoEncontrado");
const PasswordInvalidaError_1 = require("./errors/PasswordInvalidaError");
function ejecutarLogin() {
    const email = "cliente@gmail.com";
    const password = "1235";
    try {
        const mensaje = (0, login_1.login)(email, password);
        console.log(mensaje);
    }
    catch (error) {
        if (error instanceof ErrorUsuarioNoEncontrado_1.ErrorUsuarioNoEncontrado) {
            console.error("Usuario no encontrado:", error.message);
        }
        else if (error instanceof PasswordInvalidaError_1.PasswordInvalidaError) {
            console.error("Contraseña incorrecta:", error.message);
        }
        else {
            console.error("Error general:", error);
        }
    }
}
ejecutarLogin();
//# sourceMappingURL=index.js.map