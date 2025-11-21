"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preventive = void 0;
const Maintenance_1 = require("./Maintenance");
class Preventive extends Maintenance_1.Maintenance {
    ejecutar() {
        console.log(`Ejecutando mantenimiento preventivo: ${this.descripcion}`);
    }
}
exports.Preventive = Preventive;
//# sourceMappingURL=Preventive.js.map