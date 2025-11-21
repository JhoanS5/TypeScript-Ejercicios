"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
class Machine {
    id;
    nombre;
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    run() {
        console.log(`La maquina ${this.nombre} esta en funcionamiento. `);
    }
    clean() {
        console.log(`La maquina ${this.nombre} ha sido limpiada. `);
    }
}
exports.Machine = Machine;
//# sourceMappingURL=Machine.js.map