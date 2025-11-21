import { retornoAnalisis } from "./types";

export function analizarLista( numeros: number[] ): retornoAnalisis {

    if( numeros.length === 0 ){
        throw new Error("La lista no puede estar vacía.");
    }

    let mayor = numeros[0];
    let suma = 0;

    for( const num of numeros ){

        if( num > mayor ){
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