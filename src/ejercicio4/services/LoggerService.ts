
export class LoggerService{
    
    log( mensaje: string ): void {
        console.log(`[LOG]: ${mensaje}`);
    }
}