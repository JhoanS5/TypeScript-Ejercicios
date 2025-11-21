import { IRepository } from "../interfaces/IRepository";
import { Machine } from "../models/Machine";


export class MachineRepository implements IRepository<Machine>{

    private machines: Machine[] = [];

    save( machine: Machine ): void {
        this.machines.push(machine);

    }

    getAll(): Machine[] {
        return this.machines;
    }
}