
import { Admin } from "./models/Admin";
import { Client } from "./models/Client";

const admin = new Admin(1, "Jhoan Diaz", "Jhoan@gmail.com", ["Manejo de Usuarios"]);
admin.agregarPermisos("Editar contenido");

const client = new Client(2, "Daniela Navarro", "Daniela@gmail.com");
client.agregarCompras();

console.log(admin.getInfo());
console.log(client.getInfo());