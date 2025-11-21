import { InterfazUser } from "../interfaces/InterfazUsuario";

export class User implements InterfazUser {

    public id: number;
    public nombre: string;
    public email: string;
    
    constructor(
        id: number,
        nombre: string,
        email: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    getInfo(): string {
        return `${this.nombre} - ${this.email}`;
    }
}