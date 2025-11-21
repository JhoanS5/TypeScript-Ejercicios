
export abstract class Maintenance {

    public idMachine: number;
    public descripcion: string;

    constructor(
        idMachine: number,
        descripcion: string
    ){
        this.idMachine = idMachine;
        this.descripcion = descripcion;
    }

    abstract ejecutar(): void;
}