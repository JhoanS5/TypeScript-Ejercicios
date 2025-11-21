"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    permisos;
    constructor(id, nombre, email, permisos) {
        super(id, nombre, email);
        this.permisos = Array.isArray(permisos) ? permisos : [];
    }
    agregarPermisos(permisos) {
        if (!permisos) {
            throw new Error("No ingresaste un permiso. ");
        }
        else {
            this.permisos.push(permisos);
        }
    }
    getInfo() {
        return `Admin: ${super.getInfo()} - Permisos: ${this.permisos.join(", ")}`;
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map