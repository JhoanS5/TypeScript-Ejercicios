"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analizarLista = analizarLista;
function analizarLista(numeros) {
    if (numeros.length === 0) {
        throw new Error("La lista no puede estar vacía.");
    }
    let mayor = numeros[0];
    let suma = 0;
    for (const num of numeros) {
        if (num > mayor) {
            mayor = num;
        }
        suma += num;
    }
    const promedio = suma / numeros.length;
    return {
        mayor,
        promedio,
        cantidad: numeros.length
    };
}
//# sourceMappingURL=analizarLista.js.map