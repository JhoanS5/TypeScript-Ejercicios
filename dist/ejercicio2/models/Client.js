"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const User_1 = require("./User");
class Client extends User_1.User {
    compras;
    constructor(id, nombre, email) {
        super(id, nombre, email);
        this.compras = 0;
    }
    agregarCompras() {
        this.compras++;
    }
    getInfo() {
        return `Cliente: ${super.getInfo()} - Compras: ${this.compras}`;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map