"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const usuarios_1 = require("../data/usuarios");
const ErrorUsuarioNoEncontrado_1 = require("../errors/ErrorUsuarioNoEncontrado");
const PasswordInvalidaError_1 = require("../errors/PasswordInvalidaError");
function login(email, password) {
    const user = usuarios_1.usuariosRegistrados.find(usuario => usuario.email === email);
    if (!user) {
        throw new ErrorUsuarioNoEncontrado_1.ErrorUsuarioNoEncontrado("El usuario no existe en el sistema.");
    }
    if (user.password !== password) {
        throw new PasswordInvalidaError_1.PasswordInvalidaError("La contraseña es incorrecta.");
    }
    return `Bienvenido ${user.nombre}`;
}
//# sourceMappingURL=login.js.map