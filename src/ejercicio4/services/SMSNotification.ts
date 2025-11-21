import { INotificationService } from "../interfaces/INotificationService";

export class SMSNotification implements INotificationService{
    
    enviar(mensaje: string): void {
        console.log(` Enviando SMS: ${mensaje}`);
    }
}