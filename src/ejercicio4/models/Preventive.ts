import { Maintenance } from "./Maintenance";


export class Preventive extends Maintenance{

    override ejecutar(): void {
        console.log(`Ejecutando mantenimiento preventivo: ${this.descripcion}`);
    }
}