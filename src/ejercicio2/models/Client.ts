import { User } from "./User";

export class Client extends User {
    private compras: number;

    constructor(
        id: number,
        nombre: string,
        email: string,
    ){
        super(id, nombre, email);
        this.compras = 0;
    }

    agregarCompras(): void {
        this.compras++;
    }

    override getInfo(): string {
        return `Cliente: ${super.getInfo()} - Compras: ${this.compras}`;
    }
}