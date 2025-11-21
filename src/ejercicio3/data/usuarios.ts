
interface InterfazUsuarioRegistrado {
    email: string;
    password: string;
    nombre: string;

}

export const usuariosRegistrados: InterfazUsuarioRegistrado[] = [
    { email: "admin@gmail.com", password: "1234", nombre: "Administrador" },
    { email: "cliente@gmail.com", password: "1234", nombre: "Jhoan" }
];
