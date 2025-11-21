import { Corrective } from "./models/Corrective";
import { Machine } from "./models/Machine";
import { Preventive } from "./models/Preventive";
import { MachineRepository } from "./repository/MachineRepository";
import { EmailNotification } from "./services/EmailNotification";
import { LoggerService } from "./services/LoggerService";
import { AlertManager } from './services/AlertManager';

const repositorio = new MachineRepository();
const logger = new LoggerService();

const maquina1 = new Machine(1, "Compresor");
const maquina2 = new Machine(2, "Ventilador");

repositorio.save(maquina1);
repositorio.save(maquina2);

logger.log("Maquinas registradas. ");

const mantenimiento1 = new Preventive(1, "Lubricacion y limpieza");
const mantenimiento2 = new Corrective(2, "Reparacion de motor");

mantenimiento1.ejecutar();
mantenimiento2.ejecutar();

const notificacionEmail = new EmailNotification();
const alertManager = new AlertManager(notificacionEmail);

alertManager.activarAlerta("Mantenimiento completado con exito. ");
