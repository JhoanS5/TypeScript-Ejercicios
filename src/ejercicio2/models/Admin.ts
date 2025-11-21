import { User } from "./User";

export class Admin extends User {

    private permisos: string[];

    constructor(
        id: number,
        nombre: string,
        email: string,
        permisos: string[]
    ){
        super(id, nombre, email);
        this.permisos = Array.isArray(permisos) ? permisos : [];
    }

    agregarPermisos( permisos: string ): void {
        if( !permisos ){
            throw new Error("No ingresaste un permiso. ");

        }else{
            this.permisos.push(permisos);
        }
    }

    override getInfo(): string {
        return `Admin: ${super.getInfo()} - Permisos: ${this.permisos.join(", ")}`;
    }   
}