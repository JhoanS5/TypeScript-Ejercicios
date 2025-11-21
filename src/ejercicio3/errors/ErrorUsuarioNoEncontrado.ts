
export class ErrorUsuarioNoEncontrado extends Error {

    constructor(
        mensaje: string
    ){
        super(mensaje);
        this.name = "ErrorUsuarioNoEncontrado";
    }
}