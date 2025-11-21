"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInvalidaError = void 0;
class PasswordInvalidaError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "PasswordInvalidaError";
    }
}
exports.PasswordInvalidaError = PasswordInvalidaError;
//# sourceMappingURL=PasswordInvalidaError.js.map