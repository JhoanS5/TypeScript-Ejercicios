"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corrective = void 0;
const Maintenance_1 = require("./Maintenance");
class Corrective extends Maintenance_1.Maintenance {
    ejecutar() {
        console.log(`Ejecutando mantenimiento correctivo: ${this.descripcion}`);
    }
}
exports.Corrective = Corrective;
//# sourceMappingURL=Corrective.js.map