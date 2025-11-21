import { Maintenance } from "./Maintenance";

export class Corrective extends Maintenance {
    
    override ejecutar(): void {
        console.log(`Ejecutando mantenimiento correctivo: ${this.descripcion}`);
    }
}