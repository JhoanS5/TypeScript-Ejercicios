"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    nombre;
    email;
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    getInfo() {
        return `${this.nombre} - ${this.email}`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map