
export class PasswordInvalidaError extends Error {

    constructor(
        mensaje: string
    ){
        super(mensaje);
        this.name = "PasswordInvalidaError";
    }
}