import { ICleanable } from "../interfaces/ICleanable";
import { IRunnable } from "../interfaces/IRunnable";

export class Machine implements IRunnable, ICleanable{
    
    public id: number;
    public nombre: string;

    constructor(
        id: number,
        nombre: string
    ){
        this.id = id;
        this.nombre = nombre;
    }

    run(): void {
        console.log(`La maquina ${this.nombre} esta en funcionamiento. `);
    }

    clean(): void {
        console.log(`La maquina ${this.nombre} ha sido limpiada. `);
    }
}