"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertManager = void 0;
class AlertManager {
    notificador;
    constructor(notificador) {
        this.notificador = notificador;
    }
    activarAlerta(mensaje) {
        this.notificador.enviar(mensaje);
    }
}
exports.AlertManager = AlertManager;
//# sourceMappingURL=AlertManager.js.map