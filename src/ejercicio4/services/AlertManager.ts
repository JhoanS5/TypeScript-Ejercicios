import { INotificationService } from "../interfaces/INotificationService";

export class AlertManager {

    private notificador: INotificationService;

    constructor(
        notificador: INotificationService
    ){
        this.notificador = notificador;
    }

    activarAlerta( mensaje: string ): void {
        this.notificador.enviar(mensaje);
    }
}