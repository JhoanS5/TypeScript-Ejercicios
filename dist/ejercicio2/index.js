"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./models/Admin");
const Client_1 = require("./models/Client");
const admin = new Admin_1.Admin(1, "Jhoan Diaz", "Jhoan@gmail.com", ["Manejo de Usuarios"]);
admin.agregarPermisos("Editar contenido");
const client = new Client_1.Client(2, "Daniela Navarro", "Daniela@gmail.com");
client.agregarCompras();
console.log(admin.getInfo());
console.log(client.getInfo());
//# sourceMappingURL=index.js.map