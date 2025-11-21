import { INotificationService } from "../interfaces/INotificationService";

export class EmailNotification implements INotificationService{

    enviar(mensaje: string): void {
        console.log(` Enviando correo: ${mensaje}`);
    }
}